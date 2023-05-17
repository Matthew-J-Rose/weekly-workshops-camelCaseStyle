const data = {
    "id": "d123456",
    "name": "alpfa"
}

fetch('https://comp2110-quiz.fly.dev/quiz', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
}).then(response => response.json())
.then(data => {
    console.log(data)
}).catch(error => console.log(error))