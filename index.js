const firebaseConfig = {
  apiKey: "AIzaSyA7NLoyboi4Jpmz3iRjXaG9nrkMQgW_OH0",
  authDomain: "leaf-developers.firebaseapp.com",
  databaseURL: "https://leaf-developers-default-rtdb.firebaseio.com",
  projectId: "leaf-developers",
  storageBucket: "leaf-developers.appspot.com",
  messagingSenderId: "264526901445",
  appId: "1:264526901445:web:eb55ab15b483f2181d00ac",
  measurementId: "G-3XMD2L690W"
};
firebase.initializeApp(firebaseConfig);
let leads = firebase.database().ref('leads');


function boxOne() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  if (name == "" || email == "") {
    window.alert("Please enter your Details.");
  }
  else {
    var newLead = leads.push();
    newLead.set({
      name: name, email: email
    })

    //Alert box
    document.querySelector('.alertOne').style.display = 'block';
    //remove the alert after 3 seconds
    setTimeout(() => {
      document.querySelector('.alertOne').style.display = 'none';

    }, 3000)

    //reset form
    document.getElementById('firstForm').reset();


  }

}
function boxTwo() {
  let name = document.getElementById("nameOne").value;
  let email = document.getElementById("emailOne").value;
  if (name == "" || email == "") {
    window.alert("Please enter your Details.");
  }
  else {
    var newLead = leads.push();
    newLead.set({
      name: name, email: email
    })

    document.querySelector('.alertTwo').style.display = 'block';

    //remove the alert after 3 seconds
    setTimeout(() => {
      document.querySelector('.alertTwo').style.display = 'none';

    }, 3000)

    //reset form
    document.getElementById('secondForm').reset();




  }

}

