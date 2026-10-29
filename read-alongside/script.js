"use strict";
document.querySelectorAll("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
const explanations = {
 continue: "Keep reading: continue with your current plan. Your reflection is kept for you to revisit.",
 time: "Give it more time: keep reading and set a later check-in. Give yourself another opportunity to consider the book.",
 pause: "Pause: set the book aside for now. Your reading position, notes and history remain available.",
 selective: "Read selectively: choose the parts you want to focus on. The whole-book plan pauses without marking the book complete.",
 stop: "DNF (Did Not Finish): stop the unfinished plan while keeping the book, reading position, notes and history."
};
document.querySelectorAll("[data-choice]").forEach(button => {
 button.addEventListener("click", () => {
  document.querySelectorAll("[data-choice]").forEach(option => option.setAttribute("aria-pressed", String(option === button)));
  document.getElementById("choice-result").textContent = explanations[button.dataset.choice] + " This website example does not save a decision.";
 });
});
