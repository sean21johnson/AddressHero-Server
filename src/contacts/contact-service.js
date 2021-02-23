const ContactsService = {
    getAllContacts(knex, users_id) {
		return knex
			.select("*")
			.from("contacts")
			.where("users_id", users_id); 
    },
    insertNewContact(knex, newContact) {
        return knex
            .insert(newContact)
            .into("contacts")
            .returning("*")
            .then((rows) => {
                return rows[0];
            })
    },
    deleteContact(knex, contact_id, user_id) {
        console.log('id is ', contact_id)
        console.log('user id is ', user_id)
        return knex
            .from("contacts")
            .where("id", contact_id)
            .where("users_id", user_id)
            .delete()
    },
    getContact(knex, contact_id, user_id) {
        return knex
            .from("contacts")
            .where("id", contact_id)
            .where("users_id", user_id)
            .limit(1)
    },
    getSearchResults(knex, users_id, search) {
        return knex
            .select("*")
            .from("contacts")
            .where("fullname", "ILIKE", `%${search}%`)
            .where("users_id", users_id)
    },
    updateContact(knex, contact_id, user_id, newContact) {
        return knex
            .from("contacts")
            .where("id", contact_id)
            .where("users_id", user_id)
            .update(newContact);
    },
    getAllAddresses(knex, contact_id) {
        return knex
            .select("*")
            .from("addresses")
            .where("contact_id", contact_id)
    },
    insertAddress(knex, newAddress) {
        return knex
            .insert(newAddress)
            .into("addresses")
            .returning("*")
            .then((rows) => {
                return rows[0];
        })
    },
    deleteAddress(knex, id) {
        return knex
            .from("addresses")
            .where("id", id)
            .delete()
    },
    insertTimelinePost(knex, post) {
        return knex
            .insert(post)
            .into("timeline")
            .returning("*")
            .then((rows) => {
                return rows[0];
            })
    }
    
}

module.exports = ContactsService;