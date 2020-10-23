const button = document.querySelector("button");
const body = document.querySelector("body");
button.addEventListener('click', responseToClick)

function responseToClick() {
    const pTag = document.createElement('h3');
    pTag.textContent = "Foo";
    body.appendChild(pTag);
}

               
