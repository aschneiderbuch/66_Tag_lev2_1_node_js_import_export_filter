/* funktionen */

import { data } from "./cities.js";

/* funktion 1
rückgabe     Städte mit   mehr   als 100 000 Einwohner */

function mehrEinwohnerAls(paraZahl, inputArrMitObj) {
    let z = Number(paraZahl)
    let arrObj = inputArrMitObj

    let ergebniss = []
    let counter = 0 
    arrObj.map((i) => {
        if (i.population >= z) {
            counter ++
            return ergebniss.push(i)
        }
        /*      else {
                 
            }  */
    })
    return ["Gefundene Ergebnisse= ", counter, ergebniss ]

}




/* funktion 
rückgabe     Städte mit   weniger   als 100 000 Einwohner */
const wenigerEinwohnerAls100000 = (arr) => {
    return arr.filter((i) => i.population <= 100000)
}

const wenigerEinwohnerAls = (z, arr) => {
    return arr.filter((i) => i.population <= Number(z))
}


export { mehrEinwohnerAls, 
    wenigerEinwohnerAls100000,
    wenigerEinwohnerAls }