/* zusammen führen */

import { mehrEinwohnerAls,
    wenigerEinwohnerAls100000,
    wenigerEinwohnerAls
 } from "./filter.js";
import { data } from "./cities.js";


console.log(mehrEinwohnerAls(900000, data))
console.log(wenigerEinwohnerAls100000(data))
console.log(wenigerEinwohnerAls(500000, data))
