document.getElementById("buttonCreate").addEventListener("click", 
function getData() {
    const event_name = document.getElementById("event_name");
    console.log("1");

    if (event_name.value){
        console.log(event_name.value);
    }
});