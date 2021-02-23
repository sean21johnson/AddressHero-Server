CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    fullname TEXT NOT NULL,
    users_id INT REFERENCES users(id) ON DELETE CASCADE,
    picture TEXT,
    phone_number TEXT NOT NULL
);