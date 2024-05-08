from os import path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse


ui_app = FastAPI()

ui_path = path.join(path.dirname(__file__), '../../frontend/build/')

# Mount static files, logo images and other resources
ui_app.mount("/", StaticFiles(directory=ui_path))

@ui_app.exception_handler(404)
async def default_handler(_r, _e):
    """Default request handler:
    Serves index HTML file with React APP for all paths.
    Needed as we are using browser router in react-router-dom."""

    return FileResponse(path.join(ui_path, "index.html"))
