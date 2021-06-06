const inputEL =document.querySelector('.form-control')
const searchListEl = document.querySelector('.list')
const dropDownEl = document.querySelector('.card')
const lettersListEl = document.querySelector('.letters')
const patientListEl = document.querySelector('.patient-list')
const splitBarEl = document.querySelector('.split-bar')
const patientContainerEl = document.querySelector('.patient-container')
const cardContainerEl = document.querySelector('.card-container')
const patientCardEl = document.querySelector('.patient-card')

const usersData=[
    {
      "id":10001,
      "name":"Abraham"
    },{
      "id":10002,
      "name":"Adam"
    },{
      "id":10003,
      "name":"Antony"
    },
    {
      "id":10004,
      "name":"Bobby"
    },
    {
      "id":10005,
      "name":"Boss"
    },
    {
      "id":10006,
      "name":"Bencher"
    },
    {
      "id":10007,
      "name":"Christopher"
    },
    {
      "id":10008,
      "name":"Calvin"
    },
    {
      "id":10009,
      "name":"Christy"
    },
    {
      "id":10010,
      "name":"Don"
    },
    {
      "id":10011,
      "name":"Danny"
    },
    {
      "id":10012,
      "name":"Denver"
    },
    {
      "id":10013,
      "name":"Eagle"
    },
    {
      "id":10014,
      "name":"Entity"
    },
    {
      "id":10015,
      "name":"Elgar"
    },
    {
      "id":10016,
      "name":"Fedric"
    },
    {
      "id":10017,
      "name":"Fernandes"
    },
    {
      "id":10018, 
      "name":"Felix"
    }
  
  
  ]



  // creating each letter inside the list
  function createLetters(letter){
      const letterList = document.createElement('li');
      const letterText = document.createTextNode(letter)
      letterList.appendChild(letterText)
      lettersListEl.appendChild(letterList)
      
  }

  // rendering each letters in the userData
  function renderLetters(){
   let letters;
    //   clearing the parent container before adding
    lettersListEl.innerHTML="";
   letters = usersData.map(user=>user.name.charAt(0))
   letters = [...new Set(letters)]
   letters.forEach(letter=>createLetters(letter))

  }

//   invoking renderLetters function when the page loads
  renderLetters()

  function createPatients(patient){
    const patientList= document.createElement('li');
    const patientText = document.createTextNode(patient.name)
    patientList.appendChild(patientText)
    patientListEl.appendChild(patientList)

  }

  function renderPatients(){
//   clearing the parent container before adding
   patientListEl.innerHTML="";
   usersData.forEach(user=>createPatients(user))
  }

// invoking renderPatients function when the page loads
  renderPatients()


//   creating users inside the usersList
  function createUsers(user){

    const userList = document.createElement('li');
    const userText = document.createTextNode(user.name)
    userList.appendChild(userText)
    searchListEl.appendChild(userList)

  }

  //rendering usersList inside the dropDown
  function renderUsers(){
      const users=[]
       // clearing the parent container before adding
    searchListEl.innerHTML="";
    usersData.forEach(user=>{
        if(user.name.toLowerCase().includes(inputEL.value.toLowerCase())){
            createUsers(user)
            users.push(user)
        }
    })
   return users
  }

  // rendering dropDown of usersList based on the searchText
function renderDropDown(){
 
    let searchText = inputEL.value;
    //  searchText length greater than zero invoke renderUsers 
    if(searchText.length>0){
       const users= renderUsers();
    //    if the users length greater than zero render users list
       if(users.length>0){
        dropDownEl.style.display="block"
       }else{
        dropDownEl.style.display="none"
       }
    }
    // searchText length is less than one render none
    else{
      dropDownEl.style.display="none"
    }

   
    
}

inputEL.addEventListener('input',renderDropDown)



// page pane using split bar
let isMdn = 0
splitBarEl.addEventListener('mousedown', mouseDown)

function mouseDown(event) {  
    isMdn  = 1
  document.body.addEventListener('mousemove', mouseVertical)
  document.body.addEventListener('mouseup', end)
}




function mouseVertical(event) {
  if (isMdn  === 1) {
        // patientContainerEl.style.flexBasis = event.clientX+ "px"
            // patientContainerEl.style.width = event.clientX+ "px"
        patientContainerEl.style.flexBasis=`${event.clientX}px`
  } else {
    end()
  }
}


const end = () => {
  isMdn = 0
  document.body.removeEventListener('mouseup', end)
  splitBarEl.removeEventListener('mousemove', mouseVertical)
}