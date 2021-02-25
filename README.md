# Address Hero - Client

## Store contacts & addresses. Keep track of cards you have sent in the mail.

---

[View the Address Hero app here](https://addresshero-client.vercel.app)

[View the Address Hero client repo here](https://github.com/sean21johnson/AddressHero-Client)

**Address Hero** was created to help people store contacts and addresses. Furthermore, it was designed to keep track of cards you have sent in the mail by logging the event each time a card is sent. Users log in and add contacts to their Address Book. Within each contact's profile, there is an option to add addresses. Once addresses are added, users have an option to log the event of sending a card in the mail. After an event is logged, it will be added to a user's timeline. Users can utilize their timeline to keep track of all cards they have sent historically. Keeping track of addresses and remembering which cards you've sent to whom just got a whole lot easier!

---

### Tech stack

This server-side application was created with:

<img align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
<img align="left" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img align="left" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
<img align="left" alt="ExpressJS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
<img align="left" alt="Heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" />
<img align="left" alt="Git" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />

<br/>

---

### API Documentation

**App🔻**  

➖**Middleware Used🔻**  
➖➖*JWT Auth Router*   

➖**Routes🔻**  
➖➖*BASE URL: /api*  

➖➖/users   
(POST)    

➖➖/login    
(POST)   

➖➖/contacts   
(GET, POST)  

➖➖/contacts/:id    
(GET, DELETE, PATCH)   

➖➖/contacts/:id/addresses      
(GET, POST, DELETE)  

➖➖/contacts/:id/cardType        
(POST)  

➖➖/timeline        
(GET)  

---

### Available Scripts

In the project directory, you can run:

`npm start`

The page will reload if you make any edits

`npm test`

Launches the test runner in the interactive watch mode

`npm run dev`

Runs the application through a development server

`npm run migrate`

Migrate tables in local database

`npm run deploy`

Push latest commit to Heroku main branch of created app