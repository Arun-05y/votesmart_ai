# 🗳️ VoteSmart AI – Election Process Education Assistant

VoteSmart AI is a modern, production-ready web application designed to educate citizens, especially first-time voters, about the election process. Powered by Google Gemini AI, it provides personalized guidance, interactive checklists, and real-time support.

## 🎯 Features

- **🧠 AI Chat Assistant**: Powered by Gemini 1.5 Flash to answer any election-related queries.
- **🗺️ Interactive Election Journey**: A visual step-by-step guide from eligibility to voting day.
- **📅 Timeline Generator**: Get critical election dates based on your location and election type.
- **📚 Voter Guide**: Comprehensive lists of required documents and voting do's and don'ts.
- **🏆 Voter IQ Quiz**: Fun and educational quiz to test your knowledge about the democratic process.
- **🌓 Dark Mode**: Sleek, accessible UI with full dark mode support.
- **♿ Accessibility (A11y)**: Fully semantic HTML with ARIA roles for screen-reader compatibility.
- **🛡️ High Security**: Powered by Express Rate Limit and Helmet to prevent DDoS and secure headers.

## 🏗️ Architecture

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide icons.
- **Backend**: Node.js, Express (Modular Architecture).
- **AI Integration**: Google Generative AI (Gemini API) using Singleton Service Layer.
- **Styling**: Premium custom CSS with glassmorphism and smooth animations.

## 📁 Project Structure

```text
VoteSmart/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Route handlers (e.g., chat.controller.js)
│   │   ├── services/         # Business logic & 3rd party APIs (e.g., gemini.service.js)
│   │   ├── routes/           # Express routers (e.g., api.routes.js)
│   │   ├── middlewares/      # Custom middleware (error, validation, auth)
│   │   ├── utils/            # Helpers (e.g., logger.js)
│   │   ├── data/             # Mock data
│   │   └── app.js            # Express app configuration
│   ├── server.js             # Entry point
│   ├── .env                  
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/       # Modular UI components
│   │   ├── App.jsx           # Main App file
│   │   └── index.css         # Global Styles
│   └── package.json
└── README.md
```

## 🚀 Quick Start

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
3. Create a `.env` file and add your `GEMINI_API_KEY`:
   ```env
   GEMINI_API_KEY=your_api_key_here
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
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

## 🛡️ Security & Performance Enhancements

- **Helmet**: Secures HTTP headers.
- **Rate-Limiter**: Limits API requests to prevent DDoS attacks.
- **Singleton Model**: Gemini AI model loaded globally once in the Service layer to drastically improve time complexity and reduce initialization overhead.
- **Global Error Handling**: Safely catches unhandled exceptions to prevent the server from crashing and leaking stack traces.

---
Built with ❤️ for democracy.
