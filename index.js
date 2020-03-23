// Homework

// Create application in order to show 10 random dogs after user clicked on the button.
// Use this API: https://dog.ceo/api/breeds/image/random via `fetch` function
// Dogs should appear below the button
// Dogs should be refreshed each time user clicked on `Show dogs` button
// Create simple UI with CSS
// Forbidden to use any of JS or CSS framework

document.querySelector('button').addEventListener('click',async function(event){
    event.preventDefault();
    for(let i = 0; i < 10; i++){
        let response = await fetch('https://dog.ceo/api/breeds/image/random');

        if (response.ok) {
            let json = await response.json();
            document.querySelectorAll('.dog-image')[i].innerHTML = `<img src = '${json.message}' width = 200px height = 200px>`
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }


})