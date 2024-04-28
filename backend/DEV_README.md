# MayaAI - Backend

## Setup Environment
```
conda create -n mayaai python=3.11.8
conda activate mayaai
pip install -r requirements.txt
```

## Start Server
```
uvicorn server:app --reload
```

## Update UI
UI code is in the `/frontend` directory. A production build of the UI is available in `/backend/public` directory for easy startup... it must be kept updated.

In `./frontend`
```
npm run build
```

In `./backend`
```
rm -rf public/
cp -r ../frontend/build public
```
