BEGIN;

INSERT INTO contacts

    (fullname, users_id, phone_number)
    VALUES 
    ('Jayson Tatum', (select id from users order by random() limit 1), '5555555555'),
    ('Kevin Durant', (select id from users order by random() limit 1), '5555555555'),
    ('Zack Levine', (select id from users order by random() limit 1), '5555555555'),
    ('Steph Curry', (select id from users order by random() limit 1), '5555555555'),
    ('Luca Doncic', (select id from users order by random() limit 1), '5555555555'),
    ('LeBron James', (select id from users order by random() limit 1), '5555555555'),
    ('Zion Williamson', (select id from users order by random() limit 1), '5555555555'),
    ('Blake Griffin', (select id from users order by random() limit 1), '5555555555'),
    ('Maya Moore', (select id from users order by random() limit 1), '5555555555');

COMMIT;