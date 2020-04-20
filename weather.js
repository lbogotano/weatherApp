
// my API key = cfd6d3e7ae82fd7a6c93f9df2e86c7a5


$(document).ready(function(){ 


    // function convert(num){
    //     return  Math.floor((num -273) * (9/5) +32);
    // }
    
    // $('#submit').click(() =>{
    
    //     let zip = $('#zipCode').val();
    //     if (zip != "" ){
        
    
            // $.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=cfd6d3e7ae82fd7a6c93f9df2e86c7a5`, ((data)=>{
    
            //         console.log(data);
            //         let city = data.name; 
            //         let lon = data.

//     still working on it!!
    
$('#input').click (function(){
  

    let zip = $('input').val();
    $.get('https://api.openweathermap.org/data/2.5/weather?zip=' +zip + '&appid=cfd6d3e7ae82fd7a6c93f9df2e86c7a5',function(outcome){
        $('#input').empty;
        let weatherInfo= {
            name: outcome.name,
            weather: outcome.weather[0].description,
            temp: Math.floor((outcome.main.temp - 273.15) * (9/5) + 32),
        };
        $('#name').append(weatherInfo.name + local)
        $('#weather').append(weatherInfo.weather)
        $('#temp').append(weatherInfo.temp)
    }
    )})

});
