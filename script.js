function resetForm() {
    document.getElementById("myForm").reset();
}

function onSubmitForm() {
    let placeType = document.getElementById("placeType").value;
    let place = document.getElementById("place").value; 
    let privateRoom = document.getElementById("privateroom").value;
    let sharedRoom = document.getElementById("sharedroom").value;
    let wholeHouse = document.getElementById("wholehouse").value;
    let quantity = document.getElementById("quantity").value;
    let numberBeds = document.getElementById("numberbeds").value;
    let area = document.getElementById("area").value;
    let description = document.getElementById("description").value;
    let rules = document.getElementById("rules").value;
    let country = document.getElementById("country").value;
    let address = document.getElementById("address").value;
    let app = document.getElementById("app").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;

    const myJsonObject= {
        placeType: placeType,
        place: place,
        privateRoom: privateRoom,
        sharedRoom: sharedRoom,
        wholeHouse: wholeHouse,
        quantity: quantity,
        numberBeds: numberBeds,
        area: area,
        description: description,
        rules: rules,
        country: country,
        address: address,
        app: app,
        city: city,
        state: state,
    }
   
    console.log (myJsonObject);
    
    document.getElementById("id_place_type_display").innerHTML = myJsonObject.placeType;
    document.getElementById("id_place_display").innerHTML = myJsonObject.place;
    document.getElementById("id_number_beds_display").innerHTML = myJsonObject.quantity;
    document.getElementById("id_area_display").innerHTML = myJsonObject.numberBeds;
    document.getElementById("id_description_display").innerHTML = myJsonObject.area;
    document.getElementById("id_rules_display").innerHTML = myJsonObject.description;
    document.getElementById("id_country_display").innerHTML = myJsonObject.rules;
    document.getElementById("id_address_display").innerHTML = myJsonObject.country;
    document.getElementById("id_app_display").innerHTML = myJsonObject.app;
    document.getElementById("id_city_display").innerHTML = myJsonObject.city;
    document.getElementById("id_state_display").innerHTML = myJsonObject.state;

    resetForm();
}
   
// get all the values from your form                  
// and add them to a JSON object
// and console log the JSON object
// by way of reading your json object values (e.g obj.something), display them to below your form
// reset the form using javascript after displaying the values in the table
// read and practice on DOM and Objects from W3C schools
