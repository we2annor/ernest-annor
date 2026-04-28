import app from "./app";
import { connectDatabase } from "./config/database";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;
const HOST = "0.0.0.0";

async function main(): Promise<void> {
  await connectDatabase();

  app.listen(PORT, HOST, () => {
    console.log(`🚀 API running on http://localhost:${PORT}`);
  });
}

main().catch((error) => {
  console.error("❌ Failed to start server:", error);
  process.exit(1);
});
