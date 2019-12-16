import * as dotenv from "dotenv";
dotenv.config();
import * as bodyParser from 'body-parser';
import * as express from "express";
import * as path from 'path';
import { eventsController } from "./controllers/events.controllers";

const app = express();
app.use(bodyParser.json());

app.use("/api/events", eventsController);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../build')));
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
}

app.use((req, res, next) => {
    res.sendStatus(404);
})

export default app;
