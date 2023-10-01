/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...details: { key: string; value: any }[]): Car {
    const car: Car = {
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
