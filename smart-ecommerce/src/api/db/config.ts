interface DatabaseConfig {
    server: {
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
    };
    options: {
        encrypt: boolean;
        trustServerCertificate: boolean;
        connectionTimeout: number;
    };
}

function validateConfig(): void {
    const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
    const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);
    
    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }
}

validateConfig();

const config: DatabaseConfig = {
    server: {
        host: process.env.DB_HOST!,
        port: parseInt(process.env.DB_PORT || '1433', 10),
        user: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB_NAME!,
    },
    options: {
        encrypt: true,
        trustServerCertificate: false,
        connectionTimeout: parseInt(process.env.DB_TIMEOUT || '30000', 10),
    },
};

export default config;