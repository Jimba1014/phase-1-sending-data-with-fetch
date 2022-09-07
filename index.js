// Add your code here
function submitData(labData){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(labData = {
            name: 'Steve',
            email: 'steve@steve.com'
        })
    })
    .then(res =>res.json())
    .then(object => document.querySelector('body').append(object.id))
    .catch(error => document.querySelector('body').appened(error.message))
}