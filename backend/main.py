from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

from api.v1.chat import router as chat_router

app = FastAPI(title="VoteSmart AI API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Welcome to VoteSmart AI Backend!"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
