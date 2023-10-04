import './style.css';
import { headerTag, navBar, sectionTag, footerTag } from './print';
// import myAllBlue from '../src/img/allBlue.jpg';

function component(){
    const mainElement = document.createElement('main');
    mainElement.classList.add('mainCon');
    mainElement.append(headerTag(), navBar(), sectionTag(), footerTag());
    
    function navClicked(){
        const navBtn = navBar();
        navBtn.addEventListener('click', function(event) {
            if(event.target.id === 'HOME'){
                console.log('here');
            }
            else if(event.target.id === 'MENU'){
                console.log('Hi');
            }
        });
    }

    navClicked();
    
    return mainElement;
}

document.body.appendChild(component());

