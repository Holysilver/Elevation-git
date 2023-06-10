people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]
var count = 0


const capitalize = function(str){
    count ++
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
}

const getAge = function(age){
    if(age < 21){
        return "an underage"
    }else if(age > 55){
        return "a 55+"
    }
    return String(age) + " year old"
}

const getProfession = function(prof){
    let profession = ""
    const profArray = String(prof).split(" ")
    for(let st of profArray){
        profession += capitalize(st)
        profession += " "
    }
    return profession//.slice(length(profession)-2) //TODO need to be tested
}

const getCountryCity = function(country, city){
    return "from " + capitalize(city) + ", " + capitalize(country) + ". "
}

const getCatchphrase = function(name, catchphrase){
    return capitalize(name) + ' loves to say "' + capitalize(catchphrase) + '"'
}


const getSummary = function(person){
let summary = ""
summary += capitalize(person.name)
summary += ` is ${getAge(person.age)} `                     //Yes - you can put a function call inside the tick quotes!
summary += getProfession(person.profession)                 //call function for profession
summary += getCountryCity(person.country, person.city)      //call function for country + city
summary += getCatchphrase(person.name, person.catchphrase)  //call function for catchphrasereturn summary
return summary + "."
}

console.log(getSummary(people_info[0]))
console.log(getSummary(people_info[1]))
console.log(getSummary(people_info[2]))
console.log(`capitalize was called ${count} times`)