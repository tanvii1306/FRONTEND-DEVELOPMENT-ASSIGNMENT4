function showPage(page) {
  const content = document.getElementById("content");

  if (page === "home") {
    content.innerHTML = `
      <h1>Welcome to Dashboard</h1>
      <p>This is your home page.</p>
    `;
  }

  else if (page === "profile") {
    content.innerHTML = `
      <h1>My Profile</h1>
      <p><strong>Name:</strong> TANVI HIDDALA</p>
      <p><strong>Course:</strong> BCA ( AI & DS)</p>
    `;
  }

  else if (page === "marks") {
    content.innerHTML = `
      <h1>My Marks</h1>
      <ul>
        <li>Maths: 85</li>
        <li>Programming: 90</li>
        <li>Web Development: 88</li>
      </ul>
    `;
  }
}

window.onload = function () {
  showPage('home');
};