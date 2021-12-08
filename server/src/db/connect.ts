import mongoose from "mongoose";
import log from "../logger";
import config from 'config';

function connect() {
  const dbUri = config.get('DB_URI') as string;

  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error" + error, error);
      process.exit(1);
    });
}

export default connect;