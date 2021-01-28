var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, candy, count) {
    if (count <= 0)
        return "Number cannot be zero/negative"
    for (let i = 0; i < count; i++)
        chocolates.unshift(candy)
    return chocolates
}

//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, count) {
    if (count > chocolates.length)
        return "Insufficient chocolates in the dispenser"
    else if (count < 0)
        return "Number cannot be zero/negative"
    return chocolates.splice(0, count)
}


//Progression 3: Dispense ___ chocolates


function dispenseChocolates(chocolates, count) {
    if (count > chocolates.length)
        return "Insufficient chocolates in the dispenser"
    else if (count < 0)
        return "Number cannot be zero/negative"
    return chocolates.splice(chocolates.length - count, chocolates.length).reverse()
}


//Progression 4: Dispense ___ chocolates of ____ color


function dispenseChocolatesOfColor(chocolates, count, color) {
    if (count > chocolates.length)
        return "Insufficient chocolates in the dispenser"
    else if (count < 0)
        return "Number cannot be zero/negative"
    return chocolates.reverse().splice(chocolates.indexOf(color), count)
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    let object = {}
    chocolates.map((chocolate) => {
        object[chocolate] = chocolates.filter(function (value) {
            return value === chocolate
        }).length
    })
    return Object.values(object)
}



//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    let object = {}//object for the count of chocolates based on their occurence
    chocolates.map((chocolate) => {
        object[chocolate] = chocolates.filter(function (value) {
            return value === chocolate
        }).length
    })

    //sorting the object(choclate count object) in reverse order
    const sortable = Object.fromEntries(
        Object.entries(object).sort(([, a], [, b]) => b - a)
    );
    
    //obtaining the sorted object(choclate count object) keys and values into the arrays
    const sortableKeys = Object.keys(sortable)
    const sortableValues = Object.values(sortable)
    
    //new array for the assigning the chocholates based on count
    let array = []

    //pushing chocolates into the array based on their count
    for (let i = 0; i < sortableKeys.length; i++)
        for (j = 0; j < sortableValues[i]; j++)
            array.push(sortableKeys[i])

    //assigning the array back to the chocolates
    for (i = 0; i < array.length; i++)
        chocolates[i] = array[i]

}

//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates,count,colorToReplace,colorReplacedBy){
    if(count<0)
    return "Number cannot be zero/negative"
    else if(colorToReplace===colorReplacedBy)
    return "Can't replace the same chocolates";
    for(let i=0;i<chocolates.length;i++){
        if(chocolates[i]==colorToReplace&&count-->0)
            chocolates[i]=colorReplacedBy
    }
    return chocolates
}

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, colorToReplace, colorReplacedBy){
    if(chocolates.length===0){
        return [0,[]]
    }else if(colorReplacedBy==colorToReplace){
        return "Can't replace the same chocolates"
    }
    else{
        var result=chocolates.map(data=>{
            if(data===colorToReplace){
                return data=colorReplacedBy;
            }
            return data;
        });
        count=0;
        result.forEach(data=>{
            if(data===colorReplacedBy) count++;
        });
    }
    return[count,result]
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed