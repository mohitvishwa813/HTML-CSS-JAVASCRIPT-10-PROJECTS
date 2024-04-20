const url = "https://dog.ceo/api/breeds/image/random/4";
const content = document.querySelector(".content");
const changeButton = document.querySelector("button");

function change() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const img = data.message;
      console.log(img.length);

      content.innerHTML = '';

      for (let i = 0; i < img.length; i++) {
        const imgElement = document.createElement('img');
        imgElement.src = img[i];
        content.appendChild(imgElement);
      }
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

change();
changeButton.addEventListener('click', ()=>{
  change();
});
