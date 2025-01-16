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
function moveCursor() {
  const cursor = document.getElementById("cursor-custom");
  document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  window.addEventListener('mousemove', moveCursor);
}
let isAccented = false;
let icon = "";
function iconAccentClick() {
  for (let i = 1; i <= 6; i++) {
    let currentIcon = document.querySelector(`[data-folder${i}]`);
    currentIcon.addEventListener('click', () => {
      isAccented = true;
      currentIcon.style.backgroundColor = "#004d87";
      currentIcon.style.opacity = "0.5";
      icon = currentIcon;
    });
  }
  document.addEventListener('click', (event) => {
    if (isAccented && !event.target.matches('[data-folder1], [data-folder2], [data-folder3], [data-folder4], [data-folder5], [data-folder6]')) {
      icon.style.backgroundColor = "";
      icon.style.opacity = "1";
      isAccented = false;
    } else {
    
    }
  });
}
window.onload = moveCursor();
iconAccentClick();
updateTime();
