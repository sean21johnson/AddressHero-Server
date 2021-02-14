BEGIN;

INSERT INTO timeline
    (timeline_id, timeline_type, contact_id, users_id, date_created)
    VALUES
    ('1', 'Birthday', '11', '1', '11/1/2020'),
    ('2', 'Anniversary', '3', '1', '11/2/2020'),
    ('3', 'Christmas', '20', '1', '11/3/2020'),
    ('4', 'Anniverary', '13', '1', '11/4/2020'),
    ('5', 'Condolences', '8', '1', '11/5/2020'),
    ('6', 'Birthday', '7', '1', '11/6/2020'),
    ('7', 'Christmas', '15', '1', '11/7/2020'),
    ('8', 'Christmas', '6', '1', '11/8/2020'),
    ('9', 'Condolences', '9', '1', '11/9/2020'),
    ('10', 'Christmas', '18', '1', '11/10/2020'),
    ('11', 'Condolences', '19', '1', '11/11/2020'),
    ('12', 'Anniversary', '14', '1', '11/12/2020'),
    ('13', 'Anniversary', '12', '1', '11/13/2020'),
    ('14', 'Birthday', '21', '1', '11/14/2020');

COMMIT;

