function toggleCard() {
  const card = document.getElementById("myCard");
  const button = document.querySelector(".btn");

  if (card.style.display === "none" || card.style.display === "") {
      card.style.display = "block";
      button.textContent = "Hide Card";
  } else {
      card.style.display = "none";
      button.textContent = "Show Card";
  }
}
