#Back-End Node.js/Express server
#### Will need to run `npm i` to install dependencies.



API endpoint for ALL managers is

- https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers

method: `GET`
return example:

```{
        "id": "1",
        "phone": "204-798-9969",
        "jurisdiction": "u",
        "identificationNumber": "d4900a18-a304-42c6-a8e5-a6c8c3f17bc0",
        "firstName": "Karson",
        "lastName": "Olson"
    },
```

Method: `POST`
Requires Headers: {
"Content-Type" : "Application/JSON"
}

`POST` Body Example

```
    {
        "phoneNumber": "204-798-9922",
        "firstName": "Karsonson",
        "lastName": "Olson",
        "email": "Karson@gmail.com",
        "Supervisor": "Karson"
    }
```

return example:

```
{
    "message": "Notification settings successfully submitted"
}
```
