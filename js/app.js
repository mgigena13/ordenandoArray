const arrNumerico = [54, 22, 101, 89, 48, 98, 354, 348, 3543, 23445, 35, 687, 683, ,6548, 6546, 78, 987,];    


console.log("desordenado", arrNumerico);

function comparar(a, b) {
    return a - b;
}

console.log('ordenado con función:', arrNumerico.sort(comparar))