//Exercise 1
const StringFormatter  = function() {
    const capitalizeFirst = function(str){
      return str[0].toUpperCase() + str.slice(1)
    }

    const toSkewerCase = function(str) {
      return str.replace(" ", "-")
    }

    return {
      capitalizeFirst: capitalizeFirst,
      toSkewerCase: toSkewerCase
    }
}


const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box


//Exercise 2

const Bank = function() {
  let _money = 500;
  const depositCash = function(cash) {
    _money += cash
  }

  const checkBalance = function() {
    return console.log(_money)
  }

  return {
    deposit: depositCash,
    showBalance: checkBalance
  }
}

const bank = Bank()

bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950


//Exercise 3

const SongsManager = function() {
  const _songs = {}

  const addSong = function(name, url) {
    _songs[name] = url.substring(url.indexOf("=") + 1,url.length)
  }

  const getSong = function(name) {
    let url = _songs[name]
    return console.log("https://www.youtube.com/watch?v=" + url)
  }

  return {
    addSong: addSong,
    getSong: getSong
  }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
