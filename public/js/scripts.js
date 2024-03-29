/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".project");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      //changer couleur du bouton lors du click
      filterButtons.forEach((button) => {
        button.classList.remove("active");
      });
      button.classList.toggle("active");
      const filterValue = button.getAttribute("data-filter");

      projects.forEach((project) => {
        const projectTagsAttribute = project.getAttribute("data-tags");

        // Vérifier si l'attribut data-tags est défini
        if (projectTagsAttribute !== null) {
          const projectTags = projectTagsAttribute.split(",");

          if (projectTags.includes(filterValue) || filterValue === "all") {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        }
      });
    });
  });
});
