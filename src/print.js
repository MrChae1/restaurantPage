import './style.css';
import { DOMchanges} from './section';
import blueMap from '../src/img/allBlueMap.jpg';
import seaFood from '../src/img/baratie-seafood-rice.png';
import soba from '../src/img/sanji-soba.png';
import special from '../src/img/strawHat-special-Meal.png';

export function allFunc(){
    const changeDom = DOMchanges();
    const forHeader = () => {
        const headerTag = document.createElement('header');
        headerTag.classList.add('main-header');
        headerTag.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill='#2980b9' viewBox="0 0 24 24"><title>fish</title><path d="M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z" /></svg>
            <i>ALL BLUE</i>
        `;
        return headerTag;
    }
    const forNav = () => {
        const navTag = document.createElement('nav');
        navTag.classList.add('main-nav');
        navTag.innerHTML = `
            <button class="Home-btn special-button">HOME</button>
            <button class="Menu-btn">MENU</button>
            <button class="Team-btn">TEAM</button>
        `;
        changeDom.navBG(navTag);
        return navTag;
    }

    const forSection = () => {
        const sectionTag = document.createElement('section');
        sectionTag.classList.add('main-section')
        const AllSection = document.createElement('div');
        AllSection.classList.add('allSection');
        const homeSection = document.createElement('div');
        homeSection.classList.add('Home-Section');
        homeSection.innerHTML = `
            <img class="allBlueImg" src="${blueMap}" alt="AllBlueMap">
            <p class="Home-Paragraph">The All Blue is a legendary ocean that is yet to appear in the series. There are fish present here from each of the four seas, and to have such a huge resource at one's disposal is the ultimate dream of every chef. There have been several hints in the series that All Blue truly exists.</p>
        `;
        const menuSection = document.createElement('div');
        menuSection.classList.add('Menu-Section');
        menuSection.innerHTML = `
            <div class="Menu-One">
                <h2 class="Menu-One">SeaFood</h2>
                <section class="img-con">
                    <img src="${seaFood}" alt="seafood-Rice" class="Menu-One">
                    <p class="Menu-Desc Menu-One"> Sanji's traditional seafood fried rice is a meal that takes him to his roots. The Baratie restaurant and Zeff are important factors when remembering when Sanji first joined the crew. Zeff, who saved Sanji from starving, had taught him to cook. This seafood fried rice is a dish that would become an important meal in Sanji's future.

                    Sanji had offered this seafood fried rice to an enemy name Kreig so he wouldn't have to be hungry, despite going against them. As Kreig eats this proclaimed dish, he says it's the best food he has ever had. Sanji continues to make this dish for the Straw Hats, and they share the same enjoyment.</p>
                </section>
            </div>
            <div class="Menu-Two">
                <h2 class="Menu-Two">Soba</h2>
                <section class="img-con">
                    <img src="${soba}" alt="Sanji-Soba" class="Menu-Two">
                    <p class="Menu-Desc Menu-Two"> Sanji's soba shop has been the opening gate to the latest arc of the Land of Wano. As Luffy made his way into the new land, the other Straw Hats had to blend in. Cooking delicious soba could not be a better facade for Sanji, and it allows him to gain intel about the people of Wano.

                    This delicious dish has citizens lined up for their chance to grab their bowls. Seeing Sanji's soba shop thriving becomes an important detail in keeping up with disguising as ordinary citizens. Sanji's soba is a delightful dish that he has perfected for its taste and the safety of his crew.</p>
                </section>
            </div>
            <div class="Menu-Three">
                <h2 class="Menu-Three">StrawHat-Meal</h2>
                <section class="img-con">
                    <img src="${special}" alt="strawhat-Meal" class="Menu-Three">
                    <p class="Menu-Desc Menu-Three"> Being on a ship together means that Sanji has learned each of the crewmate's favorite dishes. From Franky's burgers to Nico Robin's sandwiches, Sanji has to perfect and create different variations for the crew. Even when rations are low, and land is still far away, Sanji does his best to make delicious food 'till they can land. </p>
                </section>
            </div>
        `;

        const teamSection = document.createElement('div');
        teamSection.classList.add('Team-Section');
        teamSection.innerHTML = `
            <header>
                <h2>Meet The Team</h2>
            </header>
        `;


        AllSection.append(homeSection, menuSection);
        sectionTag.appendChild(AllSection);       
        changeDom.MenuClick(menuSection);
        
        return sectionTag;
    }

    const forFooter = () => {
        const footerTag = document.createElement('footer');
        footerTag.classList.add('main-footer');
        footerTag.innerHTML = `
            Copyright &copy; AllBlue 2023
        `;

        return footerTag;
    }

    return {forHeader, forNav, forSection, forFooter}

}







































