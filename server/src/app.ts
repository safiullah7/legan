import express from 'express';
import config from 'config';
import log from './logger';
import connect from './db/connect';
import routes from './routes/routes';
import deserializeUser from './middlewares/deserializeUser';

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(deserializeUser);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
    log.info(`server running at http://${host}:${port}`);

    connect();

    routes(app);
})