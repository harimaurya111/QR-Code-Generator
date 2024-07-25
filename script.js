const btn = document.querySelector("button");
const input = document.querySelector("input");
const img = document.querySelector(".img");

btn.addEventListener("click", function () {
  fetch(
    ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
  )
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
      const ObjectURL = URL.createObjectURL(blob);
      img.innerHTML = `<img src="${ObjectURL}" width="150px" height="150px">
`;
    })
    .catch((error) => {
      console.log("something went wrong");
    });
});
