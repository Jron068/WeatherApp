const WeatherForm = document.querySelector("WeatherForm");
const UserInput = document.querySelector("UserInput");
const DisplayCard = document.querySelector("DisplayCard");
const apiKey = "71301c2691188c07254650edd3f836f1";

//for submit button 
//use the "async" function to use the "await"
WeatherForm.addEventListener("submit",async event =>  {

    event.preventDefault(); //prevent for page to refresh

    const city = cityInput.value; //getting the city (should string)

    if(city){
        try{
            const GetData = await getData(city); //returning the data
            displayInfo(getData);
        }catch(error){
            console.error(error);
            displayError(error);
        }
    }else{
        displayError("Please indation a valid city: ");
    }
});

async function getData(city) {
    
    const api = ''; // use the api call 

    const response = await fetch(api);

    console.log(response);

    //optional
    if(!response.ok){
        throw new Error("Not Valid City!!");
    }else{
        return await response.json(); //use the response in jason format.
    }
}

// getting in to json
function displayInfo(data){

    const {name: city, 
        main: {temp, pressure}, weather: [{id, description}]} = data;

    card.textContent = "";
    ard.style.display = "flex"; // for display same css of the card or error message
    
    //to display iy you set the display to none (css).
    const cityDisplay = document.createElement("h1"); 
    const citypressure = document.createElement("p");
    const humidity = document.createElement("p");
    const descriptions = document.createElement("p");
    const weatherBase = document.createElement("p");

    cityDisplay.textContent = city;
    weatherBase.textContent = weatherBase(id);

    //inside the ("") the name of the class in css.
    humidity.classList.add("temp");
    citypressure.classList.add("pressure");
    descriptions.classList.add("description");
    weatherBase.classList.add("weatherEmoji"); 
    
    cityDisplay.classList.add("cityDisplay"); //to add the full list of css.
    card.appendChild(cityDisplay); //to append the display of city
    card.appendChild(temperation); //to append the display of temperation
    card.appendChild(humidity); //to append the display of humidity
    card.appendChild(descriptions); //to append the display of humidity

}

//geting what the city weather is.
function weatherBase(weatherId){

    //this will be based on the API
    switch(true){
        case (weatherid >= 200 && weatherid < 300):
            return "Thunder";
        case (weatherid >= 300 && weatherid < 400):
            return "Drizzle";
        case (weatherid >= 400 && weatherid < 500):
            return "Heavy Rain";
        case (weatherid >= 500 && weatherid < 600):
            return "Rain";
        case (weatherid >= 600 && weatherid < 700):
            return "Snow";
        case (weatherid >= 700 && weatherid < 800):
            return "Atmosphere";
        case (weatherid === 800):
            return "Clear";
    }

}

//for displaying an error message.
function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay = textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = ""; //optional if use a card
    card.style.display = "flex"; // for display same css of the card or error message
    card.appendChild(errorDisplay);
}
