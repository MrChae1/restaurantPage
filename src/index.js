import './style.css';
import Icon from './MainBg.jpg';

function component(){
    const container = document.createElement('h1');
    const mainCon = document.createElement('div');
    container.innerHTML = `Nice One`;
    mainCon.classList.add('mainCon')
    const myIcon = new Image();
    myIcon.src = Icon;

    mainCon.append(container, myIcon);
    return mainCon;
}

document.body.appendChild(component());

