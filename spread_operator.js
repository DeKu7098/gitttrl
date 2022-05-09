const obj1 = {
    name1 : 'DeKu',
    name2 : 'Luffy',
}
const obj2 = { ...obj1, name1 : 'Zoro', name3 : 'Meliodus'};
console.log(obj2);

const arr1 = [2,4,6];
const arr2 = [1,3,5];

const arr3 = [...arr1, ...arr2];
console.log(arr3);