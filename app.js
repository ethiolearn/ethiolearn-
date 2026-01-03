const gradeScreen = document.getElementById("grade-screen");
const subjectScreen = document.getElementById("subject-screen");
const lessonScreen = document.getElementById("lesson-screen");

const gradeList = document.getElementById("gradeList");
const subjectList = document.getElementById("subjectList");

let currentGrade = null;

function showScreen(screen) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  screen.classList.add("active");
}

function loadGrades() {
  Object.keys(curriculum).forEach(grade => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = `Grade ${grade}`;
    card.onclick = () => loadSubjects(grade);
    gradeList.appendChild(card);
  });
}

function loadSubjects(grade) {
  currentGrade = grade;
  subjectList.innerHTML = "";
  document.getElementById("selectedGrade").innerText = `Grade ${grade} Subjects`;

  Object.keys(curriculum[grade]).forEach(subject => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = subject;
    card.onclick = () => loadLesson(subject);
    subjectList.appendChild(card);
  });

  showScreen(subjectScreen);
}

function loadLesson(subject) {
  const lesson = curriculum[currentGrade][subject];
  document.getElementById("lessonTitle").innerText = lesson.title;
  document.getElementById("lessonContent").innerText = lesson.content;
  showScreen(lessonScreen);
}

function goBack(target) {
  if (target === "grade") showScreen(gradeScreen);
  if (target === "subject") showScreen(subjectScreen);
}

loadGrades();
