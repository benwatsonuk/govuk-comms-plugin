console.log('Loaded Comms')

function alertTheUser(message) {
  alert(message)
}

const theTrigger = document.getElementById('triggerDaysPassing')
const theCounter = document.getElementById('daysPassing')

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
