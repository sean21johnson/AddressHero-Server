CREATE TABLE IF NOT EXISTS timeline (
    timeline_id TEXT PRIMARY KEY NOT NULL,
    timeline_type TEXT NOT NULL,
    contact_id TEXT REFERENCES addresses(contact_id) ON DELETE CASCADE NOT NULL,
    users_id TEXT REFERENCES users(users_id) ON DELETE CASCADE NOT NULL,
    date_created TEXT NOT NULL
);