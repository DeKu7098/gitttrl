const person = 
{
    fName : 'Izuku',
    lName : 'Midoriya',
      age : '22',
  hobbies : ['guitar','anime','movies'],
  address : {
      street: 'MHA',
        city: 'Yokohama',
        state: 'Japan'
  }
}
console.log(person.hobbies[2],person.address.state);
const { age } = person;
console.log(age);
const { address: {state} } = person;
console.log(state);