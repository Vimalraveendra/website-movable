const inputEL = document.querySelector('.form-control')
const inputInsideEl = document.getElementById('input-inside')
const searchListEl = document.querySelector('.list')
const dropDownEl = document.querySelector('.card')
const lettersListEl = document.querySelector('.letters')
const patientListEl = document.querySelector('.patient-list')
const splitBarEl = document.querySelector('.split-bar')
const patientContainerEl = document.querySelector('.patient-container')
const cardContainerEl = document.querySelector('.card-container')
const patientCardEl = document.querySelector('.patient-card')


  


const searchData = ["Nazywa", "Identyfikator", "Pesel", "Miasto", "Phone"]

const usersData = [
  {
    "id": 10001,
    "name": "Abraham"
  }, {
    "id": 10002,
    "name": "Adam"
  }, {
    "id": 10003,
    "name": "Antony AdamGonslavas"
  },
  {
    "id": 10004,
    "name": "Bobby"
  },
  {
    "id": 10005,
    "name": "Boss AntonyMarshell"
  },
  {
    "id": 10006,
    "name": "Bencher"
  },
  {
    "id": 10007,
    "name": "Christopher Gonsalves"
  },
  {
    "id": 10008,
    "name": "Calvin"
  },
  {
    "id": 10009,
    "name": "Christy Christopher"
  },
  {
    "id": 10010,
    "name": "Don"
  },
  {
    "id": 10011,
    "name": "Danny ImmanuelBidenSalves"
  },
  {
    "id": 10012,
    "name": "Denver"
  },
  {
    "id": 10013,
    "name": "Eagle"
  },
  {
    "id": 10014,
    "name": "Entity"
  },
  {
    "id": 10015,
    "name": "Elgar"
  },
  {
    "id": 10016,
    "name": "Fedric"
  },
  {
    "id": 10017,
    "name": "Fernandes"
  },
  {
    "id": 10018,
    "name": "Felix"
  }, {
    "id": 10019,
    "name": "Gangster"
  },
  {
    "id": 10020,
    "name": "Gambler"
  },
  {
    "id": 10021,
    "name": "Guardian"
  }, {
    "id": 10022,
    "name": "Harry"
  },
  {
    "id": 10023,
    "name": "Hamilton"
  },
  {
    "id": 10024,
    "name": "Helen"
  },
  {
    "id": 10025,
    "name": "Immanuel"
  }, {
    "id": 10026,
    "name": "Inker"
  },
  {
    "id": 10027,
    "name": "Ivan"
  },
  {
    "id": 10028,
    "name": "Jennifer"
  }, {
    "id": 10029,
    "name": "James"
  },
  {
    "id": 10030,
    "name": "John"
  },
  {
    "id": 10031,
    "name": "Kevin"
  }, {
    "id": 10032,
    "name": "Karl"
  },
  {
    "id": 10033,
    "name": "Kristopher"
  },
  {
    "id": 10034,
    "name": "Lenin"
  },
  {
    "id": 10035,
    "name": "Mann"
  },
  {
    "id": 10036,
    "name": "Naan"
  },
  {
    "id": 10037,
    "name": "Oyster"
  },
  {
    "id": 10038,
    "name": "Peter"
  },
  {
    "id": 10039,
    "name": "Quiz"
  },
  {
    "id": 10040,
    "name": "Roger"
  },
  {
    "id": 10041,
    "name": "Stephen"
  },
  {
    "id": 10042,
    "name": "Titan"
  },
  {
    "id": 10043,
    "name": "Uva"
  },
  {
    "id": 10044,
    "name": "Vogue"
  },
  {
    "id": 10045,
    "name": "Willy"
  },
  {
    "id": 10046,
    "name": "Xenon"
  },
  {
    "id": 10047,
    "name": "Yogi"
  },
  {
    "id": 10048,
    "name": "Zebra"
  }




]

  $(document).ready(function () {
    $('.caret-up').click(function () {
        $('.letters').animate({
            scrollTop: '+=100'
        }, 100);
    });
});
$(document).ready(function () {
  $('.caret-down').click(function () {  
      $('.letters').animate({
          scrollTop: '-=100'
      }, 100);
  });
});

  // const caretDownButtonEl = document.querySelector('.caret-down')
  // caretDownButtonEl.addEventListener('click', scrollDiv)


// filtering the patientList based on the onclick event
function filterPatientList(event) {
  let letter = event.target.textContent;

  //   clearing the parent container before adding
  patientListEl.innerHTML = "";
  usersData.forEach(user => {
    if (user.name.charAt(0).toLowerCase() === letter.toLowerCase() || user.name.toLowerCase() === letter.toLowerCase()) {
      createPatients(user)
      // dropDownEl.style.display="none"
      inputEL.value = "";
    }
  })

}

// creating each letter inside the list
function createLetters(letter) {
  const letterList = document.createElement('li');
  const letterText = document.createTextNode(letter)
  letterList.addEventListener('click', filterPatientList)
  // letterList.addEventListener('mouseleave',renderPatients )
  letterList.appendChild(letterText)
  lettersListEl.appendChild(letterList)

}

// rendering each letters in the userData
function renderLetters() {
  let letters;
  //   clearing the parent container before adding
  lettersListEl.innerHTML = "";
  letters = usersData.map(user => user.name.charAt(0))
  letters = [...new Set(letters)]
  letters.forEach(letter => createLetters(letter))

}

//   invoking renderLetters function when the page loads
renderLetters()

// creating patient card based on the event
function createPatientCard({ name, id }) {
  patientCardEl.innerHTML = `
  <h3> ${name}</h3>
  <p>${id}</p>
  `

}

// rendering patientCard based on the onclick event
function renderPatientCard(event) {
  let name = event.target.textContent
  // clearing the parent container before adding
  patientCardEl.innerHTML = "";
  usersData.forEach(user => {
    if (user.name.toLowerCase() === name.toLowerCase()) {
      createPatientCard(user)
    }
  })
}

function createPatients(patient) {
  const patientList = document.createElement('li');
  const patientText = document.createTextNode(patient.name)
  patientList.appendChild(patientText)
  patientList.addEventListener('click', renderPatientCard)
  // patientList.addEventListener('click', filterPatientList)
  patientListEl.appendChild(patientList)

}

function renderPatients() {
  //   clearing the parent container before adding
  patientListEl.innerHTML = "";
  usersData.forEach(user => createPatients(user))
  let patientListItemEl = document.querySelectorAll('.patient-list li')
  // Loop through the patientListItemEl and add the active class to the current/clicked button
for (var i = 0; i < patientListItemEl.length; i++) {
  patientListItemEl[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
  

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
}

// invoking renderPatients function when the page loads
renderPatients()


//rendering usersList inside the dropDown
function renderUsers() {

  // clearing the parent container before adding
  patientListEl.innerHTML = "";
  usersData.forEach(user => {
    if (user.name.toLowerCase().includes(inputInsideEl.value.toLowerCase())) {
      createPatients(user)
    }
  })

}

function setUserInput() {
  if (inputEL.value === 'Nazywa') {
    renderUsers()
  }

}

function setInputValue(event) {
  inputEL.value = event.target.textContent;

  inputInsideEl.focus();
  searchListEl.classList.toggle('done')
  inputInsideEl.addEventListener('input', setUserInput)

}




//   creating users inside the usersList
function createUsers(user) {

  const userList = document.createElement('li');
  const userText = document.createTextNode(user)
  userList.addEventListener('click', setInputValue)
  inputInsideEl.value = "";
  inputEL.value = "";
  userList.appendChild(userText)
  searchListEl.appendChild(userList)

}



//   // rendering dropDown of usersList based on the searchText
// function renderDropDown(){

//     let searchText = inputEL.value;
//     //  searchText length greater than zero invoke renderUsers 
//     if(searchText.length>0){
//        const users= renderUsers();
//     //    if the users length greater than zero render users list
//        if(users.length>0){
//         dropDownEl.style.display="block"
//        }else{
//         dropDownEl.style.display="none"
//        }
//     }
//     // searchText length is less than one render none
//     else{
//       dropDownEl.style.display="none"
//     }



// }

// function setSearchInput(){
//   console.log()
// }

function renderSearchList() {
  //clearing the parent container before adding
  searchListEl.innerHTML = "";
  searchListEl.classList.toggle('done')
  searchData.forEach(data => createUsers(data))
}

inputEL.addEventListener('click', renderSearchList)
document.querySelector('.navbar').addEventListener('click', renderPatients)
// inputEL.addEventListener('input',renderDropDown)



// page pane using split bar
let isMdn = 0
splitBarEl.addEventListener('mousedown', mouseDown)

function mouseDown() {
  isMdn = 1
  document.body.addEventListener('mousemove', mouseVertical)
  document.body.addEventListener('mouseup', end)
}




function mouseVertical(event) {
  if (isMdn === 1) {
    // patientContainerEl.style.flexBasis = event.clientX+ "px"
    // patientContainerEl.style.width = event.clientX+ "px"
    patientContainerEl.style.flexBasis = `${event.clientX}px`
  } else {
    end()
  }
}


const end = () => {
  isMdn = 0
  document.body.removeEventListener('mouseup', end)
  splitBarEl.removeEventListener('mousemove', mouseVertical)
}


// const buttonScrollDown = document.querySelector('.caret-down  ')
// buttonScrollDown.addEventListener('click',()=>{

//   document.body.scrollBottom = 0;
//   document.documentElement.scrollBottom = 0;
// })

// const buttonScrollUp = document.querySelector('.caret-up  ')
// buttonScrollUp.addEventListener('click',()=>{

//   document.body.scrollBottom = 0;
//   document.documentElement.scrollBottom = 0;
// })

