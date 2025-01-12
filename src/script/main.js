let getDay = new Date().getDay();
let getHours = new Date().getHours();
let getMinutes = new Date().getMinutes();

switch (getDay) {
    case 0: 
        getDay = 'Sun';
        break;
    case 1:
        getDay = 'Mon';
        break;
    case 2:
        getDay = 'Tue';
        break;
    case 3:
        getDay = 'Wed';
        break;
    case 4:
        getDay = 'Thu';
        break;
    case 5:
        getDay = 'Fri';
        break;
    case 6:
        getDay = 'Sat';
        break;
}      
console.log(`Current time is: ${getHours}:${getMinutes}`);
console.log(`Current day is: ${getDay}`);
