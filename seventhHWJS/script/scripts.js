let users = [];
const formElem = document.querySelector('#form');
const container = document.querySelector('#container');

formElem.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = Object.fromEntries(formData.entries());
    console.log(user);
    users.push(user);
    rerender();
});

function rerender() {
    container.innerHTML = '';
    users.forEach((user, index) => {
        const card = document.createElement('div');
        card.textContent = `${user.firstName} ${user.lastName}, ${user.age}`;
        card.addEventListener('dblclick', () => {
            users.splice(index, 1);
            rerender();
        });
        container.appendChild(card);
    });
}