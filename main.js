/* zusammen führen */

import { mehrEinwohnerAls,
    wenigerEinwohnerAls1Para,
    wenigerEinwohnerAls
 } from "./filter.js";
import { data } from "./cities.js";


console.log(mehrEinwohnerAls(900000, data))
console.log(wenigerEinwohnerAls1Para(data))
console.log(wenigerEinwohnerAls(500000, data))
