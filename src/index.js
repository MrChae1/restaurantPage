import './style.css';
import { allFunc } from './print';

function component(){
    const appendFunc = allFunc();
    const mainElement = document.createElement('main');
    mainElement.classList.add('mainCon');
    mainElement.append(appendFunc.forHeader(), appendFunc.forNav(), appendFunc.forSection(), appendFunc.forFooter());
    return mainElement;
}

document.body.appendChild(component());

