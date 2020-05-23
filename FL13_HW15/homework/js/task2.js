// TODO: Your code goes here
'use strict';

const timeAcceleration = 2000;
const timeBraking = 1500;
const timeOverheating = 30;

function Vehicle(color, engine) {
    this._color = color;
    this._engine = engine;
    this._maxSpeed = 70;
    this._model = 'unknown model';
    this._currentSpeed = 0;
    this._move;
    this._stopped;
    this._maximum;
}

Vehicle.prototype.getInfo = function () {
    console.log({
        'engine': this._engine,
        'color': this._color,
        'maxSpeed': this._maxSpeed,
        'model': this._model
    })
}

Vehicle.prototype.upgradeEngine = function (newEngine, maxSpeed) {
    if (this._stopped === undefined || this._stopped === null) {
        this._engine = newEngine;
        this._maxSpeed = maxSpeed;
    }
}

Vehicle.prototype.drive = function () {
    if (this._move === undefined) {

        this._move = setInterval(() => {
            this._currentSpeed += 20;
            console.log(this._currentSpeed);

            if (this._currentSpeed >= this._maxSpeed) {
                console.log('speed is too high, SLOW DOWN');
            }
        }, timeAcceleration);
    }
}

Vehicle.prototype.stop = function () {
    if (this._stopped === undefined) {

        clearInterval(this._move);
        this._maximum = this._currentSpeed;
        this._stopped = setInterval(() => {

            this._currentSpeed -= 20;
            console.log(this._currentSpeed);
            if (this._currentSpeed === 0) {
                clearInterval(this._stopped);
                this._stopped = null;
                console.log(`Vehicle is stopped. Maximum speed during the drive was ${this._maximum}`)
            }

        }, timeBraking)

    }
}

//============================================

function Car(color, engine, model) {
    Vehicle.call(this, color, engine);
    this._maxSpeed = 80;
    this._model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Motorcycle;

Car.prototype.changeColor = function (color) {
    if (this._color !== color) {
        this._color = color;
    } else {
        console.log('The selected color is the same as the previous, please choose another color');
    }
}
Car.prototype.stop = function () {
    if (this._stopped === undefined) {

        clearInterval(this._move);
        this._maximum = this._currentSpeed;
        this._stopped = setInterval(() => {

            this._currentSpeed -= 20;
            console.log(this._currentSpeed);
            if (this._currentSpeed === 0) {
                clearInterval(this._stopped);
                this._stopped = null;
                console.log(`Car ${this._model} is stopped. Maximum speed during the drive was ${this._maximum}`)
            }

        }, timeBraking)

    }
}

//======================================

function Motorcycle(color, engine, model) {
    Vehicle.call(this, color, engine);
    this._maxSpeed = 90;
    this._model = model;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

Motorcycle.prototype.drive = function () {
    if (this._move === undefined) {
        console.log(`Let's drive`);
        this._move = setInterval(() => {
            this._currentSpeed += 20;
            console.log(this._currentSpeed);

            if (this._currentSpeed >= this._maxSpeed) {
                console.log('speed is too high, SLOW DOWN');
            }

            if (this._currentSpeed - this._maxSpeed >= timeOverheating) {
                console.log('Engine overheating');
                clearInterval(this._move);
            }
        }, timeAcceleration);
    }
}

Motorcycle.prototype.stop = function () {
    if (this._stopped === undefined) {

        clearInterval(this._move);
        this._stopped = setInterval(() => {

            this._currentSpeed -= 20;
            console.log(this._currentSpeed);
            if (this._currentSpeed === 0) {
                clearInterval(this._stopped);
                this._stopped = null;
                console.log(`Motorcycle ${this._model} is stopped. Good drive`)
            }

        }, timeBraking)

    }
}