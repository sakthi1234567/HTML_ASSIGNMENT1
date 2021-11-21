var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
request.send();
request.onload = function(){
    //console.log(this.response);
    var data = JSON.parse(this.response);
   // console.log(data);
   for (i =0;i<data.length;i++) 
   {
       console.log("ID IS " +data[i].id);
       
   }
}