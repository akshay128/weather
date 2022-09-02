const weather={
             key :"1072181b817e8869727f69a7d70b7519",
             baseUrl :"https://api.openweathermap.org/data/2.5/weather"
            }
var search =document.getElementById("abc");
var name =document.getElementById("city");
var data = new Date();
           var year =data.getFullYear();
           var dat_month =data.getMonth();
           var date_date =data.getDate(); 
one_q=()=>{
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+search.value+'&appid=1072181b817e8869727f69a7d70b7519&units=metric')
     .then(response => response.json())
     .then(data =>{
        document.getElementById("city").innerHTML=data.name;
        document.getElementById("temp_max").innerHTML=data.main.temp_max  + " " +"*C ";
        document.getElementById("temp_min").innerHTML=Math.round( data.main.temp_min * 1.8 +32)  + " "+"*F ";
    var we=document.getElementById("weather").innerHTML=data.weather[0].main;
        document.getElementById("date").innerHTML= `${date_date}/${dat_month +1}/${year} `
        if('Clouds' == we){
            document.body.style.backgroundImage = "url('cloud.jpeg') !important";
        }
        if('Haze' == we){
            document.body.style.backgroundImage = "url('Stormy Weather by Judy Hall-Folde.jpeg') !important";
        } 
        if('Clear' == we){
            document.body.style.backgroundImage = "url('Sun.jpeg') !important";
        } 
        if('Rain' == we){
            document.body.style.backgroundImage = "url('download.jpeg') !important";
        } 
    }
     );     
}

