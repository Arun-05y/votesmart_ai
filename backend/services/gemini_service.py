import google.generativeai as genai
from core.config import settings

class GeminiService:
    def __init__(self):
        genai.configure(api_key=settings.GEMINI_API_KEY)
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    async def get_chat_response(self, message: str, history: list = []):
        try:
            # Start chat with provided history
            chat = self.model.start_chat(history=history)
            
            system_prompt = (
                "You are VoteSmart AI, a helpful and neutral assistant for voter education. "
                "Default to Indian election rules unless specified. Keep answers factual."
            )
            
            response = chat.send_message(f"{system_prompt}\n\nUser: {message}")
            return response.text
        except Exception as e:
            raise Exception(f"Gemini API Error: {str(e)}")

gemini_service = GeminiService()
