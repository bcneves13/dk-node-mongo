# dk-node-mongo

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