// import * as dotenv from "dotenv";

// dotenv.config({ path: ".env.local" });

export default {
  schema: "./src/db/schema.js",
  out: "./drizzle",
  dialect: "turso",
  // driver: "turso",
  dbCredentials: {
    url: "libsql://run2shop-mddiego.aws-us-east-1.turso.io", // url: process.env.TURSO_DATABASE_URL,
    authToken:
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3ODk1MDMyNzUsImlkIjoiMDFhMGE2OGQtZDIwMS03N2ExLWE5MzItNTZmYWIxMTg3NmM5Iiwia2lkIjoiSW40LWxGUFJBVGREdXBxQms5cWJZYUF5Y1hjQkpOMGJpam9Ddnl4R3hMbyIsInJpZCI6ImE3ZDMwMmI0LWNkNGEtNDBmYy1iZjBiLTZmMDlmZjNjNDQ5YSJ9.NcPO05qFru-3LZha_PifWPlkTPYKraRo_yANk-bQ-efqCOgY_p7g7LYjTFbL6nrjl9bucNuJQN4_1fzoQJ9-Dw", // authToken: process.env.TURSO_AUTH_TOKEN,
  },
};
