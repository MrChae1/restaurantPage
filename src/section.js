import { set } from 'lodash';
import './style.css';


export function DOMchanges(){
    const navBG = (mainNav) =>{
        const allBtn = Array.from(mainNav.querySelectorAll('button'));
        const btnitems = ['forHome', 'forMenu', 'forTeam'];
        mainNav.addEventListener('click', function(event){
            if(event.target.className === 'Home-btn'){
                navVerify(allBtn, btnitems[0]);
            }
            else if(event.target.className === 'Menu-btn'){
                navVerify(allBtn, btnitems[1]);
            }
            else if(event.target.className === 'Team-btn'){
                navVerify(allBtn, btnitems[2]);
            }
        });
    }
    const navVerify = (navBtn, items) =>{
        const newHome = document.querySelector('.Home-Section');
        const newMenu = document.querySelector('.Menu-Section');
        navBtn.forEach(key => key.classList.remove('special-button'));
        if(items === 'forHome'){
            navBtn[0].classList.add('special-button');
            newHome.style.display = newHome.style.display = 'none'? 'grid': 'none';
            newMenu.style.display = newMenu.style.display = 'flex'? 'none': 'flex';
        }
        else if(items === 'forMenu'){
            navBtn[1].classList.add('special-button');
            newHome.style.display = newHome.style.display = 'grid'? 'none': 'grid';
            newMenu.style.display = newMenu.style.display = 'none'? 'flex': 'none';
            
        }
        else if(items === 'forTeam'){
            navBtn[2].classList.add('special-button');
        }
    }

    const MenuClick = (menu) =>{
        const divItems = ['One', 'Two', 'Three'];
        menu.addEventListener('click', function(event){
            if(event.target.classList.contains('Menu-One')){
                MenuChanges(menu, divItems[0]);
            }
            else if(event.target.classList.contains('Menu-Two')){
                MenuChanges(menu, divItems[1]);
            }
            else if(event.target.classList.contains('Menu-Three')){
                MenuChanges(menu, divItems[2]);
            } 
        });

    }

    const MenuChanges = (menu, items) => {
        const MDiv = Array.from(menu.querySelectorAll('div'));
        const MPara = Array.from(menu.querySelectorAll('p'));
        MDiv.forEach((key) => {
            key.style.display = key.style.display === 'none' ? 'flex' : 'none';
            key.style.width = key.style.width === '33.3%' ? '100%' : '33.3%';
        });

        if(items === 'One'){
            timeSet(MDiv[0], MPara[0], MPara[1], MPara[2]);
        }
        else if(items === 'Two'){
            timeSet(MDiv[1], MPara[1], MPara[0], MPara[2]);
        }
        else if(items === 'Three'){
            timeSet(MDiv[2], MPara[2], MPara[0], MPara[1]);   
        }
    }
    
    const timeSet = (div, paraone, paratwo, parathree) => {       
        setTimeout(() => {
            div.style.display = div.style.display === 'none' ? 'flex' : 'none';
            div.style.transition = 'ease-in-out'
            div.style.width = div.style.width === '33.3%' ? '100%' : '33.3%';
            paraone.style.display = paraone.style.display === 'inline-block' ? 'none' : 'inline-block';
        }, 1000);
        paratwo.style.display = 'none';
        parathree.style.display = 'none';

    }
    return {navBG, MenuClick}
}




























