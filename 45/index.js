"use strict";
function createCar(manufacturer, model, ...details) {
    const car = {
        manufacturer,
        model,
    };
    for (let detail of details) {
        car[detail.key] = detail.value;
    }
    return car;
}
// Calling createCar with required information and additional details
const carInfo = createCar('Toyota', 'Camry', { key: 'color', value: 'Blue' }, { key: 'optionalFeature', value: 'Sunroof' });
console.log(carInfo);
//   done
