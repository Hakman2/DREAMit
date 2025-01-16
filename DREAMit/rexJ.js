function loadSection(section) {
  document.getElementById("Dashboard-section").classList.add("hidden");
  document.getElementById("active-section").classList.add("hidden");
  document.getElementById("FQA-section").classList.add("hidden");

  if (section === "dash") {
    document.getElementById("Dashboard-section").classList.remove("hidden");
  } else if (section === "active") {
    document.getElementById("active-section").classList.remove("hidden");
  } else if (section === "ask") {
    document.getElementById("FQA-section").classList.remove("hidden");
  }
}
