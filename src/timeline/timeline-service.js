const TimelineService = {
	getFullTimeline(knex, users_id) {
		return knex
			.select("*")
			.from("timeline")
			.join("addresses", { "timeline.address_id": "addresses.id" })
			.join("contacts", { "contacts.id": "addresses.contact_id" })
			.where("timeline.users_id", users_id);
	},
};

module.exports = TimelineService;
