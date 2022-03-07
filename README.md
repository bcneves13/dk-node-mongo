# dk-node-mongo
# START SERVER
```
    docker-compose up -d
```

## SAVE USER
```
curl --location --request POST 'http://localhost:5555/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Bruno",
    "email": "bcneves13@gmail.com",
    "registryNumber": "759.157.070-68"
}'
```

## UPDATE

```
curl --location --request PUT 'http://localhost:5555/user/** <USER_ID> **' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Jow Jow",
    "email": "johnny@gmail.com",
    "registryNumber": "975.434.380-20"
}'
```

## DELETE

```
curl --location --request DELETE 'http://localhost:5555/user/** <USER_ID> **'
```