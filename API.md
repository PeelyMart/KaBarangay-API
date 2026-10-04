# For developer's reference: 


## Authentication

### Register
``` 
POST /api/auth/register: 
``` 
    This is the gateway to send a request to create a new `Citizen` account 
  **Request Body** 
``` 
    { 
      "firstName": "string", 
      "lastName": "string", 
      "password": "string",
    }
```
 

  **Response Body**

| Code | Meessage |
| -------------- | --------------- |
| 200 OK | Successful creation   |
|  400 Bad Requst | Error in one of the fields |
| 409 Conflict | data in the databse already exists with the same infromation (email) |
| 500 | Internal Server error (unidentified catch all error) |


### Login
``` 
POST /api/auth/login
```  
  This is the endpoint to authenticate a login

  **Request Body** 
```
{ 
  "email": "string",
  "password": "string",
}
```

 **SuccessResponse (200 OK)**
```
{ 
  "message": "login success",
  "token": "<string> (will need this for every action  (must be during session)",
  "user": {
      "id": "idStored"
      "firstName: "<String>", 
      "lastName": "<String>",
  }, 
}
```

| Code | Message | 
|------| ------- | 
| 200  | OK |
| 400  | Missing Input |
| 401  | Invalid credentials |
| 500  | catch all erorr |

