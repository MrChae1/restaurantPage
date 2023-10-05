import './style.css';
import { allPages } from './section';


export function allFunc(){
    

    function headerTag(){
        const headerElement = document.createElement('header');
        const honeElement = document.createElement('h1');
        const svgElement = document.createElement('svg');
        svgElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill='#2980b9' viewBox="0 0 24 24"><title>fish</title><path d="M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z" /></svg>`
        honeElement.innerHTML = `<i>ALL BLUE</i>`;
        headerElement.append(svgElement, honeElement);
        return headerElement;
    }
    
    function navBar(){
        const mainNav = document.createElement('nav');
        const homeBtn = document.createElement('button');
        homeBtn.setAttribute('id', 'HOME');
        homeBtn.classList.add('getClick');
        const menuBtn = document.createElement('button');
        menuBtn.setAttribute('id', 'MENU')
        const contactBtn = document.createElement('button');
        contactBtn.setAttribute('id', 'CONTACT')
        homeBtn.textContent = 'HOME';
        menuBtn.textContent = 'MENU';
        contactBtn.textContent = 'CONTACT';
        mainNav.append(homeBtn, menuBtn, contactBtn);
        navgetClicked(mainNav, homeBtn, menuBtn, contactBtn);
        return mainNav;
    }

    function ConAllDiv(){
        const allDivContainer = document.createElement('div');
        allDivContainer.classList.add('forAllDiv');
        const homePage = allPages().HomePage();
        const menuPage = allPages().menuPage();
        allDivContainer.append(homePage, menuPage);

        return {allDivContainer, homePage };
    }
    
    function sectionTag(){
        const conAll = ConAllDiv();
        const mainSection = document.createElement('section');
        mainSection.appendChild(conAll.allDivContainer);
        return mainSection;
    }
    
    const footerTag = () => {
        const mainFooter = document.createElement('footer');
        const footerPara = document.createElement('p');
        footerPara.innerHTML = `Copyright &copy; AllBlue 2023`;
        mainFooter.appendChild(footerPara);
        return mainFooter;
    } 

    return {headerTag, navBar, sectionTag, footerTag, ConAllDiv}
}
const navgetClicked = (navbtn, home, menu, contact) => {
    const getFunct = allFunc();
    const btnArr = [home, menu, contact];
    const btnitems = ['forHome', 'forMenu', 'forContact'];
    navbtn.addEventListener('click', function(event) {
        if(event.target.id === 'HOME'){
            btnArr.forEach(key => key.classList.remove('getClick'));
            home.classList.add('getClick');
            setDisplay(btnitems[0]);
       }
        else if(event.target.id === 'MENU'){
            btnArr.forEach(key => key.classList.remove('getClick'));
            menu.classList.add('getClick');
            setDisplay(btnitems[1]);
        }
        else if(event.target.id === 'CONTACT'){
            btnArr.forEach(key => key.classList.remove('getClick'));
            contact.classList.add('getClick');
            setDisplay(btnitems[2]);
        }
    });
}

const setDisplay = (x) =>{
    const newHome = document.querySelector('.homeDiv');
    const newMenu = document.querySelector('.menuDiv');

    if(x === 'forHome'){
        newHome.style.display = newHome.style.display = 'none'? 'flex': 'none';
        newMenu.style.display = newMenu.style.display = 'flex'? 'none': 'flex';
    }
    else if(x === 'forMenu'){
        newHome.style.display = newHome.style.display = 'flex'? 'none': 'flex';
        newMenu.style.display = newMenu.style.display = 'none'? 'flex': 'none';
    }
}


