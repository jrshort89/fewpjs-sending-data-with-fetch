// Add your code here
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const divElm = document.querySelector('div');

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: event.target.userName.value,
            email: event.target.email.value
        })
    }).then(response => {
        return response.json();
    }).then(data => {
        const elm = document.createElement('p')
        elm.innerText = data.id;
        divElm.append(elm);
    }).catch(err => {
        const errorElm = document.createElement('p');
        errorElm.innerText = err;
        divElm.append(errorElm);
        console.log(err);
    });
})