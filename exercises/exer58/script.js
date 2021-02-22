// WRITE YOUR CODE IN HERE:
const div = document.querySelector('#container');
const colorArr = ['turquoise', 'peach', 'spearmint', 'rosewater', 'yellow'];

for (let i = 1, j = 1; i <= 100;) {
    for (let color of colorArr) {
        div.appendChild(createButton(i, color));
        i++;
    }
}


function createButton (text, color) {
  let newButton = document.createElement('button');
  newButton.innerText = `Button #${text}`;
  newButton.classList.add(color);
  return newButton;
}