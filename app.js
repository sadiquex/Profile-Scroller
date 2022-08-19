// creating our data, imitating an api data
const data = [
  {
    name: "Michael Teye",
    age: 32,
    gender: "Male",
    lookingfor: "Female",
    location: "Accra GH",
    image: "https://avatars.githubusercontent.com/u/69043637?v=4",
  },
  {
    name: "Joseph Daniels",
    age: 26,
    gender: "Male",
    lookingfor: "Female",
    location: "Lome TG",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Mary Jean",
    age: 32,
    gender: "Female",
    lookingfor: "Male",
    location: "Abu Dhabi UAE",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Doris Ann",
    age: 21,
    gender: "Female",
    lookingfor: "Male",
    location: "Accra GH",
    image: "https://avatars.githubusercontent.com/u/76905127?v=4",
  },
  {
    name: "Aziz Sumaila",
    age: 29,
    gender: "Male",
    lookingfor: "Female",
    location: "Abuja NG",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
  },
];

const profiles = profileIterator(data);

// initially load first profile
nextProfile();

// next event on button click
document.getElementById("next").addEventListener("click", nextProfile);

// next profile dissplay
function nextProfile() {
  // use .next() iterator to get next profile
  const currentProfile = profiles.next().value;

  //   if there are still profiles, load them, else reload page
  if (currentProfile !== undefined) {
    //   display elements in respective sections of DOM
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
        <li class="list-group-item"> Name: ${currentProfile.name} </li>
        <li class="list-group-item"> Age: ${currentProfile.age} </li>
        <li class="list-group-item"> Location: ${currentProfile.location} </li>
        <li class="list-group-item"> Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>

    </ul>
    `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload(); //reload page
  }
}
// function to iterate over profiles
function profileIterator(profiles) {
  // initialize counter to 0
  let nextIndex = 0;

  return {
    // if the iterator is not done, return the values and done:false, else return done:true
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false } //return profile info and done:false if index < profile length
        : { done: true }; //else return done:true
    },
  };
}
