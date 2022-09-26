https://dev.to/koladev/django-rest-authentication-cmh#:~:text=Front%2Dend%20with%20React


Endpoint description

# api/auth/register

content-type: JSON

Example request body:

Request body:

{
    "email": <email:str>,
    "password": <password:str>,
    "username": <username:str>
}

{
    "email": "testuser@yopmail.com",
    "password": "12345678",
    "username": "testuser"
}

Response body: 

{
    "user": {
        "id": <id:int>,
        "username": <username:str>,
        "is_active": <is_active:bool>
    }
    "refresh": <refresh_token:str>,
    "access": <access_token:str>,
}

Example response body:

{
    "user": {
        "id": 0,
        "username": "testuser",
        "is_active": true
    },
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NDI3MDMzNSwiaWF0IjoxNjY0MTgzOTM1LCJqdGkiOiI1MWY2MmRkMzBiNzU0MTJkOTcwNmM4M2IyYTBkMzRkNSIsInVzZXJfaWQiOjJ9.rzmYt9fDr-WjdabalxbmFevF92M2L2_-uXRXUwZrzpA",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MTg0MjM1LCJpYXQiOjE2NjQxODM5MzUsImp0aSI6IjdhNDQ0NzVkNzU5MDQ2MjRiYjhmOWI5Mjc2YjJiN2M4IiwidXNlcl9pZCI6Mn0.PvMLYxMmf_1_tlS7TvqR7rrebtQf7XoyVMQVd6w8uMs"
}

# api/auth/login

content-type: JSON

Request body:

{
    "email": <email:str>,
    "password": <password:str>
}

Example request body:

{
    "email": "testuser@yopmail.com",
    "password": "12345678"
}

Response body: 

{
    "refresh": <refresh_token:str>,
    "access": <access_token:str>,
    "user": {
        "id": <id:int>,
        "username": <username:str>,
        "email": <email:str>,
        "is_active": <is_active:bool>
    }
}

Example response body:

{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NDI3MDM4OCwiaWF0IjoxNjY0MTgzOTg4LCJqdGkiOiI4ZjQ0YmNiYzE1YWQ0MzFkODQ2YTUzNGQyMjQ0MzYxYiIsInVzZXJfaWQiOjJ9.CZnlTNoAYN5K8CyLfs5_NK76SCDMHy4GUPxv0QwAbWQ",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MTg0Mjg4LCJpYXQiOjE2NjQxODM5ODgsImp0aSI6IjRiNTIxNjc5YTU3OTRhNTBiMDQ3YzBhNWE4ZGEwN2RjIiwidXNlcl9pZCI6Mn0.TP3TwfSh44NFY7TwE448NEOCYJeWv3eMwt3Jo3SvRno",
    "user": {
        "id": 0,
        "username": "testuser",
        "email": "testuser@yopmail.com",
        "is_active": true
    }
}

# api/auth/refresh

content-type: JSON

Request body:

{
    "refresh": <refresh_token:str>
}

Example request body:

{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2NDI3MDM4OCwiaWF0IjoxNjY0MTgzOTg4LCJqdGkiOiI4ZjQ0YmNiYzE1YWQ0MzFkODQ2YTUzNGQyMjQ0MzYxYiIsInVzZXJfaWQiOjJ9.CZnlTNoAYN5K8CyLfs5_NK76SCDMHy4GUPxv0QwAbWQ"
}

Response body:

{
    "access": <access_token:str>
}

Example response body:

{
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MTg0NDA3LCJpYXQiOjE2NjQxODM5ODgsImp0aSI6IjBkYjEwNjM1YjRiYzQ2ODhhMTc4OWQ0ZDZhZDU5NGJkIiwidXNlcl9pZCI6Mn0.tbE7EJu2BjQ_Gvwn0LqfMkpSNCHIAvRYsEF5F1_mLh0"
}