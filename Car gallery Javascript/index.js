//store all cars globally for filtering
let allCars = []

//define an async function to fetch car data from a json file
const fetchCarData = async () => {     // fetch the json file containing car data

    try {

     const response = await fetch('cars.json')          // Await: it pauses the execution of an async function until the promise is settle

    const data = await response.json()                // parse the Json response into a javascript object

    allCars = data.cars                              //store the array of cars in the global variable for future filtering

      displayCars(allCars)                               //initially display all cars when the page load

    } catch (error) {                                //handle any errors that occur during the fetch process
       console.error('Error fetch car data:', error)  //log the error message to the console
    }
}

// Define a function to display the car cards on the webpage
const displayCars = (cars) => {
    const carContainer = document.getElementById('carContainer')
    carContainer.innerHtml = '';          //Clear any existing content inside the car container

    cars.forEach((car) => {            //loop through each other car object in the cars array
        const carCard = document.createElement('div')  //create a new div element for each car card

        carCard.classList.add('card')      //Add a css class "card" to the `div` for styling purposes

        //Add HTML content to the car card, including an image , name, and model of the car

        carCard.innerHTML =`
        <img src= "${car.image}" alt ="${car.name} ${car.model}" width ="300px" >
        <h2>${car.name}</h2>
        <p>Model: ${car.model}</p>
        `
        //Append the car card to the container on the webpage
        carContainer.appendChild(carCard)

    })
}

window.onload = fetchCarData  //fetch car data