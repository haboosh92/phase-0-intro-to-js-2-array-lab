// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];


function beforeEach() {
    cats.length = 0;
    cats.push("Milo","Otis","Garfield")
};

function destructivelyAppendCat()
{
beforeEach();
cats.push('Ralph');

}
//destructivelyAppendCat();
//console.log(cats);
function destructivelyPrependCat()
{
    beforeEach();
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat()
{
    beforeEach();
    cats.pop();
}

function destructivelyRemoveFirstCat()
{
    beforeEach();
    cats.shift();
}

function appendCat()
{
beforeEach();
return [...cats ,"Broom"];
}

function prependCat()
{
beforeEach();
return ["Arnold",...cats]
}

function removeLastCat()
{
    beforeEach();
    return [...cats.slice(0,2)]
}
function removeFirstCat()
{
    beforeEach();
    return [...cats.slice(1,3)]
}

console.log(cats)