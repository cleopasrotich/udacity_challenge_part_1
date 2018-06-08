var laugh = function (max){
    var message = "";
    for(var x = 1; x <= max; x++){
        message += "ha";
    }
    return message+"!";
};

console.log(laugh(10));
