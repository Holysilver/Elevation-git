const coffeeShop = {
    beans: 40,
  
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
            console.log("Sorry, we're all out of beans")
            return false
        }
        return true
    },
  
    makeDrink: function (drinkType) {
      if (this.checkValues(drinkType)) {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement
        console.log(`Here's your ${drinkType}`)
      }
    },

  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"