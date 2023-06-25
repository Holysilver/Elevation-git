const setCounter = function (num) {
    let counter = 0
  
    const count = function () {
      counter += num;
      console.log(counter)
    }
  
    return count
  }
  
  const increment = setCounter(2)
  increment()

  //Spot Check 1
  const Family = function() {
    let members = [];
    const bitrh = function(name) {
        members.push(name);
        console.log(members);
    }
    return bitrh;
  }

  const giveBirth = Family();
  // giveBirth("Luke")
  // giveBirth("Leya")
  // giveBirth("Han")
  // giveBirth("Ben")



  const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }

    return{
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide
    }
}



const math = mathOperations()

console.log(math.add(13,29))
console.log(math.multiply(1.75,24))
console.log(math.multiply(7,math.divide(36,6)))



const UsersModule = function () {
  const _users = ['Aaron', 'Avi'];

  const addUser = function (user) {
      _users.push(user)
  }

  const listUsers = function () {
      for (let user of _users) {
          console.log(user)
      }
  }

  return {
      addUser: addUser,
      listUsers: listUsers
  }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.listUsers()

usersModule.addUser('Markiz')
usersModule.addUser('Tnkist')
usersModule.addUser('Barris')
usersModule.listUsers()