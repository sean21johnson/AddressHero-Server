const knex = require("knex");
const app = require("../src/app");
const helpers = require("./test-helpers");

describe("Users Endpoints", function () {
    let db;

    const { testUsers } = helpers.makeContactsFixtures();

    before("make knex instance", () => {
        db = knex({
            client: "pg",
            connection: process.env.DATABASE_URL_TEST
        });
        app.set("db", db)
    })

    after("disconnect from db", () => db.destroy());

    before("cleanup", () => helpers.cleanTables(db));

    afterEach("cleanup", () => helpers.cleanTables(db));

    describe(`POST /api/users`, () => {
		context(`User Validation`, () => {
			beforeEach("insert users", () => {
				helpers.seedUsers(db, testUsers);
			});

			context(`Happy path`, () => {
				it(`responds 201 which indicates that the user was successfully posted to the test database`, () => {
					const newUser = {
						first_name: "Steve",
						last_name: "Littlefield",
						email: "steve@gmail.com",
						username: "stevie",
						password: "Hero123!",
					};
					return supertest(app).post("/api/users").send(newUser).expect(201);
				});
			});
		});
	});
})