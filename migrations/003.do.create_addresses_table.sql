CREATE TABLE IF NOT EXISTS addresses (
    id SERIAL PRIMARY KEY,
    contact_id INT REFERENCES contacts(id) NOT NULL,
    city TEXT NOT NULL,
    us_state TEXT NOT NULL,
    street TEXT NOT NULL,
    zip TEXT NOT NULL,
    map TEXT NOT NULL
);