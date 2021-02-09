const uuid = require('uuid');

const addresses = [
    {
        address_id: uuid.v4(),
        address_name: "Steve Maestro",
        address_city: "Boston",
        address_state: "Massachusetts",
        address_street: "110 Periwinkle Lane",
        address_zip: "64232",
        address_category: "Family"
    },
    {
        address_id: uuid.v4(),
        address_name: "Joe Coolio",
        address_city: "Chicago",
        address_state: "Illinois",
        address_street: "242 Quinnipiac Lane",
        address_zip: "20024",
        address_category: "Friend"
    },
    {
        address_id: uuid.v4(),
        address_name: "Bill Topper",
        address_city: "Houston",
        address_state: "Texas",
        address_street: "8 Longway Drive",
        address_zip: "38242",
        address_category: "Work"
    },
    {
        address_id: uuid.v4(),
        address_name: "Chris Franklin",
        address_city: "Lake Sunapee",
        address_state: "New Hampshire",
        address_street: "4 Hillcrest Avenue",
        address_zip: "11583",
        address_category: 'Other'
    },
    {
        address_id: uuid.v4(),
        address_name: "Dave Robinson",
        address_city: "San Diego",
        address_state: "California",
        address_street: "42 Buena Vista Avenue",
        address_zip: "82425",
        address_category: 'Family'
    },
    {
        address_id: uuid.v4(),
        address_name: "Mark Madsen",
        address_city: "Portland",
        address_state: "Oregon",
        address_street: "25 Trail Blazer Road",
        address_zip: "93824",
        address_category: 'Friend'
    },
    {
        address_id: uuid.v4(),
        address_name: "Kelly Clarkson",
        address_city: "New Orleans",
        address_state: "Louisiana",
        address_street: "222 Saints Drive",
        address_zip: "38303",
        address_category: 'Work'
    },
    {
        address_id: uuid.v4(),
        address_name: "LeBron James",
        address_city: "Los Angeles",
        address_state: "California",
        address_street: "6 Staples Center Avenue",
        address_zip: "82841",
        address_category: 'Other'
    },
    {
        address_id: uuid.v4(),
        address_name: "Peyton Manning",
        address_city: "Denver",
        address_state: "Colorado",
        address_street: "93 Bronco Way",
        address_zip: "00745",
        address_category: 'Family'
    },
    {
        address_id: uuid.v4(),
        address_name: "Ja Morant",
        address_city: "Memphis",
        address_state: "Tennessee",
        address_street: "15 Grizzly Boulevard",
        address_zip: "64232",
        address_category: 'Friend'
    },
    {
        address_id: uuid.v4(),
        address_name: "Ricky Rohan",
        address_city: "Wilton",
        address_state: "Connecticut",
        address_street: "5A Powder Horn Hill Road",
        address_zip: "08243",
        address_category: 'Work'
    },
    {
        address_id: uuid.v4(),
        address_name: "Doug Funny",
        address_city: "Seattle",
        address_state: "Washington",
        address_street: "89 Mint Avnue",
        address_zip: "39391",
        address_category: 'Other'
    },
    {
        address_id: uuid.v4(),
        address_name: "Brent Benoit",
        address_city: "Neptune",
        address_state: "New Jersey",
        address_street: "75 Nets Drive",
        address_zip: "55892",
        address_category: 'Family'
    },
    {
        address_id: uuid.v4(),
        address_name: "Bill Tread",
        address_city: "Raleigh",
        address_state: "North Caroline",
        address_street: "392 Alabaster Avenue",
        address_zip: "33862",
        address_category: 'Friend'
    },
    {
        address_id: uuid.v4(),
        address_name: "Kate Connolly",
        address_city: "Pittsburgh",
        address_state: "Pennsylvania",
        address_street: "14 South Street",
        address_zip: "11009",
        address_category: 'Work'
    },
    {
        address_id: uuid.v4(),
        address_name: "Maya Disney",
        address_city: "Phoenix",
        address_state: "Arizona",
        address_street: "3 Suns Avenue",
        address_zip: "66294",
        address_category: 'Other'
    },
    {
        address_id: uuid.v4(),
        address_name: "Jennifer Stool",
        address_city: "NYC",
        address_state: "New York",
        address_street: "110 East 2nd Street",
        address_zip: "88382",
        address_category: 'Family'
    },
    {
        address_id: uuid.v4(),
        address_name: "Crystal Mill",
        address_city: "Louisville",
        address_state: "Kentucky",
        address_street: "338 Maple Drive",
        address_zip: "38290",
        address_category: 'Friend'
    },
    {
        address_id: uuid.v4(),
        address_name: "Britney Spears",
        address_city: "Las Vegas",
        address_state: "Nevada",
        address_street: "829 Plymouth Road",
        address_zip: "99293",
        address_category: 'Work'
    },
    {
        address_id: uuid.v4(),
        address_name: "Carmen Tomkins",
        address_city: "Naragansett",
        address_state: "Rhode Island",
        address_street: "444 Islander Way",
        address_zip: "29392",
        address_category: 'Other'
    },
]