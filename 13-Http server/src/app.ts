import express, {response} from 'express';
import "express-async-errors";

const app = express();

app.get('/planets', (request, response) => {
    response.json([
        {'name': "Mercury"},
        {'name': "Mars"},
        {'name': "Venus"}
    ])
});

export default app;