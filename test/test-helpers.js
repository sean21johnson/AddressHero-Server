const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function makeUsersArray() {
	return [
		{
			id: 100,
			first_name: "billy",
			last_name: "bob",
			email: "billybob@gmail.com",
			username: "billybob",
			pass_word: "Hero123!",
		},
		{
			id: 101,
			first_name: "joey",
			last_name: "blogs",
			email: "joeyblogs@gmail.com",
			username: "joeyblogs",
			pass_word: "Hero123!",
		},
	];
}

function makeContactsArray(userInput) {
	return [
		{
			id: 200,
			fullname: "LeBron James",
			users_id: userInput[0].id,
			picture: "https://imgur.com/JOxoCEx.jpg",
			phone_number: "2223334444",
		},
		{
			id: 201,
			fullname: "Serena Williams",
			users_id: userInput[1].id,
			picture: "https://imgur.com/7h4bYw0.jpg",
			phone_number: "2223334444",
		},
	];
}

function makeAddressesArray(contactInput) {
	return [
		{
			id: 400,
			contact_id: contactInput[0].id,
			city: "Boston",
			us_state: "MA",
			street: "110 Legends Way",
			zip: "02114",
			map:
				"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11791.55727632846!2d-71.062146!3d42.366198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32d335fe5ed797a8!2sTD%20Garden!5e0!3m2!1sen!2sus!4v1612981682945!5m2!1sen!2sus",
		},
		{
			id: 401,
			contact_id: contactInput[1].id,
			city: "Boston",
			us_state: "MA",
			street: "110 Legends Way",
			zip: "02114",
			map:
				"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11791.55727632846!2d-71.062146!3d42.366198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32d335fe5ed797a8!2sTD%20Garden!5e0!3m2!1sen!2sus!4v1612981682945!5m2!1sen!2sus",
		},
	];
}

function makeTimelineArray(userInput, addressInput) {
	return [
		{
			timeline_id: 500,
			event_type: "Birthday",
			address_id: addressInput[0].id,
			users_id: userInput[0].id,
			date_created: new Date("2029-01-22T16:28:32.615Z"),
		},
		{
			timeline_id: 501,
			event_type: "Anniversary",
			address_id: addressInput[1].id,
			users_id: userInput[1].id,
			date_created: new Date("2029-01-22T16:28:32.615Z"),
		},
	];
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
	const token = jwt.sign({ users_id: user.users_id }, secret, {
		subject: user.username,
		algorithm: "HS256",
	});
	return `bearer ${token}`;
}

function makeContactsFixtures() {
	const testUsers = makeUsersArray();
	const testContacts = makeContactsArray(testUsers);
	const testAddresses = makeAddressesArray(testContacts);
	const testTimeline = makeTimelineArray(testUsers, testAddresses);
	return { testUsers, testContacts, testAddresses, testTimeline };
}

function cleanTables(db) {
	return db.transaction((trx) =>
		trx.raw(
			`TRUNCATE
                users,
				contacts,
				addresses,
				timeline`
		)
	);
}

async function seedUsers(db, users) {
	const preppedUsers = users.map((user) => ({
		...user,
		pass_word: bcrypt.hashSync(user.pass_word, 1),
	}));
	await db.into("users").insert(preppedUsers);
}

function seedContactsTable(db, users, contacts) {
	return db.transaction(async (trx) => {
		await seedUsers(trx, users);
		await trx.into("contacts").insert(contacts);
	});
}

function seedAllTables(db, users, contacts, addresses, timeline) {
	return db.transaction(async (trx) => {
		await seedUsers(trx, users);
		await trx.into("contacts").insert(contacts);
		await trx.into("addresses").insert(addresses);
		await trx.into("timeline").insert(timeline);
	});
}

module.exports = {
	makeUsersArray,
	makeContactsArray,
	makeAddressesArray,
	makeTimelineArray,
	makeAuthHeader,
	makeContactsFixtures,
	cleanTables,
	seedContactsTable,
	seedUsers,
	seedAllTables,
};
