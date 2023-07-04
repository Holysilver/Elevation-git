$(".remove").on("click", function(){
    alert($(this).closest(".post").data().id)
  })

// $("button").on("click", function() {
//     alert($(this).closest("div").find("span").text())
// })

$("button").on("click", function() {
    
    alert($(".container").find("p").text())
})
