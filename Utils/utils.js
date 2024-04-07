const UNITS = {
    CELSIUS: 'C',
    FAHRENHEIT: 'F'
};

function convertTemperature(temprature, unitTo) {
    if (unitTo === UNITS.CELSIUS) {
        return (temprature - 32) * (5 / 9);
    }
    else if (unitTo === UNITS.FAHRENHEIT) {
        return (temprature * (9 / 5)) + 32;
    }
    else {
        throw new Error('Invalid unit');
    }
}

function getOppositeUnit(unit) {
    if (unit === UNITS.CELSIUS) {
        return UNITS.FAHRENHEIT;
    }
    else if (unit === UNITS.FAHRENHEIT) {
        return UNITS.CELSIUS;
    }
    else {
        throw new Error('Invalid unit');
    }
}

export { UNITS, getOppositeUnit, convertTemperature }