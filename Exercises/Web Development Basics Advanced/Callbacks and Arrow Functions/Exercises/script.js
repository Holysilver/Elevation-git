// Exercise 1 - Callbacks
const push = function () {
    console.log("pushing it!")
  }
  
  const pull = function () {
    console.log("pulling it!")
  }
  
  const pushPull = function(callback) {
    callback()
  }

  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"


  //Exercise 2 - Callbacks
  const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  
  const getTime = function(callback) {
    const time = new Date()
    callback(time)
  }


  getTime(returnTime)

  
  //Exercise 3 - Callbacks
  const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
  const logData = function(data) {
    console.log(data)
  }


  displayData(alert, logData, "I like to party")



  //Exercise 4 - Arrow Functions
  const sum4 = (num1, num2, num3) => num1 + num2 + num3
  console.log(sum4(1,2,3))

// Exercise 5 - Arrow Functions

const capitalize = name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Taylor
console.log(capitalize("feliSHIA")) // returns Felishia

// Exercise 6 - Arrow functions
const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

  const commentOnWeather = temp => "It's " + determineWeather(temp)

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"

// Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")


  const run = (name) => {console.log("Run, " + name + ", run!")}
const yell = function(action){
    let env = "Forest"
    action(env)
}
run(yell)