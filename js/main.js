
function outputname(elementId, outputelement) {
    var name = document.getElementById(elementId).value;
    document.getElementById(outputelement).innerHTML = name;
    
}
outputname('name', 'js-output');