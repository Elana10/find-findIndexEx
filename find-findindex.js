/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

let arrNames = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

function findUserByUsername(usersArray, username) {
  return usersArray.find(function (obj){
    if(obj.username === username){
      return obj;
    }
    return undefined;
  })
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let indexNum = usersArray.findIndex(function(obj){
    if (obj.username === username){
      return obj;
    }
  })
  if (indexNum >= 0){
    let x = usersArray[indexNum]
    usersArray.splice(indexNum, 1)
    return x;
  }
  else {
    return undefined;
  }

}

