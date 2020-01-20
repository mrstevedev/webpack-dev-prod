import _ from 'lodash';
import css from './style.scss';
import image from './1.jpg';

if(process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode');
}

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML= _.join(['Hello', 'this is a component'], ' ');

    return element;
}
document.body.appendChild(component());


function componentImage() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = `<img src=${image} />`;

    return element;
}
document.body.appendChild(componentImage());