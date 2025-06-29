// Wait for the form to be submitted
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    // Check that all rating sections have one selected option
    const fieldsToCheck = ["library", "wifi", "hostel", "cafeteria"];
    let valid = true;

    fieldsToCheck.forEach((field) => {
      const selected = document.querySelector(`input[name="${field}"]:checked`);
      if (!selected) {
        alert(`Please rate the ${field}.`);
        valid = false;
        e.preventDefault(); // stop form from submitting
      }
    });

    // Optionally: check department and year are selected
    const department = document.getElementById("department");
    const year = document.getElementById("year");

    if (!department.value) {
      alert("Please select your department.");
      valid = false;
      e.preventDefault();
    }

    if (!year.value) {
      alert("Please select your year of study.");
      valid = false;
      e.preventDefault();
    }

    // You can add more validation as needed
  });
});
