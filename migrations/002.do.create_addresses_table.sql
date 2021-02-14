CREATE TABLE IF NOT EXISTS addresses (
    contact_id TEXT PRIMARY KEY NOT NULL,
    contact_name TEXT NOT NULL,
    address_city TEXT NOT NULL,
    address_state TEXT NOT NULL,
    address_street TEXT NOT NULL,
    address_zip TEXT NOT NULL,
    address_map TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    users_id TEXT REFERENCES users(users_id) ON DELETE CASCADE NOT NULL
);