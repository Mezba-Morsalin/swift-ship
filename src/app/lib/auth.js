import dns from "node:dns/promises";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db(process.env.AUTH_DB_COLLECTION);

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      // =========================
      // USER ROLE
      // =========================
      role: {
        type: "string",
        required: true,
        input: true,
      },

      // =========================
      // MERCHANT BUSINESS NAME
      // =========================
      businessName: {
        type: "string",
        required: false,
        input: true,
      },

      // =========================
      // RIDER NID
      // =========================
      nid: {
        type: "string",
        required: false,
        input: true,
      },

      // =========================
      // PHONE
      // =========================
      phone: {
        type: "string",
        required: false,
        input: true,
      },

      // =========================
      // LOCATION / SERVICE AREA
      // =========================
      location: {
        type: "string",
        required: false,
        input: true,
      },

      // =========================
      // ACCOUNT STATUS
      // Merchant = active
      // Rider = pending
      // =========================
      status: {
        type: "string",
        required: false,
        input: true,
      },

      // =========================
      // MERCHANT PLAN
      // Merchant = free
      // Rider = not applicable
      // =========================
      plan: {
        type: "string",
        required: false,
        input: true,
      },
    },
  },
});