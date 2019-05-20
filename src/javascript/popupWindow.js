class PopupWindow {
    constructor(fighterDetails, formPopup) {
        this.name = formPopup.fighterName;
        this.health = formPopup.health;
        this.attack = formPopup.attack;
        this.defense = formPopup.defense;
    }


    writePopup(fighterDetails) {
        this.name.value = fighterDetails.name;
        this.health.value = fighterDetails.health;
        this.attack.value = fighterDetails.attack;
        this.defense.value = fighterDetails.defense;
    }

    readPopup(fighterDetails) {
        let options = {};

        options.name = this.name.value;
        options.health = +this.health.value;
        options.attack = +this.attack.value;
        options.defense = +this.defense.value;

        return {
            ...fighterDetails,
            ...options
        }
    }
}

export default PopupWindow;