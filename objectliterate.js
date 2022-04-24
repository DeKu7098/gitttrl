var obj = 
{
    "name1" : "deku",
    "name2" : "luffy",
    "name3" : "meliodus"
}

var arrofkeys = Object.keys(obj);

arrofkeys.forEach(key => {
    console.log(obj[key]);
})
