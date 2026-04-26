let memoireDejaSoumis = false; // simulation

document.getElementById("memoireForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevents page refresh

  const messageBox = document.getElementById("message");

  if (memoireDejaSoumis) {
    messageBox.textContent = "❗ Vous avez déjà soumis un mémoire.";
    messageBox.style.color = "red";
  } else {
    messageBox.textContent = "✅ Mémoire soumis avec succès.";
    messageBox.style.color = "green";
    memoireDejaSoumis = true;
  }
 
});