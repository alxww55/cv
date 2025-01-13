function updateTime() {
  let date = new Date();
  let getDay = date.getDay();
  let getDate = date.getDate();
  let getMonth = date.getMonth();
  let getHours = date.getHours();
  let getMinutes = date.getMinutes();

  if (getMinutes < 10) {
    getMinutes = "0" + getMinutes;
  }

  if (getHours < 10) {
    getHours = "0" + getHours;
  }

  switch (getDay) {
    case 0:
      getDay = "Sun";
      break;
    case 1:
      getDay = "Mon";
      break;
    case 2:
      getDay = "Tue";
      break;
    case 3:
      getDay = "Wed";
      break;
    case 4:
      getDay = "Thu";
      break;
    case 5:
      getDay = "Fri";
      break;
    case 6:
      getDay = "Sat";
      break;
  }
  
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  for (let i = 0; i < month.length; i++) {
    if (getMonth === i) {
      getMonth = month[i];
      break;
    } else {
      getMonth = "error";
      console.log("Error to get month");
    }
  }

  let time = `${getDay}, ${getMonth} ${getDate}, ${getHours}:${getMinutes}`;

  document.getElementById("time").textContent = time;

  setTimeout(function () {
    updateTime();
  }, 30000);
}

updateTime();
