# 🗳️ VoteSmart AI – Election Process Education Assistant

VoteSmart AI is a modern, production-ready web application designed to educate citizens, especially first-time voters, about the election process in India. Powered by Google Gemini AI, it provides personalized guidance, interactive checklists, and real-time support.

## 🎯 Features

- **🧠 AI Chat Assistant**: Powered by Gemini 1.5 Flash to answer any election-related queries.
- **🗺️ Interactive Election Journey**: A visual step-by-step guide from eligibility to voting day.
- **📅 Timeline Generator**: Get critical election dates based on your location and election type.
- **📚 Voter Guide**: Comprehensive lists of required documents and voting do's and don'ts.
- **🏆 Voter IQ Quiz**: Fun and educational quiz to test your knowledge about the democratic process.
- **🌓 Dark Mode**: Sleek, accessible UI with full dark mode support.
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop).

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide icons.
- **Backend**: Node.js, Express.
- **AI Integration**: Google Generative AI (Gemini API).
- **Styling**: Premium custom CSS with glassmorphism and smooth animations.

## 📁 Project Structure

```text
VoteSmart/
├── backend/
│   ├── server.js         # API Endpoints
│   ├── .env              # Secrets (API Keys)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/   # Modular UI Components
│   │   ├── App.jsx       # Main Entry
│   │   └── index.css     # Global Styles
│   └── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Google Gemini API Key ([Get it here](https://aistudio.google.com/app/apikey))

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```
4. Add your `GEMINI_API_KEY` to the `.env` file.
5. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite dev server:
   ```bash
   npm run dev
   ```

## ☁️ Deployment

### Backend (Google Cloud Run)

1. Install Google Cloud SDK.
2. Initialize project: `gcloud init`
3. Deploy:
   ```bash
   gcloud run deploy votesmart-backend --source . --env-vars-file env.yaml --allow-unauthenticated
   ```

### Frontend (Vercel / Firebase)

- **Vercel**: Connect your GitHub repository and it will auto-detect the Vite project.
- **Firebase**: Run `firebase init` followed by `npm run build` and `firebase deploy`.

## ✨ Future Enhancements

- Multi-language support (Tamil, Hindi, etc.)
- Voice input for the AI Assistant.
- Direct integration with ECI APIs for real-time booth statistics.

---
Built with ❤️ for democracy.
