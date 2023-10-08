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
            newMenu.style.display = newMenu.style.display = 'grid'? 'none': 'grid';
        }
        else if(items === 'forMenu'){
            navBtn[1].classList.add('special-button');
            newHome.style.display = newHome.style.display = 'grid'? 'none': 'grid';
            newMenu.style.display = newMenu.style.display = 'none'? 'grid': 'none';
            
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

        if(items === 'One'){
            MDiv[0].style.display = MDiv[0].style.display === 'grid' ? 'flex' : 'grid'; 
            for(let i = 1; i <= 2; i++){
                MDiv[i].style.display = MDiv[i].style.display ==='none' ? 'flex' : 'none'; 
            } 
            MPara[0].style.display = MPara[0].style.display === 'inline' ? 'none' : 'inline';
            MPara[1].style.display = 'none';
            MPara[2].style.display = 'none';
        }
    }

    return {navBG, MenuClick}
}




























// export function allPages(){
//     function HomePage(){
//         const homeDiv = document.createElement('div');
//         homeDiv.classList.add('homeDiv');
//         homeDiv.innerHTML = `
//             <div class="homeImgDiv"></div>
//             <div class="homeParaDiv">
//                 <p class="homePara">The All Blue is a legendary ocean that is yet to appear in the series. There are fish present here from each of the four seas, and to have such a huge resource at one's disposal is the ultimate dream of every chef. There have been several hints in the series that All Blue truly exists.</p>
//             </div>
//         `;
//         return homeDiv;
//     } 

//     function menuPage(){
//         const menuDiv = document.createElement('div');
//         menuDiv.classList.add('menuDiv');
        
//         //For Seafood Images Container
//         const seafoodDiv = document.createElement('div');
//         seafoodDiv.classList.add('seaDiv');
//         seafoodDiv.innerHTML = `
//             <h2 class="seah2">Seafood Rice</h2>
//             <div class="seaImgDiv">
//                 <img src="${seaFood}" alt="Seafood" class="imgSize seaImg">
//             </div>
//         `;

//         const sobaDiv = document.createElement('div');
//         sobaDiv.classList.add('soDiv');
//         sobaDiv.innerHTML = `
//             <h2 class="seah2">Sanji Soba</h2>
//             <div class="sobaImgDiv">
//                 <img src="${soba}" alt="SanjiSoba" class="imgSize sobaImg">
//             </div>
//         `;

//         const specialDiv = document.createElement('div');
//         specialDiv.classList.add('specialDiv');
//         specialDiv.innerHTML = `
//             <h2 class="seah2">Strawhat Meal</h2>
//             <div class="specialImgDiv">
//                 <img src="${special}" alt="Strawhat-Meal" class="imgSize special">
//                 <p class="specialP">The All Blue is a legendary ocean that is yet to appear in the series. There are fish present here from each of the four seas, and to have such a huge resource at one's disposal is the ultimate dream of every chef. There have been several hints in the series that All Blue truly exists. </p>
//             </div>  
//         `;       
//         menuDiv.append(seafoodDiv, sobaDiv, specialDiv);
//         return menuDiv;
//     }
//     return {HomePage, menuPage}

// }

// // Specific Menu is Click
// export const menuClick = (event, menu) => {
//     const allDiv = Array.from(menu.querySelectorAll('div'));
//     const allDivArr = [allDiv[0], allDiv[2], allDiv[4]];
//     if(event.target.alt === 'Seafood'){
//         verify(allDivArr, allDivArr[0]);
//     }
//     else if(event.target.alt === 'SanjiSoba'){
//         verify(allDivArr, allDivArr[1]);
//     }
//     else if(event.target.alt === 'Strawhat-Meal'){
//         verify(allDivArr, allDivArr[2]);
//     }
// }

// function verify(DivArr, spec){
//     const p = document.querySelector('.specialP');
//     DivArr.forEach((key) => {
//         key.style.display = key.style.display === 'none' ? 'grid' : 'none';
//         key.style.width = key.style.width === '33.3%' ? '100%' : '33.3%';
//         key.style.gridTemplate = key.style.gridTemplate === '1fr 7fr / 1fr' ? '1fr 7fr / 1fr 1fr' : '1fr 7fr / 1fr';
//    });
//     spec.style.display = spec.style.display === 'none' ? 'grid' : 'none';
//     spec.style.width = spec.style.width === '33.3%' ? '100%' : '33.3%';
//     p.style.display = p.style.display === 'none' ? 'inline-flex' : 'none';
// }
// export const navgetClicked = (navbtn, home, menu, contact) => {
//     const btnArr = [home, menu, contact];
//     const btnitems = ['forHome', 'forMenu', 'forContact'];
//     navbtn.addEventListener('click', function(event) {
//         if(event.target.id === 'HOME'){
//             btnArr.forEach(key => key.classList.remove('getClick'));
//             home.classList.add('getClick');
//             setDisplay(btnitems[0]);
//        }
//         else if(event.target.id === 'MENU'){
//             btnArr.forEach(key => key.classList.remove('getClick'));
//             menu.classList.add('getClick');
//             setDisplay(btnitems[1]);
//         }
//         else if(event.target.id === 'CONTACT'){
//             btnArr.forEach(key => key.classList.remove('getClick'));
//             contact.classList.add('getClick');
//             setDisplay(btnitems[2]);
//         }
//     });
// }

// const setDisplay = (x) =>{
//     const newHome = document.querySelector('.homeDiv');
//     const newMenu = document.querySelector('.menuDiv');

//     if(x === 'forHome'){
//         newHome.style.display = newHome.style.display = 'none'? 'flex': 'none';
//         newMenu.style.display = newMenu.style.display = 'flex'? 'none': 'flex';
//     }
//     else if(x === 'forMenu'){
//         newHome.style.display = newHome.style.display = 'flex'? 'none': 'flex';
//         newMenu.style.display = newMenu.style.display = 'none'? 'flex': 'none';
//     }
// }





