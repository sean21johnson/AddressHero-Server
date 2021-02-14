BEGIN;

INSERT INTO addresses
    (contact_id, phone_number, contact_name, address_city, address_state, address_street, address_zip, address_map, users_id)
    VALUES
    ('3', '5555555555', 'Jayson Tatum', 'Boston', 'MA', '110 Legends Way', '02114', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11791.55727632846!2d-71.062146!3d42.366198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32d335fe5ed797a8!2sTD%20Garden!5e0!3m2!1sen!2sus!4v1612981682945!5m2!1sen!2sus', '1'),
    ('4', '5555555555', 'Kevin Durant', 'Brooklyn', 'NY', '620 Atlantic Ave', '11217', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12102.424532936515!2d-73.9754156!3d40.6826465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sus!4v1612982753062!5m2!1sen!2sus','1'),
    ('5', '5555555555', 'Zack Levine', 'Chicago', 'IL', '1901 W Madison St', '60612', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11882.262582515013!2d-87.6741759!3d41.8806908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b93f0068cf00344!2sUnited%20Center!5e0!3m2!1sen!2sus!4v1612982899453!5m2!1sen!2sus', '1'),
    ('6', '5555555555', 'Steph Curry', 'San Francisco', 'CA', '1 Warriors Way', '94158', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.927147781234!2d-122.38976028468251!3d37.76830637976072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fc5cdd036ab%3A0x63b3295cf3256c76!2s1%20Warriors%20Way%2C%20San%20Francisco%2C%20CA%2094158!5e0!3m2!1sen!2sus!4v1612983001636!5m2!1sen!2sus', '1'),
    ('7', '5555555555', 'Luca Doncic', 'Dallas', 'TX', '2500 Victory Ave', '75219', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13416.281864673037!2d-96.8102547!3d32.7903908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21611d4f28860fa3!2sAmerican%20Airlines%20Center!5e0!3m2!1sen!2sus!4v1612983186817!5m2!1sen!2sus', '1'),
    ('8', '5555555555', 'Nikola Jokic', 'Denver', 'CO', '1000 Chopper Circle', '80204', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12270.396196338186!2d-105.0076028!3d39.7486565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7bec273737d47786!2sBall%20Arena!5e0!3m2!1sen!2sus!4v1612983252932!5m2!1sen!2sus', '1'),
    ('9', '5555555555', 'LeBron James', 'Los Angeles', 'CA', '1111 S Figueroa St', '90015', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13224.133105427805!2d-118.2672541!3d34.0430175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1ff47c3ceb7bb2d5!2sSTAPLES%20Center!5e0!3m2!1sen!2sus!4v1612983309186!5m2!1sen!2sus', '1'),
    ('10', '5555555555', 'Zion Williamson', 'New Orleans', 'LA', '1501 Dave Dixon Dr', '70013', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13828.228548041137!2d-90.0820568!3d29.9490351!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5572ede5e0a7ea6f!2sSmoothie%20King%20Center!5e0!3m2!1sen!2sus!4v1612983652171!5m2!1sen!2sus', '1'),
    ('11', '5555555555', 'Blake Griffin', 'Detroit', 'MI', '2645 Woodward Ave', '48201', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11796.266553292922!2d-83.0552673!3d42.3411026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb0fd860979f4678!2sLittle%20Caesars%20Arena!5e0!3m2!1sen!2sus!4v1612983803653!5m2!1sen!2sus', '1'),
    ('12', '5555555555', 'Maya Moore', 'Minneapolis', 'MN', '600 N 1st Ave', '55403', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11288.954519712895!2d-93.2760947!3d44.9794633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd85d3dd117998fec!2sTarget%20Center!5e0!3m2!1sen!2sus!4v1613068247314!5m2!1sen!2sus', '1'),
    ('13', '5555555555', 'Diana Taurasi', 'Phoenix', 'AZ', '201 East Jefferson Street', '85004', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13316.548011334839!2d-112.0712003!3d33.445737!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7a220f94e2bf245b!2sPhoenix%20Suns%20Arena!5e0!3m2!1sen!2sus!4v1613068411546!5m2!1sen!2sus', '1'),
    ('14', '5555555555', 'Breanna Stewart', 'Seattle', 'WA', '305 Harrison St', '98109', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.215686805112!2d-122.35393268436896!3d47.62193847918568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901545d43983b3%3A0x1d3c117c07b92a08!2s305%20Harrison%20St%2C%20Seattle%2C%20WA%2098109!5e0!3m2!1sen!2sus!4v1613068604081!5m2!1sen!2sus', '1'),
    ('15', '5555555555', 'Tamika Catchings', 'Indianapolis', 'IN', '125 South Pennsylvania Street', '46204', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.9161593127997!2d-86.15775478462383!3d39.76399077944637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50bd4e440bcf%3A0x2a102695363e46af!2s125%20S%20Pennsylvania%20St%2C%20Indianapolis%2C%20IN%2046204!5e0!3m2!1sen!2sus!4v1613068723072!5m2!1sen!2sus', '1'),
    ('16', '5555555555', 'Sheryl Swoopes', 'Houston', 'TX', '1510 Polk Street', '77002', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.9241986721167!2d-95.36424978489174!3d29.750906881990026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf22b21cd6ab%3A0x8ca3d1eea34580f7!2s1510%20Polk%20St%2C%20Houston%2C%20TX%2077002!5e0!3m2!1sen!2sus!4v1613068828112!5m2!1sen!2sus', '1'),
    ('17', '5555555555', 'Angel McCoughtry', 'Las Vegas', 'NV', '3590 South Las Vegas Boulevard', '89119', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.065046179124!2d-115.17772138472992!3d36.09190238010063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c5cf6c1c1151%3A0x5ac2aa71eee9ce48!2s3950%20S%20Las%20Vegas%20Blvd%2C%20Las%20Vegas%2C%20NV%2089119!5e0!3m2!1sen!2sus!4v1613068910153!5m2!1sen!2sus', '1'),
    ('18', '5555555555', 'Rebecca Lobo', 'New York', 'NY', '4 Pennsylvania Plaza', '10001', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.094885061573!2d-73.9934387!3d40.7505045!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33df10e49762f8e4!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1613068986122!5m2!1sen!2sus', '1'),
    ('19', '5555555555', 'Elizabeth Williams', 'Atlanta', 'GA', '1 State Farm Drive', '30303', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.1328365101435!2d-84.39852898479266!3d33.75723308068721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5037f899412f1%3A0x6b597be259ede4e!2s1%20State%20Farm%20Dr%2C%20Atlanta%2C%20GA%2030303!5e0!3m2!1sen!2sus!4v1613069058146!5m2!1sen!2sus', '1'),
    ('20', '5555555555', 'Becky Hammon', 'San Antonio', 'TX', '1 AT&T Center Parkway', '78219', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.0589858061503!2d-98.43963238489927!3d29.427072382111174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf681b4eda9d3%3A0xbe3795a9d95cce47!2s1%20AT%26T%20Center%20Parkway%2C%20San%20Antonio%2C%20TX%2078219!5e0!3m2!1sen!2sus!4v1613069255392!5m2!1sen!2sus', '1'),
    ('21', '5555555555', 'Ruth Riley', 'Miami', 'FL', '601 Biscayne Blvd', '33132', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14370.687265925053!2d-80.186969!3d25.7814014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x13ad0552284f5b6c!2sAmericanAirlines%20Arena!5e0!3m2!1sen!2sus!4v1613069331875!5m2!1sen!2sus', '1'),
    ('22', '5555555555', 'Dawn Staley', 'Charlotte', 'NC', '333 E Trade Street', '28202', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.2484222775834!2d-80.84152448475363!3d35.22518548030313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a0243e697af1%3A0x15d8e7b1dfc64dab!2s333%20E%20Trade%20St%20suite%20a%2C%20Charlotte%2C%20NC%2028202!5e0!3m2!1sen!2sus!4v1613069492673!5m2!1sen!2sus', '1');

    COMMIT;


