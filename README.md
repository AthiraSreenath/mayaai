# Maya AI

## Getting Started

Setup Environment
```
conda create -n mayaai python=3.11.8
conda activate mayaai
pip install -r requirements.txt
```

Start Server
```
uvicorn backend.server:app
```

TODO: Publish as docker image & pypi package for easy distribution. Add Makefile for building and publishing.
