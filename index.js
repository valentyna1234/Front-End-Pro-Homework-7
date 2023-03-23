let numOrStr = prompt('input number or string');
console.log(numOrStr)



if(numOrStr === null) {
console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}

//Rewrite the code below using the switch…case construct

switch (true) {
    case numOrStr === null:
        console.log('switch.ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('switch.Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log('switch. number is Ba_NaN');
        break;
    default:
        console.log('switch.OK!');
        break;
}