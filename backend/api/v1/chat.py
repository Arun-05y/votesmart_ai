from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.gemini_service import gemini_service

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    history: list = []

@router.post("/chat")
async def chat_with_ai(request: ChatRequest):
    try:
        response = await gemini_service.get_chat_response(request.message, request.history)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
