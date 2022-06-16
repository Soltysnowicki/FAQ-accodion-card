// DOM elements selector
const questions = document.querySelectorAll(".question");
const description = document.querySelectorAll(".desc");
const arrow = document.querySelectorAll(".arrow");

// For loop through elements and adding event listener to them
questions.forEach((question) =>
  question.addEventListener("click", () =>
    //adding and removing active class to elements
    {
      if (question.parentNode.classList.contains("active")) {
        question.parentNode.classList.toggle("active");
      } else {
        questions.forEach((question) =>
          question.parentNode.classList.remove("active")
        );
        question.parentNode.classList.add("active");
      }
    }
  )
);
