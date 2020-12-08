import ronny from './assets/Ronny.jpg';
import './style.css'

const title = document.createElement('h3');
title.textContent = 'Learning the setup of WebPack';

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = ronny;
page.appendChild(img);

