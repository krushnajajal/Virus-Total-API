import express from 'express';
import multer from 'multer';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import FormData from 'form-data';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage: storage });

// Asynchronous polling function to check for scan results
const pollForResults = async (analysisId, apiKey) => {
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
        try {
            const resultResponse = await axios.get(`https://www.virustotal.com/api/v3/analyses/${analysisId}`, {
                headers: { 'x-apikey': apiKey }
            });

            if (resultResponse.data.data.attributes.status === 'completed') {
                return resultResponse.data.data.attributes.stats;
            }
        } catch (err) {
            console.error('Error while polling VirusTotal API:', err.response ? err.response.data : err.message);
            throw err;
        }
    }
};

app.post('/scan', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const filePath = req.file.path;
    const fileName = req.file.originalname;

    try {
        const form = new FormData();
        form.append('file', fs.createReadStream(filePath), fileName);

        const uploadResponse = await axios.post('https://www.virustotal.com/api/v3/files', form, {
            headers: {
                'x-apikey': process.env.VT_API_KEY,
                ...form.getHeaders()
            }
        });

        const analysisId = uploadResponse.data.data.id;
        fs.unlinkSync(filePath); // Clean up the uploaded file

        // Redirect to a status page while the server is polling
        res.redirect(`/status.html?analysisId=${analysisId}&fileName=${encodeURIComponent(fileName)}`);

    } catch (err) {
        console.error("❌ File upload failed:", err.response ? err.response.data : err.message);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        res.status(500).send('File upload failed. Check server logs.');
    }
});

// A new route to fetch the results once they are ready
app.get('/results', async (req, res) => {
    const { analysisId, fileName } = req.query;
    if (!analysisId || !fileName) {
        return res.status(400).send('Missing analysisId or fileName.');
    }

    try {
        const stats = await pollForResults(analysisId, process.env.VT_API_KEY);
        const params = new URLSearchParams({
            harmless: stats.harmless,
            malicious: stats.malicious,
            suspicious: stats.suspicious,
            undetected: stats.undetected,
            fileName: fileName
        });
        res.redirect(`/results.html?${params.toString()}`);
    } catch (err) {
        res.status(500).send('Failed to retrieve scan results.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});