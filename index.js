
function select() {
    let radios=document.getElementsByClassName("radiobtn");
    let paragraph = document.getElementById("selected_point_value");
    paragraph.textContent = ""
    for (let i = 0; i < radios.length; i++) {
        if(radios[i].checked){
            console.log(radios[i].value)
            paragraph.textContent += radios[i].value;
        }
        
    };
    document.getElementById("rating_state").style.display = 'none';
    document.getElementById("thank_state").style.display = 'flex';
}





