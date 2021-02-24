require("dotenv").config();

module.exports = {
	migrationsDirectory: "migrations",
	driver: "pg",
	connectionString: process.env.DATABASE_URL || "postgresql://addresshero_boss@localhost/addresshero_database"
	// connectionString: process.env.DATABASE_URL_TEST,
};