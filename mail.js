const firebaseConfig = {
  apiKey: "AIzaSyDJXNghpUkccTucE71yKSEB-sELFdchuyA",
    authDomain: "blood-bank69.firebaseapp.com",
    databaseURL: "https://blood-bank69-default-rtdb.firebaseio.com",
    projectId: "blood-bank69",
    storageBucket: "blood-bank69.firebasestorage.app",
    messagingSenderId: "1060754403271",
    appId: "1:1060754403271:web:0f6ec06bc7eedf1b55b3e2"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("Blood Bank");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var age = getElementVal("age");
  var consent = getElementVal("consent");
  var lastdonation = getElementVal("lastdonation");
  var health = getElementVal("health");
  var address = getElementVal("address");
  var bloodgroup = getElementVal("bloodgroup");
  var gender = getElementVal("gender");

  console.log(name, age, consent, lastdonation, health, address, bloodgroup, gender);
  saveMessages(name, age, consent, lastdonation, health, address, bloodgroup, gender);
}

const saveMessages = (name, age, consent, lastdonation, health, address, bloodgroup, gender) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    age: age,
    consent: consent,
    lastdonation: lastdonation,
    health: health,
    address: address,
    bloodgroup: bloodgroup,
    gender: gender
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
