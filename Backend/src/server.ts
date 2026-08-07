import app from "./app.js";
import { connectDB } from "./config/database.js";
import { env } from "./config/env.js";
import { connectRedis } from "./shared/lib/redis.js";


  await connectDB();
  await connectRedis();
app.listen(env.PORT, () => {
  console.log(`Server running on PORT ${env.PORT}`);
});
