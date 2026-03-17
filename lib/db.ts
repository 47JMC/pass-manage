import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI ?? "";
if (!MONGODB_URI)
  throw new Error("❌ MONGODB_URI is missing in environment variables");

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// Extend globalThis with typed mongoose cache
declare global {
  var mongooseCache: MongooseCache | undefined;
}

// Initialize global cache (only once)
const globalCache: MongooseCache = globalThis.mongooseCache ?? {
  conn: null,
  promise: null,
};

export async function connectDB(): Promise<Mongoose> {
  if (globalCache.conn) return globalCache.conn;

  if (!globalCache.promise) {
    globalCache.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }

  globalCache.conn = await globalCache.promise;
  globalThis.mongooseCache = globalCache;

  return globalCache.conn;
}
