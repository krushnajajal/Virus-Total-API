# 🛡️ VirusTotal File Scanner

A simple web application built with Node.js and Express that allows users to upload files and scan them using the VirusTotal API. It provides a clean and animated user interface to display the scan results.

## ✨ Features

* **File Upload**: Easily upload any file through a user-friendly web interface.
* **VirusTotal Integration**: Leverages the VirusTotal API to perform comprehensive malware analysis.
* **Real-time Scanning Status**: Displays a loading animation while the file is being scanned by VirusTotal.
* **Detailed Scan Results**: Shows a breakdown of scan statistics (harmless, malicious, suspicious, undetected).
* **Clean UI**: Modern and responsive design with subtle animations for a better user experience.

## 🚀 Technologies Used

* **Backend**:
    * [Node.js](https://nodejs.org/): JavaScript runtime environment.
    * [Express.js](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
    * [Multer](https://github.com/expressjs/multer): Node.js middleware for handling `multipart/form-data`, primarily used for uploading files.
    * [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
    * [Dotenv](https://github.com/motdotla/dotenv): Loads environment variables from a `.env` file.
    * [Form-Data](https://github.com/form-data/form-data): A library for creating `multipart/form-data` streams.
* **Frontend**:
    * HTML5
    * CSS3 (with custom animations)
    * JavaScript
    * [Font Awesome](https://fontawesome.com/): For icons.
    * [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins): For typography.
* **External API**:
    * [VirusTotal API v3](https://docs.virustotal.com/reference/overview): For file analysis.

## 📁 Project Structure

.
├── server.js
├── .env
├── .gitignore
├── package.json
├── public/
│   ├── index.html
│   ├── results.html
│   ├── status.html
│   └── styles.css
└── uploads/

Here is an updated `README.md` file. I've corrected the "Project Structure" section to ensure it renders correctly as a visual tree structure, which will make it much clearer to anyone viewing your repository on GitHub.

I've enclosed the file tree within a Markdown code block, which preserves the formatting and ensures it displays as intended. I've also removed the duplicate "Project Structure" heading.

### `README.md`

```markdown
# 🛡️ VirusTotal File Scanner

A simple web application built with Node.js and Express that allows users to upload files and scan them using the VirusTotal API. It provides a clean and animated user interface to display the scan results.

## ✨ Features

* **File Upload**: Easily upload any file through a user-friendly web interface.
* **VirusTotal Integration**: Leverages the VirusTotal API to perform comprehensive malware analysis.
* **Real-time Scanning Status**: Displays a loading animation while the file is being scanned by VirusTotal.
* **Detailed Scan Results**: Shows a breakdown of scan statistics (harmless, malicious, suspicious, undetected).
* **Clean UI**: Modern and responsive design with subtle animations for a better user experience.

## 🚀 Technologies Used

* **Backend**:
    * [Node.js](https://nodejs.org/): JavaScript runtime environment.
    * [Express.js](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
    * [Multer](https://github.com/expressjs/multer): Node.js middleware for handling `multipart/form-data`, primarily used for uploading files.
    * [Axios](https://axios-http.com/): Promise-based HTTP client for the browser and Node.js.
    * [Dotenv](https://github.com/motdotla/dotenv): Loads environment variables from a `.env` file.
    * [Form-Data](https://github.com/form-data/form-data): A library for creating `multipart/form-data` streams.
* **Frontend**:
    * HTML5
    * CSS3 (with custom animations)
    * JavaScript
    * [Font Awesome](https://fontawesome.com/): For icons.
    * [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins): For typography.
* **External API**:
    * [VirusTotal API v3](https://docs.virustotal.com/reference/overview): For file analysis.

## 📁 Project Structure

```

.
├── server.js
├── .env
├── .gitignore
├── package.json
├── public/
│   ├── index.html
│   ├── results.html
│   ├── status.html
│   └── styles.css
└── uploads/

````

## ⚙️ Setup Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* [Node.js](https://nodejs.org/) (LTS version recommended)
* [npm](https://www.npmjs.com/) (Node Package Manager, comes with Node.js)
* A [VirusTotal API Key](https://www.virustotal.com/gui/my-apikey) (a free public API key is sufficient for testing, but be aware of rate limits).

### Installation

1.  **Clone the repository** (if applicable, otherwise, create the project folder and files manually):
    ```bash
    git clone <your-repository-url>
    cd <your-project-folder>
    ```

2.  **Install dependencies**:
    Navigate to the project's root directory and install the required Node.js packages:
    ```bash
    npm install express multer axios dotenv form-data
    ```

3.  **Set up Environment Variables**:
    Create a file named `.env` in the root of your project directory. Add your VirusTotal API key to this file:
    ```
    VT_API_KEY="YOUR_VIRUSTOTAL_API_KEY_HERE"
    ```
    Replace `"YOUR_VIRUSTOTAL_API_KEY_HERE"` with your actual API key obtained from the VirusTotal website.

4.  **Create `uploads` directory**:
    Ensure there's an `uploads` directory in your project root. This is where Multer will temporarily store uploaded files.
    ```bash
    mkdir uploads
    ```

### Running the Application

1.  **Start the server**:
    From the project's root directory, run the server:
    ```bash
    node server.js
    ```
    You should see a message in your terminal indicating that the server is running, e.g., `Server is running on http://localhost:3000`.

2.  **Access the application**:
    Open your web browser and go to:
    ```
    http://localhost:3000/
    ```

## 🚀 Usage

1.  **Upload a File**: On the home page (`http://localhost:3000/`), click the "Choose File" button. Select any file from your local machine. The selected file's name will appear on the button.
2.  **Initiate Scan**: Click the "Upload & Scan" button.
3.  **View Status**: You will be redirected to a "Scanning in progress..." page with a loading animation. The server is actively polling the VirusTotal API for your scan results during this time.
4.  **View Results**: Once the scan is complete (which can take a few seconds to a minute, depending on file size and VirusTotal's queue), you will be automatically redirected to the results page, displaying the scan statistics for your uploaded file.
5.  **Scan Another File**: Click the "Scan another file" link to return to the home page and upload a new file.
````
