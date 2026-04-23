import app from "./app";
import { connectDatabase } from "./config/database";

const PORT = process.env.PORT || 4000;

async function main(): Promise<void> {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`🚀 API running on http://localhost:${PORT}`);
  });
}

main().catch(console.error);
