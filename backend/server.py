from os import path

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse


app = FastAPI()
ui_path = path.join(path.dirname(__file__), '../frontend/build/')

@app.get("/")
def index():
    return FileResponse(path.join(ui_path, "index.html"))

@app.exception_handler(404)
async def exception_404_handler(request, exc):
    return FileResponse(path.join(ui_path, "index.html"))

app.mount("/", StaticFiles(directory=ui_path), name="ui")
