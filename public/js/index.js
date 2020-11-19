import { login } from './login';
import { displayMap } from './mapbox'
import '@babel/polyfill';

//DOM elements
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form');

//DELEGATION
if (mapBox) {
  const locations = JSON.parse(document.getElementById('map').mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  document.querySelector('.form').addEventListener('submit', e => {
    //VALUES
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });
}
