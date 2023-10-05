import './style.css';
import seaFood from '../src/img/baratie-seafood-rice.png';
import soba from '../src/img/sanji-soba.png';
import special from '../src/img/strawHat-special-Meal.png';

export function allPages(){
    function HomePage(){
        const homeDiv = document.createElement('div');
        homeDiv.classList.add('homeDiv');
        homeDiv.innerHTML = `
            <div class="homeImgDiv"></div>
            <div class="homeParaDiv">
                <p class="homePara">The All Blue is a legendary ocean that is yet to appear in the series. There are fish present here from each of the four seas, and to have such a huge resource at one's disposal is the ultimate dream of every chef. There have been several hints in the series that All Blue truly exists.</p>
            </div>
        `;
        return homeDiv;
    } 

    function menuPage(){
        const menuDiv = document.createElement('div');
        menuDiv.classList.add('menuDiv');
        
        //For Seafood Images Container
        const seafoodDiv = document.createElement('div');
        seafoodDiv.classList.add('seafoodDiv');
        seafoodDiv.innerHTML = `
            <h2 class="seah2">Seafood Rice</h2>
            <div class="seaImgDiv">
                <img src="${seaFood}" alt="Seafood" class="imgSize">
            </div>
        `;

        const sobaDiv = document.createElement('div');
        sobaDiv.classList.add('sobaDiv');
        const sobaImgDiv = document.createElement('div');
        sobaDiv.innerHTML = `
            <h2 class="seah2">Sanji Soba</h2>
            <div class="seaImgDiv">
                <img src="${soba}" alt="SanjiSoba" class="imgSize">
            </div>
        `;

        const specialDiv = document.createElement('div');
        specialDiv.classList.add('specialDiv');
        const specialImgDiv = document.createElement('div');
        specialDiv.innerHTML = `
            <h2 class="seah2">Strawhat Meal</h2>
            <div class="seaImgDiv">
                <img src="${special}" alt="Strawhat-Meal" class="imgSize">
            </div>
        `;        
        menuDiv.append(seafoodDiv, sobaDiv, specialDiv);
       
        return menuDiv;
    }

    return {HomePage, menuPage}

}


// export function 

