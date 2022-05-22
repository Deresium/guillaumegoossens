declare namespace NodeJS{
    interface ProcessEnv {
        PORT: string;
        DNS_NAME: string;
        PG_USER: string;
        PG_PASSWORD: string;
        DB_NAME: string;
        DB_HOST: string;
        DATABASE_URL: string;
        AWS_KEY_ID: string;
        AWS_KEY_SECRET: string;
        AWS_BUCKET_NAME: string;
        JWT_SECRET: string;
    }
}