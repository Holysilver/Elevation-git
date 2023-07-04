// $(".remove").on("click", function(){
//     alert($(this).closest(".post").data().id)
//   })

// $("button").on("click", function() {
//     alert($(this).closest("div").find("span").text())
// })

// $("button").on("click", function() {
    
//     alert($(".container").find("p").text())
// })

$(".generator").on("click", function() {
    const id = $(this).closest("div").attr("id")
    console.log(`Processor ID: ${id}`)
    const compID = $(this).closest(".computer").data().id
    console.log(`Computer's data-id: ${compID}`)
    const busNumber = $(this).closest(".computer").find(".BUS").text()
    console.log(`BUS: ${busNumber}`)
})

$(".validator").on("click", function() {
  const genText = $(this).closest(".computer").find(".generator").text()
  console.log(`The generator's text: ${genText}`)
  const mB = $(this).closest(".computer").find(".MB").text()
  console.log(`MB: ${mB}`)
  const qRs = $(this).closest(".computer").find(".QR")
  for (const qr of qRs){
    console.log(`QR: ${qr.innerHTML}`)
  }
})


let x = "flap"
let y = {a: "shlop", x: "dub"}
const all = [x, y]

x = all[1].x
$("#corq").siblings(".nalo").append("<div>" + x + " - Ryk</div>")