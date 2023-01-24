console.log('Loaded Comms')

function alertTheUser(message) {
  alert(message)
}

const theTrigger = document.getElementById('triggerDaysPassing')
const theCounter = document.getElementById('daysPassing')

const notifyUserOfMessage = (type, heading, message, from, target) => {
  console.log('notifyUserOfMessage')
  type = type || 'email'
  // Insert relevant html into page (SMS or Email)
  addHtmlToPage(type, heading, message, from)
  // Reveal notification

  // Handle click
}

const addHtmlToPage = (type, heading, message, from) => {
  console.log('addHtmlToPage')
  document.getElementById('main-content').appendChild( setTheHtml(type))
  addTheMessageToTheHtml(heading, message, from)
}

const addTheMessageToTheHtml = (heading, message, from) => {
  // Swap out the template literals for the variables
}

const setTheHtml = (type) => {
  if (type === 'email') {
    return `<div id="govuk-comms-plugin--email-alert">
    <h2>Email alert!</h2>
    <p>This is an alert</p>
    </div>`
  } else {
    return `<div id="phoneBackground" class="active">
        <div id="phone-mockup" class="active">

        </div>
    </div>`
  }
}

function daysPass (page, waitTime, days) {
  console.log('Days passing function called')
  const theWaitTime = waitTime || 3000
  setTimeout(function () {
    theTrigger.classList.add('active')
  }, theWaitTime)
  theTrigger.addEventListener('click', function () {
    theCounter.classList.add('active')
    theTrigger.classList.remove('active')
    for (let i = 0; i <= days; ++i) {
      setTimeout((function (x) {
        return function () {
          document.getElementById('days').innerHTML = x.toString()
        }
      })(i), i * 1000)
    }
    setTimeout(function () { document.location.href = page }, (days * 1000))
  })
}

if (theCounter.length === 1) {
  const url = (theCounter.getAttribute('data-dayspassurl'))
  const timeToPrompt = (theCounter.getAttribute('data-dayspasstimetoprompt')) || 5000
  const days = (theCounter.getAttribute('data-dayspassdays')) || 5
  daysPass(url, timeToPrompt, days)
}

// if ($('#phoneBackground #phone-mockup').length === 1) {
//   $('#phone-mockup').on('click', function () {
//     $('#phoneBackground').toggleClass('active')
//     $(this).toggleClass('active')
//   })
// }
//
// if ($('#phoneAccessCode #phone-mockup').length === 1) {
//   setTimeout(function () {
//     $('#phone-mockup').toggleClass('active')
//   }, (3000))
// }
