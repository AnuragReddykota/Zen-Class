var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var country = JSON.parse(this.response);
    for(var i in country)
    {
        try{
            var cname = country[i].name;  
            var latlong = country[i].latlng; 
            if(latlong==0)
            { 
                ("latitude and longitude not found");
            }
            weatherdata(cname,...latlong);
        }
        catch(e){
            console.log("invalid co-ordinates" + cname);
        }
    }
}
var weatherdata= function(name,lat,lng){
    var URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d76d706356afcaf5c0bbe9519c0c707a`;
    var request1= new XMLHttpRequest();
    request1.open('GET',URL,true);
    request1.send();
    request1.onload = function()
    {
        var data = JSON.parse(this.response);
        console.log(`${name}:${data.main.temp}`);


    }
}

