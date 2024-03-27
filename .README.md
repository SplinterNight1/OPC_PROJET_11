##Install

```bash
# Install dependencies on both services
yarn install

# Start local dev server
yarn dev:server

# Populate database with two users
yarn populate-db
```

## Configure .env on backend

DATABASE_URL="mongodb://localhost/argentBankDB"

## Starting services

#fontend:
yarn start

#backend
yarn dev:server

#MONGODB
Go to docker app: searc for docker community , launch and forward port 27017 otherwise not acceccible

#DBEAVER alternative pour mongodb
MongoCompass string connexion: mongodb://localhost:27017

## Updating Database

```bash
# Populate database with two users
yarn populate-db
```

## Some credentials

```bash
 Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

 Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`
```
