# Task Manager — Node.js + Express

A beginner-friendly full-stack project with a browser UI and REST API.

## Features
- List tasks (`GET /api/tasks`)
- Add tasks (`POST /api/tasks`)
- Mark tasks complete (`PATCH /api/tasks/:id`)
- Delete tasks (`DELETE /api/tasks/:id`)
- Health endpoint (`GET /api/health`)

## Run locally
1. Install Node.js.
2. In this folder, run `npm install`.
3. Run `npm start`.
4. Open `http://localhost:3000`.

## Deploy on Render
1. Upload this project to a GitHub repository.
2. On Render, choose **New → Web Service** and connect the repository.
3. Set **Build Command** to `npm install`.
4. Set **Start Command** to `npm start`.
5. Select a free instance if available and deploy.
6. Test the live page and `/api/health`.

## Note
This starter app stores tasks in memory, so tasks reset when the server restarts. Extend it with a database before using it for real users. Review the code and make sure you understand it before presenting it as your project.
