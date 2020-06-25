const pinkButton = document.getElementById('pink');

pinkButton.addEventListener('click', () => {
    // post-click logic goes here!
    const div = document.getElementById('hell')
    div.style.backgroundColor = "pink";
})

const greenButton = document.getElementById('green');

greenButton.addEventListener('click', () => {
    // post-click logic goes here!
    const div = document.getElementById('hell')
    div.style.backgroundColor = "lightgreen";
})

const blueButton = document.getElementById('blue');

blueButton.addEventListener('click', () => {
    // post-click logic goes here!
    const div = document.getElementById('hell')
    div.style.backgroundColor = "lightblue";
})


const nameButton = document.getElementById('changeName');
nameButton.addEventListener('click', () => {
    console.log('doot');
    const userInput = document.getElementById('text1').value;
    const userName = document.getElementById('name1');
    userName.textContent = userInput;
});