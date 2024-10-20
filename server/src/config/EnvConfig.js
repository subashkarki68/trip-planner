require("dotenv").config();
const { string, number, object } = require("zod");

const envSchema = object({
  PORT: number().int().min(1).max(65535).optional().default(3000),
  NODE_ENV: string().optional().default("development"),
  API_RATE_LIMIT: number().int().min(1).max(10000).optional().default(60),
  API_RATE_LIMIT_REQUESTS: number()
    .int()
    .min(1)
    .max(10000)
    .optional()
    .default(100),
});

const envVars = {
  PORT: parseInt(process.env.PORT, 10) | 3000,
  NODE_ENV: process.env.NODE_ENV,
  API_RATE_LIMIT: process.env.API_RATE_LIMIT | 15,
  API_RATE_LIMIT_REQUESTS: process.env.API_RATE_LIMIT_REQUESTS | 100,
};

try {
  envSchema.parse(envVars);
} catch (error) {
  console.error("Environment variables validation failed:", error);
  process.exit(1);
}

module.exports = { envVars };
