from pydantic_settings import BaseSettings
from pydantic import Field

class Settings(BaseSettings):
    PROJECT_NAME: str = "VoteSmart AI"
    API_V1_STR: str = "/api/v1"
    
    # Validation using Pydantic Field
    GEMINI_API_KEY: str = Field(default=..., min_length=10, description="Google Gemini API Key is required")
    MONGODB_URL: str = Field(default="mongodb://localhost:27017", description="MongoDB Connection string")
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
