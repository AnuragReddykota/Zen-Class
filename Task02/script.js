//create a request instance
var request = new XMLHttpRequest();
//initiate a connection (or) create a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
request.send();
//load the function
// this function will triggered only when the data is received successfully;
request.onload = function(){
//conversion of string to JSON format
var data = JSON.parse(this.response);
for(var i=0;i<data.length;i++)
{
    console.log(data[i].name);
}
}