//Exercise 1
$('button').click( function() {
    $(".listNames").append(`<li>${$('#my-input').val()}</li>`)
    $('#my-input').val('')
})


//Exercise 2
// $("ul").on("mouseenter mouseleave", "li", function(){
//     $(this).remove()
// })

//Exercise 3 - VERY bad solution....
// $("body").append(`<div class="box" id="first"></div>`)
// $("body").append(`<div class="box" id="second"></div>`)

// $('.box').hover(function() {
//     if ($(this).attr("id") == "first"){
//         $("#second").css("background-color", "orange")
//         $("#first").css("background-color", "#8e44ad")
//     }else{
//         $("#first").css("background-color", "orange")
//         $("#second").css("background-color", "#8e44ad")
//     }
// })


//Exercise 4
$(".item").on("click", function() {
    if ($(this).data().instock) {
        $("#cart").append(`<div class=cart-item>${$(this).text()}</div>`)
    }
})

//Exercise 5
const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]

const addFruits = function() {
    for(let fruit of fruits) {
        $("#basket").append(`<div class="${fruit.color}">${fruit.name}</div>`)
    }
}

addFruits()