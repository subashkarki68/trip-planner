require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const { envVars: env } = require("./src/config/EnvConfig");
const version1Routes = require("./src/routes");
const globalErrorHandler = require("./src/middlewares/errorHandler");
const limiter = require("./src/config/rateLimit");
const logger = require("./src/config/logger");

const app = express();
const port = env.PORT;

//GLOBAL MIDDLEWARES
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(mongoSanitize());
app.use(cors());

//ROUTES
app.use("/api", limiter, version1Routes);

//ERROR Handler
// app.use(errorMiddleware);
app.use(globalErrorHandler);

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
