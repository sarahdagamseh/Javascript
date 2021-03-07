var first_name = "Sarah";
var last_name = "Dagamseh";
var full_name = "Sarah Dagamseh";
console.log(full_name);

var Major= prompt ("Please write yes if you are a programmer")

if(Major == "yes")
{
    alert ("welcome programmer");
    var Grade = prompt("please enter your grade");
    if(Grade > "85")
    {
        alert ( "you are accepted")
    }
    console.log("your application is accepted");
    document.write( "Welcome to Our College");
    var inf = Major + Grade
    console.log( "Programming 90")
}
else 
{
    alert ( "File doesnt match")
}
