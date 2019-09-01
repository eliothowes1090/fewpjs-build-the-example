// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeButtons = document.querySelectorAll('.like-glyph')
const errorModal = document.querySelector('#modal.hidden')
const errorMessage = document.querySelector('#modal-message')
// Your JavaScript code goes here!

const likeEvent = () => {
  likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', event => {
      dealWithSeverResponse(mimicServerCall(), event)
    })
  })
}

const likeAction = event => {
  if (event.target.innerText === EMPTY_HEART) {
    event.target.innerText = FULL_HEART
    event.target.classList.add('activated-heart')
  } else if (event.target.innerText === FULL_HEART) {
    event.target.innerText = EMPTY_HEART
    event.target.classList.remove('activated-heart')
  }
}

const dealWithSeverResponse = (response, event) => {
  response.then(() => {
    likeAction(event)
  }).catch(resp => {
    errorMessage.innerText = resp
    errorModal.classList.remove('hidden')
    setTimeout(() => {errorModal.classList.add('hidden')}, 5000)
  })
}







likeEvent()


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
