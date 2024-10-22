const editButton = document.querySelector(".edit");
const submitButton = document.querySelector(".form button");
const form = document.querySelector(".form");
const infoDetails = document.querySelector(".info-details");

const nameElement = document.querySelector(".profile h1");
const roleElement = document.querySelector(".profile h3");
const availabilityElement = infoDetails.querySelectorAll("p")[0];
const ageElement = infoDetails.querySelectorAll("p")[1];
const locationElement = infoDetails.querySelectorAll("p")[2];
const experienceElement = infoDetails.querySelectorAll("p")[3];
const emailElement = infoDetails.querySelectorAll("p")[4];

const formInputs = document.querySelectorAll(".form input");

form.style.display = "none";

window.addEventListener("load", () => {
  const savedData = JSON.parse(localStorage.getItem("profileData"));
  if (savedData) {
    nameElement.textContent = savedData.name;
    roleElement.textContent = savedData.role;
    availabilityElement.textContent = `Availability: ${savedData.availability}`;
    ageElement.textContent = `Usia: ${savedData.age}`;
    locationElement.textContent = `Lokasi: ${savedData.location}`;
    experienceElement.textContent = `Pengalaman: ${savedData.experience}`;
    emailElement.textContent = `Email: ${savedData.email}`;
  }
});

editButton.addEventListener("click", () => {
  form.style.display = "block";

  formInputs[0].value = nameElement.textContent;
  formInputs[1].value = roleElement.textContent;
  formInputs[2].value = availabilityElement.textContent.split(": ")[1];
  formInputs[3].value = ageElement.textContent.split(": ")[1];
  formInputs[4].value = locationElement.textContent.split(": ")[1];
  formInputs[5].value = experienceElement.textContent.split(": ")[1];
  formInputs[6].value = emailElement.textContent.split(": ")[1];
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newName = formInputs[0].value;
  const newRole = formInputs[1].value;
  const newAvailability = formInputs[2].value;
  const newAge = formInputs[3].value;
  const newLocation = formInputs[4].value;
  const newExperience = formInputs[5].value;
  const newEmail = formInputs[6].value;

  nameElement.textContent = newName;
  roleElement.textContent = newRole;
  availabilityElement.textContent = `Availability: ${newAvailability}`;
  ageElement.textContent = `Usia: ${newAge}`;
  locationElement.textContent = `Lokasi: ${newLocation}`;
  experienceElement.textContent = `Pengalaman: ${newExperience}`;
  emailElement.textContent = `Email: ${newEmail}`;

  const profileData = {
    name: newName,
    role: newRole,
    availability: newAvailability,
    age: newAge,
    location: newLocation,
    experience: newExperience,
    email: newEmail,
  };
  localStorage.setItem("profileData", JSON.stringify(profileData));

  form.style.display = "none";
  alert("Form submitted successfully!");
});
