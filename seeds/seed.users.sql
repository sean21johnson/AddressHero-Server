BEGIN;

INSERT INTO users

    (users_id, first_name, last_name, email, username, pass_word)
    VALUES 
    ('1', 'Test', 'Account', 'testaccount@gmail.com', 'testaccount', '$2a$12$qnHsTKJP6vtW..CLx2Tobu4TsWrobOUI7ZfZlGPpX2qUKm0ymihK6');

COMMIT;