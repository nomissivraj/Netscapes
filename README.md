# Netscapes
Netscapes project repository (Georgia, Matt, Chris, Simon)

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
