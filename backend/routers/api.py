from fastapi import APIRouter, status
from starlette.responses import JSONResponse


api_router = APIRouter()

@api_router.get("/test")
async def handle():
    return {"test": 1}

@api_router.get("/{full_path:path}")
async def catch_all():
    """Catch all API request"""

    return JSONResponse(
        status_code=status.HTTP_404_NOT_FOUND,
        content={"detail": "API Not Found!"}
    )
