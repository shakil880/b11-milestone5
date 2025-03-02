const buttons = document.querySelectorAll('.main-primary-btn')

const h1Main = document.querySelector('.h1-main-left')

const checkboxNumber = document.querySelector('.checkbox-number')

const date = document.getElementById('h1-main-right')

const dayOfWeek = document.getElementById('p1-main-right')

const clearBtn = document.getElementById('clear-btn')

let theDate = new Date()

const activityLog = document.getElementById('activity-log')




const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const month = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const currentDate = {
  day : day[theDate.getDay()],
  date : theDate.getDate(),
  month : month[theDate.getMonth()],
  year : theDate.getFullYear()
}

date.innerText = currentDate.month  + " " + currentDate.date + ", " + currentDate.year
dayOfWeek.innerText = currentDate.day


for (let button of buttons) {
  button.addEventListener('click', () => {
    button.disabled = true
    button.style.opacity = "20%";

    if (Number(h1Main.innerText) == 1) {
      alert("Congrats!!! You have completed all the current task");
      h1Main.innerText = Number(h1Main.innerText) - 1;
    } else {
      alert("Board Updated Successfully");
      h1Main.innerText = Number(h1Main.innerText) - 1;
    }

    checkboxNumber.innerText = Number(checkboxNumber.innerText) + 1;

    let runningDate = new Date()
    let runningDateLatest = Number(10)
    let ampm

    if (runningDate.getHours() > 12) {
      runningDateLatest = runningDate.getHours() - 12
      ampm = "PM"
    } else {
      runningDateLatest = runningDate.getHours();
      ampm = "AM"
    }

    const newParagraph = document.createElement('p');
    newParagraph.className = "activity-log-p primary-bg";
    newParagraph.innerText = "You have completed the task: " + button.parentElement.parentElement.childNodes[3].innerText + " at " + runningDateLatest +":"+ runningDate.getMinutes() +":"+ runningDate.getSeconds()  +" "+ ampm;
    activityLog.append(newParagraph)


    
  })
}

clearBtn.addEventListener('click', () => {
  activityLog.innerHTML = ""
})


