import express from "express";
import cors from "cors";

import { PORT } from "./config/config.js";
import { corsOptions } from "./config/cors.js";
import createDbConnection from "./loaders/mongo.js";
import routes from "./routes/routes.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, async () => {
    await createDbConnection();
    console.log(`Listening on ${PORT}`);
});
