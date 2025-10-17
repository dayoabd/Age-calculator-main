document.getElementById("calcBtn").addEventListener("click", function () {
  const day = parseInt(document.getElementById("date").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  if (!day || !month || !year) {
    alert("Please enter a valid date");
    return;
  }

  const birthDate = new Date(`${year}-${month}-${day}`);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
});
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("date").value = "";
  document.getElementById("month").value = "";  
  document.getElementById("year").value = "";

  document.getElementById("years").textContent = "--";
  document.getElementById("months").textContent = "--";
  document.getElementById("days").textContent = "--";
});
