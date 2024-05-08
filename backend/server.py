from fastapi import FastAPI

from .routers.ui import ui_app
from .routers.api import api_router


app = FastAPI()

app.include_router(api_router, prefix="/api")
app.mount("/", ui_app)
