let currentLanguage = "it";
let currentSection = "about";

// Full content including navigation + project texts
const content = {
  it: {
    nav: {
      about: "Descrizione Personale",
      projects: "Progetti",
      skills: "Competenze",
      contact: "Contatti"
    },
    projectButtons: {
        taaos: "TAAOS",
        echoes: "Echoes of 2030"
    },
    about: {
        id: "about-section",
        title: "Descrizione Personale",
        text: `<p id="about-section">Sono uno studente motivato dell’ITI F. Severi di Padova con una passione per la programmazione, lo sviluppo web e la tecnologia. Mi piace lavorare a progetti personali che mi spingono a imparare nuovi strumenti e a migliorare le mie competenze di programmazione. Sono particolarmente interessato allo sviluppo software, alle API e all’automazione, e sono desideroso di acquisire esperienza in ambienti di programmazione reali.</p><p>
              <h2>La mia Educazione</h2>L’Istituto Tecnico Industriale “Francesco Severi” è una scuola superiore statale italiana la cui visione si fonda sugli obiettivi di Lisbona e sul Quadro Europeo delle Qualifiche per l’apprendimento, con l’obiettivo di promuovere l’apprendimento tramite competenze certificate e di favorire l’integrazione consapevole e responsabile degli studenti nel mercato del lavoro o nell’istruzione post-secondaria. Ho scelto di scegliere questa carriera e andare in questa scuola per la mia grande passione all'informatica e alla programmazione.
              </p>

              <h3>Gli obiettivi principali includono:</h3>
              <ul>
                <li>integrazione tra conoscenze teoriche e tecniche;</li>
                <li>costante connessione con il tessuto lavorativo locale;</li>
                <li>ricerca e innovazione;</li>
                <li>rafforzamento dell’identità specifica della scuola come risposta alla crescente domanda del settore tecnologico;</li>
                <li>mantenimento della reputazione scolastica.</li>
              </ul>

              <p>
                <h3>Dal 2012-2013, gli studenti (14-19 anni) possono scegliere tra tre indirizzi:</h3>
              </p>
              <ul>
                <li>Informatica e Telecomunicazioni</li>
                <li>Elettronica ed Elettrotecnica</li>
                <li>Meccanica, Meccatronica ed Energia</li>
              </ul>

              <p>
                <strong>Sito Internet:</strong> <a href="https://www.itiseveripadova.edu.it/" target="_blank">https://www.itiseveripadova.edu.it/</a>
              </p>
              `,
        video: "https://www.youtube.com/embed/tOHW6nHvFFE"
    },
    projects: {
      title: "Progetti",
      text: "Qui troverai una selezione di progetti che ho realizzato, tra cui siti web, applicazioni e script vari."
    },
    skills: {
      title: "Competenze",
      text: `
        <div id="skill-section">
          <p>
            Possiedo conoscenze in HTML, CSS, JavaScript e Python, oltre a una buona comprensione di API e sviluppo backend.<br><br>
          </p>
          <ul>
            <li><strong>HTML & CSS:</strong><br>Creazione di siti web responsive e ben strutturati, ho guadagnato questa esperienza lavorando in progetti a scuola e in progetti personali.<br><br></li>
            <li><strong>JavaScript:</strong><br>Sviluppo di interazioni dinamiche e integrazione con API, ho guadagnato esperienze in java attraverso progetti personali e scolastici.<br><br></li>
            <li><strong>Python:</strong><br>Automazione di compiti, analisi dati e sviluppo backend, ho guadagnato esperienza in python grazie a progetti scolastici e privati come TAAOS che potete vedere nella pagina dei progetti.<br><br></li>
          </ul>
          <h2>Competenze comunicative e interpersonali</h2>
          <ul>
            <li><strong>Lavoro di squadra:</strong><br> So collaborare efficacemente con altre persone in gruppi e progetti.<br><br></li>
            <li><strong>Comunicazione e spiegazione:</strong><br>Sono bravo a spiegare, dare feedback e comunicare in modo chiaro.<br><br></li>
          </ul>
          <h2>Problem Solving e attenzione ai dettagli</h2>
          <ul>
            <li><strong>Problem Solving:</strong><br>Ottime capacità di risoluzione dei problemi, acquisite attraverso la scuola e progetti di programmazione personali.<br><br></li>
            <li><strong>Attenzione ai dettagli:</strong><br>Tengo molto alla precisione e cerco di rendere il mio lavoro il più perfetto possibile per superare gli standard aziendali.<br><br></li>
          </ul>
          <h2>Competenze digitali</h2>
          <ul>
            <li><strong>Gsuite:</strong><br>Uso regolarmente la Gsuite (Documenti, Fogli, Calendario, Moduli) e ne possiedo una buona conoscenza.<br><br></li>
            <li><strong>Microsoft Office:</strong><br>Buona conoscenza del pacchetto Microsoft Office (Word, Excel, PowerPoint), acquisita tramite uso personale e scolastico.<br><br></li>
          </ul>
        </div>
      `
    },
    contact: {
      id: "contacts",
      title: "Contatti",
      text: `<div id="contact-section">
              <ul class="contact-list">
                <li><strong>📞 Phone:</strong> <a href="tel:+3483059292">+39 348 305 9292</a></li>
                <li><strong>📧 Email:</strong> <a href="zabeotommaso@gmail.com">zabeotommaso@gmail.com</a></li>
                <li><strong>💬 WhatsApp:</strong> <a href="https://wa.me/3483059292" target="_blank">Chatta con me su WhatsApp</a></li>
                <li><strong>📄 Curriculum Vitae (CV):</strong> 
                  <a href="ItalianCVFinal.pdf" target="_blank">View CV (PDF)</a>
                </li>
              </ul>
            </div>`,
    },
    projectDetails: {
      taaos: {
        title: "<br><h1>TAAOS</h1>",
        text: `<br>TAAOS è un bot di Discord la cui funzione è assistere me e i membri della mia comunità nelle attività quotidiane.<br>TAAOS è in grado di modificare e cambiare gli attributi della piattaforma Taiga tramite la sua API. Taiga è un sito simile a Trello, utilizzato per la gestione di progetti e membri attraverso bacheche e kanban.<br>Questo progetto è sviluppato interamente da me e ci lavoro quotidianamente, espandendolo con nuove funzioni, correzioni e miglioramenti di efficienza alle vecchie funzionalità. Questo progetto mi ha insegnato molto sull’uso avanzato di Python, oltre che su come funzionano le API e su come leggere e comprendere la loro documentazione. Se vuoi ulteriori informazioni sul bot, ecco un video dimostrativo di uno dei comandi: <a href="https://youtu.be/OM4D0k_47Cc">Link</a>, e qui il link alla pagina GitHub del mio bot: <a href="https://github.com/tommy07475/TAAOS-Bot">Link</a>`
      },
      echoes: {
        title: "<br><h1>Echoes of 2030</h1>",
        text: `<br>Echoes of 2030 è un gioco basato sull’Agenda 2030. In questo gioco interpreti un adolescente intorno all’anno 2029 che, svolgendo attività di volontariato, scopre quanto il mondo reale sia diverso rispetto a ciò che viene descritto nell’Agenda 2030. Questo progetto è stato realizzato per una competizione scolastica a squadre chiamata Informatica x Gioco, organizzata da un’università. Io ero il capo del gruppo e ho dovuto imparare a usare un motore di gioco come Unity, che abbiamo utilizzato per lo sviluppo, e il linguaggio di programmazione C#. Questo progetto ha migliorato le mie competenze da sviluppatore di videogiochi, oltre che le mie capacità di leadership e comunicazione, poiché spesso organizzavo riunioni per discutere idee e pianificare il gioco. Alla fine il gioco è venuto piuttosto bene: volevamo fare di più, ma purtroppo il tempo a disposizione non è stato sufficiente. È comunque stata un’esperienza molto positiva e un progetto davvero soddisfacente.<br>Per ulteriori informazioni puoi leggere questo documento informativo: <a href="https://docs.google.com/document/d/1CfmFu_peC8bvSNqSd7vnCQjssYMXDebBAA_wiCmnDzs/edit?usp=sharing">Link</a>`
      },
      placeholder: {
        title: "Progetto Selezionato",
        text: "Seleziona un progetto per vedere i dettagli."
      }
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    projectButtons: {
        taaos: "TAAOS",
        echoes: "Echoes of 2030"
    },
    about: {
        id: "about-section",
        title: "About Me",
        text: `<p id="about-section">I’m a motivated high school student at ITI F. Severi in Padua with a passion for programming, web development, and technology. I enjoy working on personal projects that challenge me to learn new tools and improve my coding skills. I’m particularly interested in software development, APIs, and automation and I’m eager to gain experience in real-world development environments.</p><h2>My education</h2><p>
  The Technical Industrial Institute “Francesco Severi” of Padua is an Italian state high school whose strategic vision is firmly hinged upon the Lisbon objectives and the European Qualification Framework for life-long learning, with the goal of fostering learning through certified competences and promoting students’ responsible and aware integration in the labour market or in post-secondary education. I decided to pursue this career and attend this High School as I'm passionate about Informatics and Programming.
</p>

<h3>Main objectives include:</h3>
<ul>
  <li>a sound integration between theoretical and technical knowledge;</li>
  <li>a constant integration within the local working network;</li>
  <li>research and innovation;</li>
  <li>strengthening of the school’s specific identity as a response to the increasing demand of the technological sector;</li>
  <li>maintaining our good reputation capital.</li>
</ul>

<p>
  For students, these objectives translate into opportunities for a conscious practice of active citizenship and mobility within the EU.
</p>

<p>
  Since 2012-13, students (aged 14–19) can choose among three different courses and curricula:
</p>
<ul>
  <li>Information Technology and Telecommunication</li>
  <li>Electronics and Electrotechnics</li>
  <li>Mechanics, Mechatronics and Energy</li>
</ul>

<p>
  <strong>Website:</strong> <a href="https://www.itiseveripadova.edu.it/" target="_blank">https://www.itiseveripadova.edu.it/</a>
</p>
`,
        video: "https://www.youtube.com/embed/7cjLqWHw6PY"
    },
    projects: {
      title: "Projects",
      text: "Here you’ll find a selection of my work, including websites, apps, and various scripts."
    },
    skills: {
      title: "Skills",
      text: `
        <div id="skill-section">
        <p>
          I have knowledge in HTML, CSS, JavaScript, and Python, as well as a good understanding of APIs and backend development.<br><br>
        </p>
        <ul>
          <li><strong>HTML & CSS:</strong><br>Creation of responsive and well-structured websites. I gained this experience by working on both school and personal projects.<br><br></li>
          <li><strong>JavaScript:</strong><br>Development of dynamic interactions and API integration. I gained experience in JavaScript through personal and school projects.<br><br></li>
          <li><strong>Python:</strong><br>Task automation, data analysis, and backend development. I gained experience in Python thanks to school and personal projects such as TAAOS, which you can see in the projects page.<br><br></li>
        </ul>

        <h2>Communication and Interpersonal Skills</h2>
        <ul>
          <li><strong>Teamwork:</strong><br>I can collaborate effectively with other people in groups and projects.<br><br></li>
          <li><strong>Communication and Explanation:</strong><br>I’m good at explaining, giving feedback, and communicating clearly.<br><br></li>
        </ul>

        <h2>Problem Solving and Attention to Detail</h2>
        <ul>
          <li><strong>Problem Solving:</strong><br>Excellent problem-solving skills, developed through school and personal programming projects.<br><br></li>
          <li><strong>Attention to Detail:</strong><br>I care deeply about precision and strive to make my work as perfect as possible to exceed company standards.<br><br></li>
        </ul>

        <h2>Digital Skills</h2>
        <ul>
          <li><strong>Gsuite:</strong><br>I regularly use Gsuite (Docs, Sheets, Calendar, Forms) and have good proficiency with it.<br><br></li>
          <li><strong>Microsoft Office:</strong><br>Good knowledge of the Microsoft Office suite (Word, Excel, PowerPoint), gained through personal and school use.<br><br></li>
        </ul>
      </div>
        `
    },
    contact: {
      id: "contacts",
      title: "Contacts",
      text: `<div id="contact-section">
              <ul class="contact-list">
                <li><strong>📞 Phone:</strong> <a href="tel:+3483059292">+39 348 305 9292</a></li>
                <li><strong>📧 Email:</strong> <a href="zabeotommaso@gmail.com">zabeotommaso@gmail.com</a></li>
                <li><strong>💬 WhatsApp:</strong> <a href="https://wa.me/3483059292" target="_blank">Chat on WhatsApp</a></li>
                <li><strong>📄 Curriculum Vitae (CV):</strong> 
                  <a href="EnglishCVFinal.pdf" target="_blank">View CV (PDF)</a>
                </li>
              </ul>
            </div>`,

    },
    projectDetails: {
      taaos: {
        title: "<br><h1>TAAOS</h1>",
        text: `<br>TAAOS is a dicord bot whose functionality is to assist myself and the member of my community in day to day tasks.<br>TAAOS is able to modify and change the attributes of the Taiga platform through it's API, Taiga is a website similiar to Trello, used for projects and members management through boards and kanbans.<br>This project is developed only by me and I currently work on it every day, expanding it with new functions, fixes and efficiency modification to old functions. This project taught me a lot about more advanced uses of Python as well as how APIs work and how to read and understand their documentation. If you want further info about the bot here is an example video of one of the commands: <a href="https://youtu.be/OM4D0k_47Cc">Link</a>, and here the link to the GitHub page of my bot: <a href="https://github.com/tommy07475/TAAOS-Bot">Link</a>`
      },
      echoes: {
        title: "<br><h1>Echoes of 2030</h1>",
        text: `<br>Echoes of 2030 is a game about the agenda 2030, in this game you play as a teenager around the year 2029 that while doing some volounteering work discsovers how bad the world actually looks in comparison to the agenda 2030. This was a team school competition called Informatica x Gioco hosted by a University, I was the lead of my group and had to learn how to use a game engine like Unity which we used for the game and the programming language C#, this project improved my game developer skills alongside leadership and communication skills as I often hosted meetings to come up with ideas and plans for the game. In the end the game turned up pretty well, we wanted to do more than what we did but sadly the time we had wasn't enough, it was still a very nice experience and satisfying project.<br>For more information you can read this informational document: <a href="https://docs.google.com/document/d/1CfmFu_peC8bvSNqSd7vnCQjssYMXDebBAA_wiCmnDzs/edit?usp=sharing">Link</a>`
      },
      placeholder: {
        title: "Selected Project",
        text: "Select a project to view details."
      }
    }
  }
};

function setProjectWindowColor(colorName) {
  const projectWindow = document.getElementById("project-window");
  if (!projectWindow) return;

  // Remove previous color classes (if any)
  projectWindow.classList.remove(
    "project-window-taaos",
    "project-window-echoes",
    "project-window-idle"
  );

  // Force a reflow so browser detects the next style change as a new transition
  void projectWindow.offsetWidth;

  // Add the new class
  switch (colorName) {
    case "taaos":
      projectWindow.classList.add("project-window-taaos");
      break;
    case "echoes":
      projectWindow.classList.add("project-window-echoes");
      break;
    case "idle":
      projectWindow.classList.add("project-window-idle");
      break;
    default:
      console.warn(`Unknown color name: ${colorName}`);
  }
}

setProjectWindowColor("idle");
// Detect if we’re on main page or projects page
const isProjectsPage = window.location.pathname.includes("projects.html");

// Update navigation labels
function updateNavLabels() {
  const nav = content[currentLanguage].nav;
  const ids = ["about", "projects", "skills", "contact"];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = nav[id];
  });
}

// Load section (for index.html)
function loadSection(section) {
  currentSection = section;
  const lang = currentLanguage;
  const sectionData = content[lang][section];
  const main = document.getElementById("content");
  if (!main) return;
  if (section != "about"){
      main.innerHTML = `
      <h2>${sectionData.title}</h2>
      <p>${sectionData.text}</p>
    `;
  } else {
    main.innerHTML = `<h2>${sectionData.title}</h2><p id="about-section"></p>`
  }

  if (section == "about"){
    const aboutData = content[currentLanguage].about;
      const aboutSection = document.querySelector("#about-section, section#about-section");

      if (aboutSection && aboutData) {
        aboutSection.id = aboutData.id || "about-section";
        aboutSection.innerHTML = `
          <iframe
            src="${aboutData.video}"
            title="${aboutData.title}"
            allowfullscreen>
          </iframe>
          <div class="about-text">
            <p>${aboutData.text}</p>
          </div>
        `;
      }
  }

  document.querySelectorAll(".nav-buttons button").forEach(btn => {
    btn.classList.toggle("active", btn.id === section);
  });
}

let currentProject = null; // currently active project (id) or null

// Helper: render project content instantly (no animation)
// options.animate: if true and project is 'taaos' will play animation via loadProject flow instead
function renderProjectContent(projectId, options = { animate: false }) {
  const textEl = document.getElementById("project-text");
  const imgEl = document.getElementById("project-image");
  const data =
    content[currentLanguage].projectDetails[projectId] ||
    content[currentLanguage].projectDetails.placeholder;

  // If no project-window (we're not on projects page), do nothing
  if (!document.getElementById("project-window")) return;

  // If animate requested for TAAOS and not currently active, use loadProject instead
  if (options.animate && projectId === "taaos" && currentProject !== projectId) {
    loadProject(projectId);
    return;
  }

  // For an instant render (used when switching language), set image to final state if taaos
  if (projectId === "taaos") {
    imgEl.src = "TAAOS.png";
    // imgEl.classList.remove("hidden");
    // imgEl.style.transition = "none";
    // imgEl.classList.remove("fullscreen");
    imgEl.classList.add("shrunk");
    // force reflow then restore transitions
    // void imgEl.offsetWidth;
    // imgEl.style.transition = "top 1.2s ease-in-out, left 1.2s ease-in-out, width 1.2s ease-in-out, height 1.2s ease-in-out, opacity 0.6s ease-in-out";
  } else if (projectId == "echoes"){ 
    imgEl.src = "Echoes.png";
    imgEl.classList.add("shrunk");
  } else {
    // other projects: hide image (instant)
    imgEl.classList.add("hidden");
    imgEl.src = "";
  }

  // Update the textual content
  textEl.classList.remove("fade-in", "fade-out");
  textEl.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.text}</p>
  `;
  // ensure visible
  textEl.classList.add("fade-in");

  // Update currentProject marker (we're "showing" this project)
  currentProject = projectId;
}

// Full animation flow for selecting a project (keeps previous behavior)
function loadProject(projectId) {
  // If user clicks same project and we already are there, do nothing
  if (currentProject === projectId) return;

  // Update active button styling
  document.querySelectorAll(".project-buttons button").forEach(btn => {
    btn.classList.toggle("active", btn.id === projectId);
  });

  const textEl = document.getElementById("project-text");
  const imgEl = document.getElementById("project-image");
  const data =
    content[currentLanguage].projectDetails[projectId] ||
    content[currentLanguage].projectDetails.placeholder;

  // Clear text before animation
  textEl.classList.remove("fade-in");
  textEl.classList.add("fade-out");
  textEl.innerHTML = "";

  if (projectId === "taaos") {
  imgEl.src = "TAAOS.png";
  imgEl.classList.remove("hidden", "shrunk");
  textEl.classList.remove("fade-in");
  textEl.innerHTML = "";
  setProjectWindowColor("taaos");

  currentProject = projectId;

  // Step 1: Fade in fullscreen (already scaled correctly)
  imgEl.classList.add("fullscreen");

  // Step 2: Wait 0.5s, then shrink & move
  setTimeout(() => {
    imgEl.classList.add("shrunk");
  }, 500);

  // Step 3: Show text after movement completes
  setTimeout(() => {
    const data = content[currentLanguage].projectDetails.taaos;
    textEl.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.text}</p>
    `;
    textEl.classList.add("fade-in");
  }, 1700);
  } else if (projectId == "echoes"){
    imgEl.src = "Echoes.png";
    imgEl.classList.remove("hidden", "shrunk");
    textEl.classList.remove("fade-in");
    textEl.innerHTML = "";
    setProjectWindowColor("echoes");

    currentProject = projectId;

    // Step 1: Fade in fullscreen (already scaled correctly)
    imgEl.classList.add("fullscreen");

    // Step 2: Wait 0.5s, then shrink & move
    setTimeout(() => {
      imgEl.classList.add("shrunk");
    }, 500);

    // Step 3: Show text after movement completes
    setTimeout(() => {
      const data = content[currentLanguage].projectDetails.echoes;
      textEl.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.text}</p>
      `;
      textEl.classList.add("fade-in");
    }, 1700);
  } else {
    // Non-animated project: hide image immediately and show text
    if(projectId == "echoes"){
      setProjectWindowColor("echoes");
    } else {
      setProjectWindowColor("idle");
    }
    imgEl.classList.add("hidden");
    imgEl.src = "";
    textEl.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.text}</p>
    `;
    textEl.classList.remove("fade-out");
    textEl.classList.add("fade-in");
    currentProject = projectId;
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "it" ? "en" : "it";

  // Update language button text
  const langButton = document.getElementById("language");
  if (langButton) langButton.textContent = currentLanguage === "it" ? "Lingua: Italiano 🇮🇹" : "Language: English 🇬🇧";

  // Update nav buttons (if present)
  const nav = content[currentLanguage].nav;
  if (document.getElementById("about")) document.getElementById("about").textContent = nav.about;
  if (document.getElementById("projects")) document.getElementById("projects").textContent = nav.projects;
  if (document.getElementById("skills")) document.getElementById("skills").textContent = nav.skills;
  if (document.getElementById("contact")) document.getElementById("contact").textContent = nav.contact;

  // Update project buttons labels (if on projects page)
  if (document.getElementById("taaos")) {
    const proj = content[currentLanguage].projectButtons;
    document.getElementById("taaos").textContent = proj.taaos;
    document.getElementById("echoes").textContent = proj.echoes;
  }

  // Refresh visible content:
  if (document.getElementById("project-window")) {
    if (currentProject) {
      renderProjectContent(currentProject, { animate: false });
    } else {
      const textEl = document.getElementById("project-text");
      const placeholder = content[currentLanguage].projectDetails.placeholder;
      textEl.innerHTML = `<h2>${placeholder.title}</h2><p>${placeholder.text}</p>`;
    }
  } else {
    // Not on projects page — refresh the current index section
    loadSection(currentSection);

    // --- Handle About section update (after loadSection finishes) ---
    setTimeout(() => {
      const aboutData = content[currentLanguage].about;
      const aboutSection = document.querySelector("#about-section, section#about-section");

      if (aboutSection && aboutData) {
        aboutSection.id = aboutData.id || "about-section";
        aboutSection.innerHTML = `
          <iframe
            src="${aboutData.video}"
            title="${aboutData.title}"
            allowfullscreen>
          </iframe>
          <div class="about-text">
            <p>${aboutData.text}</p>
          </div>
        `;
      }

    }, 50); // Delay a little to ensure the section is rendered
  }
}




// Navigate to another page
function navigate(url, section) {
  currentSection = section;
  window.location.href = url;
}


// Initialize
window.addEventListener("DOMContentLoaded", () => {
  updateNavLabels();
  document.getElementById("language").textContent =
    currentLanguage === "it" ? "Lingua: Italiano 🇮🇹" : "Language: English 🇬🇧";

  if (isProjectsPage) {
    loadProject("placeholder");
  } else {
    loadSection(currentSection);
  }
});

