const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like " + food)
    }
  }
console.log(person.name)
person.speak("cheese toast")


/*Exercise 1*/
const isEven = function(number){
    return number % 2 == 0
}
console.log("4 is " + isEven(4))
console.log("15 is " + isEven(15))

/*Exercise 2*/
const printOdds = function(arrNumb){
    for(let num of arrNumb){
        if (num % 2 !== 0) {console.log(num)}    
    }
}

printOdds([1,22,31,4,59,643,71,80])

/*Exercise 3*/
const checkExists = function(arr, numb){
    for(let n of arr){
        if (n == numb) {return true}
    }
    return false
}

console.log(checkExists([1,2,3],2))
console.log(checkExists([1,2,3],5))

/*Exercise 4*/
const calculator = {
    add: function(num1, num2){
        return num1 + num2
    },
    subtract: function(num1, num2){
        return num1 - num2
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)
console.log(calculator.add(result1, result2)) //should print 42

/*Exercise 5 (Extra Practice)*/
const increaseByNameLength = function(money, name = ""){
    // return String(name).length*money // - regular way. Make default "" is better i think. 
    //Anyway it works. In both ways.
    return name.length*money
}

const makeRegal = function(name){
    return "His Royal Highness, " + name
}


const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"