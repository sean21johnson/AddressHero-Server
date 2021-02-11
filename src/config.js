module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL:
        process.env.DATABASE_URL ||
        "postgresql://addresshero_boss@localhost/addresshero_database",
    JWT_SECRET: process.env.JWT_SECRET || "change-this-secret",
}