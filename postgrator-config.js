require("dotenv").config();

module.exports = {
	"migrationsDirectory": "migrations",
	"driver": "pg",
	"connectionString": (process.env.NODE_ENV === 'test')
	? process.env.DATABASE_URL_TEST
	: process.env.DATABASE_URL,
	"host": process.env.MIGRATION_DB_HOST,
	"port": process.env.MIGRATION_DB_PORT,
	"database": process.env.MIGRATION_DB_NAME,
	"username": process.env.MIGRATION_DB_USER,
	"password": process.env.MIGRATION_DB_PASS,
	// ssl: true
};