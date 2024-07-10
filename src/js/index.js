import '../css/style.css';
import {menuPageLoad, contactPageLoad} from './inner-pages';
import sss from './home-page';
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
const content = document.getElementById('content');
const buttons = document.querySelectorAll('.btns');
buttons.forEach(button => button.addEventListener('click', changePage))

function changePage(event) {
    const buttonId = event.target.id;
    // content.innerHTML ='';
    content.textContent = '';
    console.log(buttonId);
    switch (buttonId) {
        case 'homePageLoad':
            sss()
            break;
        case 'menuPageLoad':
            menuPageLoad();
            break;
        case 'contactPageLoad':
            contactPageLoad();
            break;
        default:
            console.log('Unknown button clicked');
    }
}
