import '../css/style.css';
import {menuPageLoad, contactPageLoad} from './inner-pages';
import homePageLoad from './home-page';
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
const content = document.getElementById('content');
const buttons = document.querySelectorAll('.btns');
buttons.forEach(button => button.addEventListener('click', changePage));
content.textContent = '';
homePageLoad();
function changePage(event) {
    const buttonId = event.target.id;
    // content.innerHTML ='';
    content.textContent = '';
    switch (buttonId) {
        case 'homePageLoad':
            homePageLoad();
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
