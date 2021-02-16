CREATE TABLE IF NOT EXISTS timeline (
    id SERIAL PRIMARY KEY,
    event_type TEXT NOT NULL,
    address_id INT REFERENCES addresses(id) ON DELETE CASCADE NOT NULL,
    users_id INT REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    date_created TIMESTAMP NOT NULL
);