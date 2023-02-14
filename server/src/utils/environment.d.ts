declare module "cors";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
      PAYSTACK_PUBLIC_KEY: string;
      PAYSTACK_SECRET_KEY: string;
      DATABASE_URL: string;
    }
  }
}

export {};
