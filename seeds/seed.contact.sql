BEGIN;

INSERT INTO contacts

    (fullname, users_id, phone_number, picture)
    VALUES 
    ('Jayson Tatum', 3, '2223334444', 'https://imgur.com/5VWJkFv.jpg'),
    ('Serena Williams', 3, '1112223333', 'https://imgur.com/7h4bYw0.jpg'),
    ('Dwyane Wade', 3, '7778889999', 'https://imgur.com/raYFNYM.jpg'),
    ('Danica Patrick', 3, '8882223333', 'https://imgur.com/q7IXHi2.jpg'),
    ('Luca Doncic', 3, '8884443333', 'https://imgur.com/USMh7Ln.jpg'),
    ('Ronda Rousey', 3, '8882223333', 'https://imgur.com/flwTB9N.jpg'),
    ('LeBron James', 3, '5558880000', 'https://imgur.com/JOxoCEx.jpg'),
    ('Brittney Griner', 3, '8882223333', 'https://imgur.com/pGFDbhE.jpg'),
    ('Larry Bird', 3, '7774445555', 'https://imgur.com/KCMbuc3.jpg'),
    ('Zion Williamson', 3, '2221117777', 'https://imgur.com/S99PoER.jpg'),
    ('Megan Rapinoe', 3, '5553336666', 'https://imgur.com/Q2RVvcu.jpg')
    ;

COMMIT;