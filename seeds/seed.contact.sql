BEGIN;

INSERT INTO contacts

    (fullname, users_id, phone_number, picture)
    VALUES 
    ('Jayson Tatum', 1, '2223334444', 'https://imgur.com/5VWJkFv.jpg'),
    ('Serena Williams', 1, '1112223333', 'https://imgur.com/7h4bYw0.jpg'),
    ('Dwyane Wade', 1, '7778889999', 'https://imgur.com/raYFNYM.jpg'),
    ('Megan Rapinoe', 1, '5553336666', 'https://imgur.com/Q2RVvcu.jpg'),
    ('Luca Doncic', 1, '8884443333', 'https://imgur.com/USMh7Ln.jpg'),
    ('LeBron James', 1, '5558880000', 'https://imgur.com/JOxoCEx.jpg'),
    ('Zion Williamson', 1, '2221117777', 'https://imgur.com/S99PoER.jpg'),
    ('Larry Bird', 2, '7774445555', 'https://imgur.com/KCMbuc3.jpg'),
    ('Brittney Griner', 1, '8882223333', 'https://imgur.com/pGFDbhE.jpg'),
    ('Danica Patrick', 1, '8882223333', 'https://imgur.com/q7IXHi2.jpg'),
    ('Ronda Rousey', 1, '8882223333', 'https://imgur.com/flwTB9N.jpg')
    ;

COMMIT;