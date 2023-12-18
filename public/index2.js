for (let i = 0; i < document.querySelectorAll(".checkBox").length; i++) {
  document
    .querySelectorAll(".checkBox")
    [i].addEventListener("click", function () {
      const checkbox = this;
      const paragraph = checkbox.nextElementSibling;

      if (checkbox.checked) {
        paragraph.innerHTML = `<del>${paragraph.innerHTML}</del>`;
        paragraph.classList.toggle("cpp");


      } else {
        paragraph.innerHTML = paragraph.innerHTML.replace(/<\/?del>/g, "");
        paragraph.classList.toggle("cpp");
      }
    });
}

