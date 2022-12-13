async function loginRequest(email, password, onSuccess, onFailure)
{
    const response = await fetch("/api/login", 
    {
        method: "POST",  
        mode: 'cors',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
    .then((data) => data.json())
    .then((data) => console.log(data));
}

async function registerRequest(name, email, password, onSuccess, onFailure)
{
    const response = await fetch("/api/register", 
    {
        method: "POST",  
        mode: 'cors',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
    .then((data) => data.json())
    .then((data) => console.log(data));
}

export {loginRequest, registerRequest}