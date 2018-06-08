function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(dim){
    triangle = "";
    for(var i = 1; i <= dim; i++){
       triangle += makeLine(i);
    }
    return triangle;
}

console.log(buildTriangle(9));