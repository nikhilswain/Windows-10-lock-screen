const dateOut = document.getElementById('date'), // to show current date month and day
  clockOut = document.getElementById('clock'); // for current date
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  monthS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
function showTime() {
  const time = new Date(),
    day = time.getDay(),
    date = time.getDate(),
    month = time.getMonth(),
    hour = time.getHours(),
    mins = time.getMinutes();
  clockOut.innerHTML = `${preceedZero(hour)} : ${preceedZero(mins)}`;
  dateOut.innerHTML = `${weekDays[day]}, ${date} ${monthS[month]}`;
  setTimeout(showTime, 1000);
}

function preceedZero(time) {
  return (parseInt(time, 10) < 10 ? '0' : '') + time;
}

function animate() {
  setTimeout(() => {
    document.getElementById('wrapper2').style.display = 'block';
  }, 300);
  document.getElementById('wrapper').classList.add('animate');
}

document.body.addEventListener('click', animate, false);
document.body.addEventListener('keyup', animate, false);

showTime();
