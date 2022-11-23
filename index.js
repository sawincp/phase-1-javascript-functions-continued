// code your solution here
function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`
}

function mondayWork(event = "go to the office"){
    return `This Monday, I will ${event}.`
}
mondayWork("work from home")

function wrapAdjective(flair = "*"){
    return function (adjective = "Special"){
        return `You are ${flair}${adjective}${flair}!`;
    }
}
wrapAdjective("a dedicated programmer")("||");
