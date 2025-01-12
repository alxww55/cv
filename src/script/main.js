function updateTime() {
    let date = new Date();
    let getDay = date.getDay();
    let getDate = date.getDate();
    let getMonth = date.getMonth();
    let getHours = date.getHours();
    let getMinutes = date.getMinutes();

    if (getMinutes < 10) {
        getMinutes = '0' + getMinutes;
    }

    if (getHours < 10) {
        getHours = '0' + getHours;
    }

    let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < day.length; i + 1) {
        if (getDay === i) {
            getDay = day[i];
            break;
        } else {
            getDay = 'error';
            console.log('Error to get day');
        }
    }

    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 0; i < month.length; i + 1) {
            if (getMonth === i) {
                getMonth = month[i];
                break;
            } else {
                getMonth = 'error';
                console.log('Error to get month');
            }
        }

    let time = `${getDay}, ${getMonth} ${getDate}, ${getHours}:${getMinutes}`;

    document.getElementById('time').textContent = time;

    setTimeout(function(){updateTime()}, 1000)
}

updateTime();

