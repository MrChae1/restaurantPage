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
            MDiv[0].style.display = MDiv[0].style.display === 'none' ? 'flex' : 'none';
            MDiv[0].style.width = MDiv[0].style.width === '33.3%' ? '100%' : '33.3%';
            MPara[0].style.display = MPara[0].style.display === 'inline-block' ? 'none' : 'inline-block';
            setTimeout(() => {
                applyOpacityTransition(MPara[0], MDiv[0]);
            }, 1000);
            MPara[1].style.display = 'none';
            MPara[2].style.display = 'none';
        }
        else if(items === 'Two'){
            MDiv[1].style.display = MDiv[1].style.display === 'none' ? 'flex' : 'none';
            MDiv[1].style.width = MDiv[1].style.width === '33.3%' ? '100%' : '33.3%';
            MPara[1].style.display = MPara[1].style.display === 'inline-block' ? 'none' : 'inline-block';
            setTimeout(() => {
                applyOpacityTransition(MPara[1], MDiv[1]);
            }, 1000);
            MPara[0].style.display = 'none';
            MPara[2].style.display = 'none';
        }
        else if(items === 'Three'){
            MDiv[2].style.display = MDiv[2].style.display === 'none' ? 'flex' : 'none';
            MDiv[2].style.width = MDiv[2].style.width === '33.3%' ? '100%' : '33.3%';
            MPara[2].style.display = MPara[2].style.display === 'inline-block' ? 'none' : 'inline-block';
            setTimeout(() => {
                applyOpacityTransition(MPara[2], MDiv[2]);
            }, 1000);
            MPara[0].style.display = 'none';
            MPara[1].style.display = 'none';
        }

    }
    const applyOpacityTransition = (x,y) => {
        // Apply a CSS transition for opacity
        x.style.transition = 'opacity 0.5s';
        y.style.transition = 'opacity 0.5s';
    
        // Toggle the opacity value
        if (x.style.opacity === '1') {
            x.style.opacity = '0';
            y.style.opacity = '1';
        } else {
            x.style.opacity = '1';
            y.style.opacity = '1';
        }
    
        // After a short delay, remove the transition to avoid affecting subsequent changes
        setTimeout(() => {
            x.style.transition = '';
            y.style.transition = '';
        }, 500); // Adjust the delay as needed
    }
    
    return {navBG, MenuClick}
}




























