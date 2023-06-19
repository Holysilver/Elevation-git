console.log(document)
const playingField = document.getElementById("playing-field")

console.log(playingField.innerHTML)
playingField.style.backgroundColor = "blue"

const ball = document.getElementById("ball")
ball.style.backgroundColor = "yellow"
// or
document.getElementById("ball").style.backgroundColor = "yellow"

const moveRight = function(){
    const ballPos = document.getElementById("ball").style.left 
    // console.log(ballPos)
    let pos = ballPos == "" ? 15 : parseInt(ballPos) + 15
    // console.log(pos)
    document.getElementById("ball").style.left = pos + "px"

    //another solution in Codio
    /* const moveRight = function(){
        const ball = document.getElementById("ball")
        let left = parseInt(ball.style.left) || 0
        left += 15
        ball.style.left = left + "px"
    }*/
  }
  const moveLeft = function(){
    const ballPos = document.getElementById("ball").style.left 
    // console.log(ballPos)
    let pos = ballPos == "" ? -15 : parseInt(ballPos) - 15
    // console.log(pos)
    document.getElementById("ball").style.left = pos + "px"
  }
  const moveUp = function(){
    const ballPos = document.getElementById("ball").style.top 
    // console.log(ballPos)
    let pos = ballPos == "" ? -15 : parseInt(ballPos) - 15
    // console.log(pos)
    document.getElementById("ball").style.top = pos + "px"
  }
  const moveDown = function(){
    const ballPos = document.getElementById("ball").style.top 
    // console.log(ballPos)
    let pos = ballPos == "" ? 15 : parseInt(ballPos) + 15
    // console.log(pos)
    document.getElementById("ball").style.top = pos + "px"
  }

