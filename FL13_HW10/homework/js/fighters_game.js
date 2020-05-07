'use strict';

function Fighter({name, damage, hp, strength, agility}){
    this.name;
    this.damage;
    this.hp;
    this.strength;
    this.agility;
    
    this.wins = 0;
    this.loss = 0;
    this.maxProbability = 100;
    this.minProbability = 0

    this.getName = () => {
        this.name = name;
        return this.name 
}
    this.getDamage = () => {
        this.damage = damage;
        return this.damage
    }
    this.getStrength = () => {
        this.strength = strength;
        return this.strength;
    }
    this.getAgility = () => {
        this.agility = agility;
        return this.agility; 
    }
    this.getHealth = () => {
        this.hp = hp;
        return this.hp;
    }
    
    this.attack = (Fighter) => {
        let probability = this.maxProbability - (this.getStrength() + this.getAgility())
        let rand = Math.floor(this.minProbability + Math.random() * (this.maxProbability + 1 - this.minProbability));
        if (rand < probability){
            console.log(`${this.getName()} makes ${this.getDamage()} damage to  ${Fighter.getName()}`)
            Fighter.dealDamage(this.getDamage());
        }else {
            console.log(`${this.getName()} attack missed`);
        }
    }
    this.heal = (healthpoints) => {
        let totalHP = this.getHealth();
        hp += healthpoints;
        if (this.hp > totalHP){
            hp = totalHP
            return hp;
        } else {
            return this.hp;
        }
    }
    this.dealDamage = (damage) => {
        hp -= damage;
        if (hp < 0){
            hp = 0;
            return hp;
        } else{ 
            return hp;
        }
    }

    this.addWin = () => this. wins++;
    this.addLoss = () => this.loss++;
    this.logCombatHistory = () => {
        console.log(`Name: ${this.getName()} Win: ${this.wins} Loss: ${this.loss}`)
    }
}

function battle (fighter1, fighter2){
    if (fighter1.getHealth() <= 0){
        console.log(`${fighter1.getName()} is dead and can't fight`)
    } else if (fighter2.getHealth() <= 0){
        console.log(`${fighter2.getName()} is dead and can't fight`)
    }else {
        let start = true;
        while(start) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
            console.log(fighter1.getHealth());
            console.log(fighter2.getHealth());
            if(fighter1.getHealth() === 0 || fighter2.getHealth() === 0){
                start = false
            }
        }
        if (fighter2.getHealth() === 0){
            console.log(`${fighter1.getName()} is won`);
        } else {
            console.log(`${fighter2.getName()} is won`);
        }
    }
}


const myFighter = new Fighter({
    name: 'Maximus', 
    damage: 20, 
    hp: 100, 
    strength: 20, 
    agility: 25
});
const myFighter2 = new Fighter({
    name: 'Commodus', 
    damage: 20, 
    hp: 100, 
    strength: 30, 
    agility: 5
});


battle(myFighter, myFighter2);
battle(myFighter, myFighter2);

