# MayaAI - Backend

## Setup Environment
```
conda create -n mayaai python=3.11.8
conda activate mayaai
pip install -r requirements.txt
```

## Start MayaAI
```
uvicorn server:app
```
For development, its better to start with `--reload`. It make the server restart after code changes.
```
uvicorn server:app --reload
```
