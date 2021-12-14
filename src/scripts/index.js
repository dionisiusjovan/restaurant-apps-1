import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import DataSource from './data/source.js';
import "../scripts/component/resto-list.js";

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

document.addEventListener("DOMContentLoaded", _ => {
    const restoListElement = document.querySelector("resto-list");
    const renderResult = results => { restoListElement.restos = results };
    const fallbackResult = errormsg => { restoListElement.renderError(errormsg) };
    DataSource.getData()
        .then(renderResult)
        .catch(fallbackResult);
})

menu.addEventListener("click", function (event) {
    drawer.classList.toggle("open");
    event.stopPropagation();
});

hero.addEventListener("click", _ => {
    drawer.classList.remove("open");
});

main.addEventListener("click", _ => {
    drawer.classList.remove("open");
});

// console.log('Hello Coders! :)');
