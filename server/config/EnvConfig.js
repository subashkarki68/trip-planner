require("dotenv").config();
const { string, number, object } = require("zod");

const envSchema = object({
  PORT: number().int().min(1).max(65535).optional().default(3000),
  NODE_ENV: string().optional().default("development"),
});

const envVars = {
  PORT: parseInt(process.env.PORT, 10),
  NODE_ENV: process.env.NODE_ENV,
};

try {
  envSchema.parse(envVars);
} catch (error) {
  console.error("Environment variables validation failed:", error);
  process.exit(1);
}

module.exports = { envVars };
