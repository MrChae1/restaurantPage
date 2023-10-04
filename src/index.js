import './style.css';

function component(){
    const mainContainer = document.createElement('main');
    mainContainer.classList.add('mainCon');
    const hOne = document.createElement('h1');
    hOne.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill='#2980b9' viewBox="0 0 24 24"><title>fish</title><path d="M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z" /></svg> <i>ALL BLUE</i>`;
    const navOne = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';
    const mainSection = document.createElement('section');
    navOne.append(homeBtn, menuBtn, contactBtn);
    mainContainer.append(hOne, navOne, mainSection);
    return mainContainer;
}

document.body.appendChild(component());

