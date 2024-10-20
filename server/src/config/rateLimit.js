const rateLimit = require("express-rate-limit");
const { envVars: env } = require("./EnvConfig");

const limiter = rateLimit({
  windowMs: env.API_RATE_LIMIT * 60 * 1000,
  max: env.API_RATE_LIMIT_REQUESTS,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
