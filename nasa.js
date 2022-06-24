document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();
  const url = `https://api.nasa.gov/planetary/apod?api_key=YAaedpPBm7wtIMOveorx9dMioDxj4jQRV7pqzggQ`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    
      document.querySelector("h3").innerText = data.title;

      document.querySelector("p").innerText = data.explanation;

      document.querySelector("img").src = data.hdurl;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
