/*Adds an Event Listener to the Button to listen to a 'click', which executes getsFetch() 
function upon registering a click*/
document.querySelector("button").addEventListener("click", getFetch());

function getFetch() {
  const choice = document.querySelector("input").value;
  console.log(choice);
  
  /*URL for the Server to send requests*/
  const url = `https://api.nasa.gov/planetary/apod?api_key=YAaedpPBm7wtIMOveorx9dMioDxj4jQRV7pqzggQ&date=${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
    /*Object returned by the server is stored in 'data'*/
      console.log(data);
    /*'title' property of the object is put in the h3 tag */
      document.querySelector("h3").innerText = data.title;
    /*'explanation' property of the object is put in the p tag */
      document.querySelector("p").innerText = data.explanation;
    /*'hdurl' property of the object is put in the img tag -> src attribute */
      document.querySelector("img").src = data.hdurl;
    })
    .catch((err) => {
    /*Error, if generated, is console logged */
      console.log(`error ${err}`);
    });
}
