# 🗳️ VoteSmart AI

**VoteSmart AI** is a cutting-edge, AI-powered platform designed to revolutionize voter education. By leveraging the power of Google Gemini AI and a high-performance FastAPI backend, it provides citizens with personalized, neutral, and easy-to-understand insights into the democratic process.

---

## 🌟 Key Features

| Feature | Description |
| :--- | :--- |
| **🤖 AI Chat Assistant** | Real-time, neutral answers to complex election queries powered by Gemini 1.5 Flash. |
| **📑 Smart Summarization** | AI-driven summaries of long policy documents and candidate manifestos. |
| **📱 Personalized Feed** | A tailored experience that highlights voting rules and dates specific to your region. |
| **🔐 Secure Auth** | Robust authentication and data protection for a personalized user journey. |

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) for lightning-fast performance.
- **Styling**: Vanilla CSS with modern design tokens (Glassmorphism, Dark Mode).
- **Icons**: Lucide React for a clean, accessible UI.

### **Backend**
- **Framework**: [FastAPI](https://fastapi.tiangolo.com/) (Python) for asynchronous, high-speed API delivery.
- **AI Engine**: [Google Gemini API](https://aistudio.google.com/) for natural language understanding.
- **Database**: [MongoDB](https://www.mongodb.com/) for flexible, document-based data storage.
- **Validation**: Pydantic for strict environment and data schema validation.

---

## 🚀 Getting Started

### **Prerequisites**
- Python 3.10+
- Node.js 18+
- MongoDB instance (local or Atlas)
- Google Gemini API Key

### **1. Backend Setup**
```bash
cd backend
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload
```

### **2. Frontend Setup**
```bash
cd frontend
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🐳 Docker Deployment

Easily deploy the entire stack using the included multi-stage Dockerfile:

```bash
docker build -t votesmart-ai .
docker run -p 8080:8080 votesmart-ai
```

---

## 🛡️ Security & Testing

- **Env Validation**: Uses `pydantic-settings` to ensure required API keys are present before the app starts.
- **Unit Testing**: Powered by `pytest` and `httpx`. Run tests with:
  ```bash
  cd backend
  pytest
  ```

---

Built with ❤️ for a more informed democracy.
