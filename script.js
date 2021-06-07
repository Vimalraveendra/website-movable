const inputEL =document.querySelector('.form-control')
const searchListEl = document.querySelector('.list')
const dropDownEl = document.querySelector('.card')
const lettersListEl = document.querySelector('.letters')
const patientListEl = document.querySelector('.patient-list')
const splitBarEl = document.querySelector('.split-bar')
const patientContainerEl = document.querySelector('.patient-container')
const cardContainerEl = document.querySelector('.card-container')
const patientCardEl = document.querySelector('.patient-card')

const searchData=["Nazywa","Identyfikator","Pesel","Miasto","Phone"]

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
    },{
      "id":10019,
      "name":"Gangster"
    },
    {
      "id":10020,
      "name":"Gambler"
    },
    {
      "id":10021, 
      "name":"Guardian"
    },{
      "id":10022,
      "name":"Harry"
    },
    {
      "id":10023,
      "name":"Hamilton"
    },
    {
      "id":10024, 
      "name":"Helen"
    },
    {
      "id":10025, 
      "name":"Immanuel"
    },{
      "id":10026,
      "name":"Inker"
    },
    {
      "id":10027,
      "name":"Ivan"
    },
    {
      "id":10028, 
      "name":"Jennifer"
    },{
      "id":10029,
      "name":"James"
    },
    {
      "id":10030,
      "name":"John"
    },
    {
      "id":10031, 
      "name":"Kevin"
    },{
      "id":10032,
      "name":"Karl"
    },
    {
      "id":10033,
      "name":"Kristopher"
    },
    {
      "id":10034, 
      "name":"Lenin"
    }
  
  
  
  
  ]

// filtering the patientList based on the onclick event
function filterPatientList(event){
  let letter = event.target.textContent;

  //   clearing the parent container before adding
  patientListEl.innerHTML="";
  usersData.forEach(user=>{
    if(user.name.charAt(0).toLowerCase()===letter.toLowerCase()||user.name.toLocaleLowerCase()===letter.toLowerCase()){ 
      createPatients(user)
      dropDownEl.style.display="none"
      inputEL.value="";
    } 
  })
  
}

  // creating each letter inside the list
  function createLetters(letter){
      const letterList = document.createElement('li');
      const letterText = document.createTextNode(letter)
      letterList.addEventListener('click',filterPatientList)
      letterList.addEventListener('mouseleave',renderPatients )
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

  // creating patient card based on the event
function createPatientCard({name,id}){
  patientCardEl.innerHTML=`
  <h3> ${name}</h3>
  <p>${id}</p>
  `
  
}

  // rendering patientCard based on the onclick event
  function renderPatientCard(event){
   let name = event.target.textContent
   // clearing the parent container before adding
   patientCardEl.innerHTML="";
   usersData.forEach(user=>{
     if(user.name.toLowerCase()===name.toLowerCase()){
       createPatientCard(user)
     }
   })
  }

  function createPatients(patient){
    const patientList= document.createElement('li');
    const patientText = document.createTextNode(patient.name)
    patientList.addEventListener('click',renderPatientCard)
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


  function setInputValue(event){
    console.log(event.target.textContent)
  }


//   creating users inside the usersList
  function createUsers(user){
    const userList = document.createElement('li');
    const userText = document.createTextNode(user)
    userList.addEventListener('click',setInputValue)
    // userList.addEventListener('click',filterPatientList)
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

function renderSearchList(){
  //clearing the parent container before adding
  searchListEl.innerHTML="";
  searchListEl  .classList.toggle('done')
  searchData.forEach(data=>createUsers(data))
}

inputEL.addEventListener('click',renderSearchList)

inputEL.addEventListener('input',renderDropDown)



// page pane using split bar
let isMdn = 0
splitBarEl.addEventListener('mousedown', mouseDown)

function mouseDown() {  
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


const buttonScrollDown = document.querySelector('.caret-down  ')
buttonScrollDown.addEventListener('click',()=>{
 
  document.body.scrollBottom = 0;
  document.documentElement.scrollBottom = 0;
})

const buttonScrollUp = document.querySelector('.caret-up  ')
buttonScrollUp.addEventListener('click',()=>{
  
  document.body.scrollBottom = 0;
  document.documentElement.scrollBottom = 0;
})