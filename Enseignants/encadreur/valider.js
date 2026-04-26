// Simulation des données récupérées depuis une base de données
const binomes = [
    {
      id: 1,
      nom: "Binôme A",
      titre: "Système de gestion des soutenances",
      lien: "uploads/memoireA.pdf"
    },
    {
      id: 2,
      nom: "Binôme B",
      titre: "Application Web de suivi de projet",
      lien: "uploads/memoireB.pdf"
    }
  ];
  
  // Remplir la liste déroulante des binômes
  const selectBinome = document.getElementById("selectBinome");
  const memoireInfos = document.getElementById("memoireInfos");
  const titreMemoire = document.getElementById("titreMemoire");
  const lienMemoire = document.getElementById("lienMemoire");
  
  binomes.forEach(b => {
    const option = document.createElement("option");
    option.value = b.id;
    option.textContent = b.nom;
    selectBinome.appendChild(option);
  });
  
  // Quand l'encadrant choisit un binôme
  selectBinome.addEventListener("change", function () {
    const binomeChoisi = binomes.find(b => b.id == this.value);
    
    if (binomeChoisi) {
      memoireInfos.classList.remove("hidden");
      titreMemoire.textContent = binomeChoisi.titre;
      lienMemoire.href = binomeChoisi.lien;
    }
  });
  
  // Gestion des boutons
  const refuserBtn = document.getElementById("refuserBtn");
  const validerBtn = document.getElementById("validerBtn");
  const messageRefus = document.getElementById("messageRefus");
  const envoyerMessage = document.getElementById("envoyerMessage");
  
  refuserBtn.addEventListener("click", () => {
    messageRefus.classList.remove("hidden");
    envoyerMessage.classList.remove("hidden");
  });
  
  validerBtn.addEventListener("click", () => {
    alert("✅ Mémoire validé !");
    messageRefus.classList.add("hidden");
    envoyerMessage.classList.add("hidden");
  });
  
  envoyerMessage.addEventListener("click", () => {
    const message = messageRefus.value.trim();
    if (message) {
      alert("✉️ Message envoyé aux étudiants : " + message);
      messageRefus.value = "";
      messageRefus.classList.add("hidden");
      envoyerMessage.classList.add("hidden");
    } else {
      alert("⚠️ Veuillez écrire un message.");
    }
  });
  