const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const giveaway = document.querySelector(".giveaway")
  const deadline = document.querySelector(".deadline")
  const items = document.querySelectorAll(".deadline-format h4")

  //hardcoding the values here
  //let futureDate = new Date(2023,5,5,8,30,23)
  //console.log(futureDate)

  //adding +10 days from when the application starts 
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  
  const futureDate = new Date(tempYear,tempMonth,tempDay+10,10,30,0)

  const year = futureDate.getFullYear()
  const hours = futureDate.getHours()
  const mins=futureDate.getMinutes()
  const date = futureDate.getDate()

  let month = futureDate.getMonth();
  month = months[month]

  const weekday = weekdays[futureDate.getDay()]

  giveaway.textContent = `Giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${mins}am`


//future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime(){
    const today = new Date().getTime()
    const t = futureTime - today;
    //console.log(t)

// 1s = 1000ms
// 1m = 60s
// 1h = 60min
// 1d = 24hrs

    //values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    //calculating all the values
    let days = t / oneDay;
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000)

    //setting all the values in an array
    const values = [days , hours , minutes ,seconds]

    //fomatting the values
    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        {
           return item;
        }
    }

    items.forEach(function(item,index){
        item.innerHTML =format(values[index])
    })

    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h3>Sorry this giveaway has been expired<h3>`
    }

}

//countdown
let countdown = setInterval(getRemainingTime,1000)

getRemainingTime()

