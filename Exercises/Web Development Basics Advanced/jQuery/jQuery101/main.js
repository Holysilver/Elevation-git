$("h1").css("background-color", "blue")

$(".red-div").css("background-color","red")

$("li:first-child").css("background-color", "green")
$("li:last-child").css("background-color", "pink")
$("#brown-div").css("background-color", "brown")

$("#b1").addClass("box")
$("#b2").addClass("box")

$("#my-input0").val("Terabyte")

//Spot Check 5
const barcode = $("p").data().barcode
const expirationDate = $("p").data().expirationdate

console.log(`the item with barcode ${barcode} will expire on ${expirationDate}`)

//Spot Check 6
// $("#b2").hover(function() {
//     $("#b2").css("background-color", "blue")
// })


//Spot Check 7
$('button').click(function() {
    alert($("#my-input").val())
})

$("#b1").hover(function () {
    console.log($(this))
})

$('.box').hover(function() {
    $(this).css("background-color", "blue")
})


//Spot Check 9
$(".feedme").on("click", function(){
    let divCopy = $(`<div class='feedme'>${$(this).text()}</div>`)//use template literals and $(this)
    
    $("body").append(divCopy)
  })


//   const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]

//   for(let name of names){
//     $("body").append(`<div>${name}</div>`)
//   }

//Spot Check 10
  const names = [
    { first: "Alex", last: "Johnson" },
    { first: "Byron", last: "Loveall" },
    { first: "Cassandra", last: "Wuthers" },
    { first: "Deandre", last: "Rahm" },
    { first: "Ellena", last: "Freeman" }
  ]

    for(let name of names){
    $("body").append(`<div>${name.first} - ${name.last}</div>`)
  }


//Spot Check 11
$("#conf").hover(() => $("#conf").remove())

//Spot Check 12
$("button").on("click", function(){
    $("#blogs").append("<div class='blog'>Cool blog</div>")
  })
  
// $("#blogs").on("click", ".blog", function(){
//     $(".blog").text("blargh") 
// })



const addDiv = function() {
    $("body").append("<div class=box></div>")
  };
  
$("button").on("click", function() {
    addDiv()
  });
  
// $(".box").on("click", function() {
//     alert("hi")
//   });

$("body").on("click", ".box", function() {
    alert("hi");
});


//13
$("body").on("click", ".blog", function(){
    $(this).text("blargh") 
})