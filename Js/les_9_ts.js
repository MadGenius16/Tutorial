class Car {

  static description = 'клас для реалізаціі авто'
  #owner //приватне поле класу, тільки всередені класу.
  constructor(brand, model, price, owner) {
    this.brand = brand //публічне поле
    this.model = model
    this.price = price
    this.#owner= owner
  }

  displayCarInfo() {
    console.log(
      `Марка автомобіля: ${this.brand}\nМодель автомобіля: ${this.model}\nЦіна автомобіля: ${this.price}$\nВласник автомобіля: ${this.#owner}`);
  }

get owner() {
  const email = prompt('Введи свою пошту, сука')

  if(email === this.#owner){
    return this.#owner
  }
  else {
    return 'пішов на хуй'
  }
}

set owner(newOwner) {
  const email = prompt('Введи свою пошту, сука')

  if(email === this.#owner){
     this.#owner= newOwner
     console.log('Власник успішно змінений ! новий влас ${newOwner}')
   }
   else{
    console.log("ага наєбати надумав!!! спробуй ще раз.")
   }
  }



}

const infinityCar = new Car('infinity', 'Q60S', 30000, 'inf@gmail.com')
console.log(infinityCar)
infinityCar.displayCarInfo()
// console.log(infinityCar.owner)

infinityCar.owner = 'car@gmail.com'

const bmwCar = new Car('BMW', 'M1', 35000, 'bmw@gmail.com')
console.log(bmwCar)
bmwCar.displayCarInfo()