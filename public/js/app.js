// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

// fetch('http://localhost:4000/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             console.log(data.location);
//             console.log(data.forecast);
//         }
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const mesaageOne = document.querySelector('#message-1');
const mesaageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    mesaageOne.textContent = 'Loading...';
    mesaageTwo.textContent = '';

    fetch('http://localhost:4000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (!data) {
                mesaageOne.textContent = "nitin gadha hai";
            } else {
                mesaageOne.textContent = data.location;
                mesaageTwo.textContent = data.forecast;
            }
        });
    });
});