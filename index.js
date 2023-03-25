let numOrStr =prompt('input number or string');
console.log(numOrStr);

switch(numOrStr){
    case null:
        console.log("S2.ви скасували");
        break;
    case  '':
        console.log("S2.Empty String");
        break;
    default:
        if (isNaN(numOrStr)){
            console.log("iS2. number is Ba_NaN");
        } else { (console.log("S2. OK!"));
        break;
        }
     }
