document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://api.nasa.gov/planetary/apod?api_key=RSrYE8iBbjLq8Qnu4psZ13kHc7AVt1HBZdZJnJmM`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
