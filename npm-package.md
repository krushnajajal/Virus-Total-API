
# 🛡️ TotalVirus Scanner
[![NPM Version](https://img.shields.io/npm/v/your-package-name.svg)](https://www.npmjs.com/package/totalvirus-api)
[![Downloads](https://img.shields.io/npm/dt/your-package-name.svg)](https://www.npmjs.com/package/totalvirus-api)

A lightweight, modern, and powerful Node.js wrapper for the [VirusTotal API](https://www.virustotal.com/).  
Scan files, scan URLs, and fetch real-time malware analysis — with a single line of code.

> ⚡ Plug in your API key once, and you're ready to sniff out threats like a digital hound.

---

## 🧠 How It Works

TotalVirus Scanner connects directly with the [VirusTotal v3 API](https://docs.virustotal.com/reference/overview), allowing you to:

- 🔎 **Scan files** for malicious content by uploading them
- 🌐 **Scan URLs** to detect phishing, malicious redirects, or unsafe domains
- 📈 **Retrieve scan reports** using the analysis ID returned from a scan

All API calls are abstracted into neat promise-based functions for modern, hassle-free integration.

---

## 📦 Installation

```bash
npm install totalvirus-scanner
```

---

## 🚀 Quick Start

```js
// Import and initialize with your VirusTotal API key
const scanner = require('totalvirus-scanner')('YOUR_API_KEY_HERE');

// Scan a file
scanner.scanFile('./example.exe')
  .then(console.log)
  .catch(console.error);

// Scan a URL
scanner.scanUrl('https://example.com')
  .then(console.log)
  .catch(console.error);

// Get a scan report by ID
scanner.getReport('your_analysis_id_here')
  .then(console.log)
  .catch(console.error);
```

---

## 🔧 Available Functions

| Function                | Description                                |
| -----------------------|--------------------------------------------|
| `scanFile(filePath)`   | Uploads a file and returns a scan analysis |
| `scanUrl(url)`         | Submits a URL for scan and returns analysis|
| `getReport(id)`        | Fetches the results of a scan by ID        |

---

## 🔐 VirusTotal API Key Setup

To use this package, you need a free VirusTotal API key:  
👉 [Get API Key](https://www.virustotal.com/gui/join-us)

Once you have your key, just pass it once:

```js
const scanner = require('totalvirus-scanner')('YOUR_API_KEY');
```

No need to repeat it — it stays with the session.

---

## 📁 Folder Structure

```
totalvirus-scanner/
│
├── index.js               # Entry point
├── api/
│   └── virustotal.js      # Core scanning logic
├── package.json           # NPM metadata
└── README.md              # You’re reading it!
```

---

## 📊 Sample Output (getReport)

```json
{
  "data": {
    "id": "u-12345abcd",
    "type": "analysis",
    "attributes": {
      "status": "completed",
      "stats": {
        "malicious": 1,
        "harmless": 68,
        "suspicious": 0,
        "undetected": 2,
        "timeout": 0
      }
    }
  }
}
```

---

## 🧪 Test It Locally

```bash
npm install /path/to/your/totalvirus-scanner
```

Then:

```js
const scanner = require('totalvirus-scanner')('your_api_key');
scanner.scanUrl('https://example.com').then(console.log);
```

---

## 📝 License

MIT License © 2025 [Vraj Suratwala](https://github.com/your-github-handle)

---

##  Conclusion

> In the land of code, where threats may hide,  
> A tool was forged, with truth as its guide.  
> Give it a file, a link, a clue —  
> It scans, reveals, and protects you too.

**TotalVirus Scanner** — where scanning is simplified, and malware gets nullified. 🔥

---

