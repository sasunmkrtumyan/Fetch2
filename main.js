const select = document.querySelector("#shun");
const body = document.querySelector(".body");

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    for (let key in data.message) {
      const item = `<option class="option" value="${key}">${key}</option>`;

      select.insertAdjacentHTML("beforeend", item);
    }
  });

select.addEventListener("change", (evt) => {
  fetch(`https://dog.ceo/api/breed/${evt.target.value}/images`)
    .then((response) => response.json())
    .then((data) => {
      if (body.children.length) {
        const images = document.querySelectorAll(".image");
        console.log(images);
        images.forEach((el) => {
          el.remove();
        });
      }
      data.message.forEach((el) => {
        body.insertAdjacentHTML("beforeend", `<div class="image"><img class="img" src="${el}"></div>`);
      });
    });
});
