# Netscapes
Netscapes project repository (Georgia, Matt, Chris, Simon)

# Usage
1.  Download ‘EQ’ from the app store.
2.  Open the application and sign up using our simple sign up form.
3.  Sign into the application.
4.  Choose the section you would like to answer questions on. Alternatively, there is an option to ‘play all’.
5.  After completion of the questions (if you attempted an individual quiz), you can go back and complete another part in the quiz.
6.  Now that the answers have been stored, you will be prompted to go onto the accompanying website [www.project-eq.co.uk](www.project-eq.co.uk "www.project-eq.co.uk").
7.  Log into the website using your credentials.
8.  Work your way through the layers of the site, comparing your answers to the ‘reality’, as well as other peoples' answers that have used the app.
9.  Click on the visualisations tab to view other data visualisations.
10. Click on the about tab to view information on the developers of this project, as well as more information on what the project is about. 


## Database Connection

### config.json
In site/app/config/, create config.json with the following database connection values:

```javascript
{
    "development": {
        "username": "root",
        "password": "password",
        "database": "test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "",
        "password": null,
        "database": "",
        "host": "",
        "dialect": "mysql"
    },
    "production": {
        "username": "",
        "password": null,
        "database": "",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
```

### .env
In site/, create .env file with the following:

```
NODE_ENV='development'
```
