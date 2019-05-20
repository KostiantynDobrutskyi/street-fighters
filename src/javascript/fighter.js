 class Fighter {
    constructor(fighter) {

    }

    getHitPower(fighter) {
        const criticalHitChance = this.randomInteger();
        return fighter.attack * criticalHitChance;
    }

    getBlockPower(fighter) {
        const dodgeChance = this.randomInteger();
        return fighter.defense * dodgeChance;
    }

    randomInteger() {
        let rand = 1 + Math.random() * (2 + 1 - 1);
        rand = Math.floor(rand);
        return rand;
    }
}

 export default Fighter;