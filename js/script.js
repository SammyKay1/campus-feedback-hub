document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page refresh

    const data = {
      name: document.getElementById("name").value,
      department: document.getElementById("department").value,
      year: document.getElementById("year").value,
      library: document.querySelector('input[name="library"]:checked')?.value,
      wifi: document.querySelector('input[name="wifi"]:checked')?.value,
      hostel: document.querySelector('input[name="hostel"]:checked')?.value,
      cafeteria: document.querySelector('input[name="cafeteria"]:checked')?.value,
      comments: document.getElementById("comments").value,
    };

    fetch("https://script.google.com/macros/s/AKfycbwexvIVmtqjpNCMiCIe_bvmi8Dgzk7b56NSm6UfDcZCw9vBFQZEYyyWeYco8BgZb1bU/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(res => {
      if (res.result === "success") {
        window.location.href = "thankyou.html";
      } else {
        alert("There was an error submitting the form.");
      }
    })
    .catch(err => {
      console.error("Error!", err);
      alert("Failed to submit. Please try again later.");
    });
  });
});
