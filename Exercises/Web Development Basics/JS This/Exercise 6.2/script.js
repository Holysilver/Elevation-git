const coffeeShop = {
    beans: 40,
    money: 1000,
    beansCost: 1,

  
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 5, price: 5},
      doubleShot: {beanRequirement: 15, price: 10},
      frenchPress: {beanRequirement: 12, price: 15}
    },

    checkValues: function(drinkType) {
        if (!(drinkType in this.drinkRequirements)){
            console.log(`Sorry, we don't make ${drinkType}`)
            return false
        }
        if (this.drinkRequirements[drinkType].beanRequirement > this.beans) {
            console.log("Sorry, we're all out of beans. Just a moment, we're buying beans...")
            if (this.buyBeans(this.drinkRequirements[drinkType].beanRequirement)) {
              return true
            }
            return false
        }
        return true
    },
  
    makeDrink: function (drinkType) {
      if (this.checkValues(drinkType)) {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement
        return true
      }
    },
    /*6.1*/
    buyBeans: function(numBeans) {
      let spentMoney = numBeans * this.beansCost
      if (spentMoney <= this.money) {
        this.money -= spentMoney
        this.beans += numBeans
        console.log(`${numBeans} beans bought`)
        return true
      } else {
        alert(`We don't have enough money for ${numBeans} beans`)
        return false
      }
    },

    /*6.2*/
    buyDrink: function(drinkType){
      if (this.makeDrink(drinkType)) {
        console.log(`Here's your ${drinkType}`)
        this.money += this.drinkRequirements[drinkType].price
      }
    }
  }
  
  coffeeShop.buyDrink("latte"); 
  console.log(coffeeShop.money);
  coffeeShop.buyDrink("americano");
  console.log(coffeeShop.money);
  coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  console.log(coffeeShop.money);
  coffeeShop.buyDrink("doubleShot");
  console.log(coffeeShop.money);
  coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  console.log(coffeeShop.money);