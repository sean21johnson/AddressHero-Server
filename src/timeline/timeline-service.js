const TimelineService = {
    // getFullTimeline(knex, users_id) {
    //     return knex
    //         .select("*")
    //         .from("timeline")
    //         .where("users_id", 'ILIKE', `${users_id}`)
    // },
    getFullTimeline(knex, users_id) {
        console.log(users_id)
        return knex
            .select("*")
            .from("timeline")
            .join("addresses", {"timeline.contact_id": "addresses.contact_id"})
            .where("timeline.users_id", "ILIKE", `${users_id}`)

    },
    insertNewPost(knex, newPost) {
        return knex
            .insert(newPost)
            .into("timeline")
            .returning("*")
            .then((rows) => {
                return rows[0];
            })
    }
}



module.exports = TimelineService;