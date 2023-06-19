const checkReservation = function(){
    const name = document.getElementById("name").value
    if (reservations[name] == undefined) {
        console.log(`You have no reservation, Mr. ${name}`)
        alert(`You have no reservation, Mr. ${name}`)
        return
    }
    if(reservations[name].claimed){
        console.log(`Welcome, ${name}!`)
        alert(`Welcome, ${name}!`)
    }else if (!reservations[name].claimed){
        console.log(`Hmm, someone already claimed this reservation, Mr. ${name}`)
        alert(`Hmm, someone already claimed this reservation, Mr. ${name}`)
    }
}

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
