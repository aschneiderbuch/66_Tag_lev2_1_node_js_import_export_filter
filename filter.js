/* funktionen */

import { data } from "./cities.js";

/* funktion 1
rückgabe     Städte mit   mehr   als 100 000 Einwohner */

function mehrEinwohnerAls(paraZahl, inputArrMitObj) {
    let z = Number(paraZahl)
    let arrObj = inputArrMitObj

    let ergebniss = []
    arrObj.map((i) => {
        if (i.population >= z) {
            return ergebniss.push(i)
        }
        /*      else {
                 
            }  */
    })
    return ergebniss

}




/* funktion 
rückgabe     Städte mit   weniger   als 100 000 Einwohner */



export { mehrEinwohnerAls }