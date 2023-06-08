console.log("Hello, World!")

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018


if (boughtTesla && isUSCitizen) {
    //first cond
    // let yearOfTeslaPurchase = prompt("How long ago did you buy our Tesla?")
    console.log("How long ago did you buy your Tesla?")
    console.log(yearOfTeslaPurchase)
    if((currentYear - yearOfTeslaPurchase) >= 4){
        console.log("Would you like an upgrade?")
    }else{
        console.log("Are you satisfied with the car?")
    }
}else if (boughtTesla && !isUSCitizen){
    console.log("Would you like to move to the US?")
}else{
    console.log("Are you interesting in buying one?")
}




const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers)
numbers.splice(1,2)
console.log(numbers)
numbers[3]=1
console.log(numbers)
numbers.splice(numbers.length-4,4)
console.log(numbers)
numbers.splice(0,0,0)
console.log(numbers)


let p1 = {
    name: "Danila",
    age: 25,
    city: "London"
}

let p2 = {
    name: "Jill",
    age: 25,
    city: "Tel-Aviv"
}


if(p1.age === p2.age){
    if (p1.city === p2.city){
        console.log(p2.name + " wanted to date " + p1.name)
    }else{
        console.log(p2.name + " wanted to date " + p1.name + ", but couldn't")
    }
}

let library = {
    books: [
        {title: "First book", author: "Me"},
        {title: "Second book", author: "He"},
        {title: "third book", author: "She"},
        {title: "fourth book", author: "It"},
    ]
}

console.log(library.books)

for(let book of library.books){
    console.log(book.title + " " + book.author)
}

for(let bookIndex in library.books){
    console.log(library.books[bookIndex].title + " " + library.books[bookIndex].author)
}


const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
let people = []

// for(let ind of names){
//     people.push({name: names[ind],age: ages[ind]})
// }

for(i=0; i<names.length;i++){
    people.push({name: names[i],age: ages[i]})
}

console.log(people)

for(let person of people){
    console.log(person.name + " is " + person.age + " years old.")
}

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
  console.log(posts)



for(let postInd in posts){
    if(posts[postInd].id === 2 ){
        posts.splice(postInd,1)
    }
}
console.log(posts)


let x = [ 
    {name: "ant", 
    color: "brown"}, 
    {name: "flower", 
    color: "green"}
]

x.push( {name: "ant", color: "green"} )
console.log(x)


let xxx = [ {human: {name: 'Daena', age: 31} } ][0].age

console.log(xxx)