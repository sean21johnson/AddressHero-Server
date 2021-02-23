CREATE TABLE IF NOT EXISTS timeline (
    timeline_id SERIAL PRIMARY KEY,
    event_type TEXT NOT NULL,
    address_id INT REFERENCES addresses(id) ON DELETE CASCADE,
    users_id INT REFERENCES users(id) ON DELETE CASCADE,
    date_created TIMESTAMP NOT NULL
);