import './style.css';
import { allFunc } from './print';

function component(){
    const appendFunc = allFunc();
    const mainElement = document.createElement('main');
    mainElement.classList.add('mainCon');
    mainElement.append(appendFunc.headerTag(), appendFunc.navBar(), appendFunc.sectionTag(), appendFunc.footerTag());
    return mainElement;
}

document.body.appendChild(component());

