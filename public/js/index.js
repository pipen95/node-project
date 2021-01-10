import '@babel/polyfill';
import { displayMap } from './mapbox'
import { login, logout } from './login';

//DOM elements
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form');
const logOutbtn = document.querySelector('.nav__el--logout');

//DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
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

if (logOutbtn) logOutbtn.addEventListener('click', logout)
