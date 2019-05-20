import View from './view';
import FighterView from './fighterView';
import {fighterService} from "./services/fightersService";
import PopupWindow from "./popupWindow"
import RenderingNewFighter from "./renderingNewFighter"
import Fighter from "./fighter"


class FightersView extends View {
    constructor(fighters) {
        super();

        this.handleClick = this.handleFighterClick.bind(this);
        this.createFighters(fighters);
    }

    fightersDetailsMap = new Map();

    createFighters(fighters) {
        const fighterElements = fighters.map(fighter => {
            const fighterView = new FighterView(fighter, this.handleClick);
            return fighterView.element;
        });

        this.element = this.createElement({tagName: 'div', className: 'fighters'});
        this.element.append(...fighterElements);
    }


    async handleFighterClick(event, fighter) {
        const popup = document.getElementById("callback"),
            shadow = document.getElementById("shadow"),
            formPopup = document.forms.popupForm,
            addBtn = formPopup.confirm,
            choseFighter = formPopup.choseFighter,
            classActive = document.getElementsByClassName("active"),
            fightBtn = document.getElementById("fight"),
            progress = document.getElementsByClassName("progress");


        const objectFighters = this.fightersDetailsMap;
        let currentFighter = await fighterService.getFighterDetails(fighter._id);


        if (event) {
            classActive.length !== 2 ? shadow.style.display = 'block' : shadow.style.display = 'none';

            if (!objectFighters.has(fighter._id)) {
                objectFighters.set(fighter._id, currentFighter);

            }

            const popupWidow = new PopupWindow(objectFighters.get(fighter._id), formPopup);

            popupWidow.writePopup(objectFighters.get(fighter._id));

            addBtn.onclick = function () {
                objectFighters.set(fighter._id, popupWidow.readPopup(objectFighters.get(fighter._id)));
            };

            choseFighter.onclick = function () {

                objectFighters.set(fighter._id, {
                    ...popupWidow.readPopup(objectFighters.get(fighter._id)),
                    ...{active: true}
                });

                event.path[1].classList.add("active");
                popup.checked = false;


                if (classActive.length === 2) {
                    event.path[2].innerHTML = "";
                    fightBtn.style.display = "inline-block";
                    for (let val of objectFighters.values()) {
                        if (val.active) {
                            let f = new RenderingNewFighter(val);
                            event.path[2].appendChild(f.element);
                        }
                    }


                }
            };

        }





        fightBtn.onclick = function () {
            fightBtn.style.display = "none";
            let fightersForFight = [];
            for(let i = 0; i<6; i++){
                if(progress[0].classList.contains(i)||progress[1].classList.contains(i)){
                    fightersForFight.push(""+i)
                }
            }


        };

        // function fight(fighter1, fighter2) {
        //     let winner;
        //     let damage;
        //
        //     while(fighter1.health > 0 && fighter2.health > 0) {
        //         damage = fighter1.getHitPower() - fighter2.getBlockPower();
        //         if(damage > 0) {
        //             fighter2.health -= damage;
        //         }
        //         if(fighter2.health <= 0) {
        //             winner = fighter1.name;
        //             break;
        //         }
        //
        //         damage = fighter2.getHitPower() - fighter1.getBlockPower();
        //         if(damage > 0) {
        //             fighter1.health -= damage;
        //         }
        //         if(fighter1.health <= 0) {
        //             winner = fighter2.name;
        //             break;
        //         }
        //     }
        //     alert(`The winner is ${winner}!`);
        // }







    }




}

export default FightersView;