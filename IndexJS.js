var comp = Math.floor((Math.random() * 50) + 1);
var user = null;
var count = 0;
console.log(comp);

function load() {
    document.getElementById("loader").style.display = "none";
}

function guessfun(){
    user = document.getElementById('guess_num').value;
    if(comp != user){
        count++;
        if(count == 1){
            document.getElementById("game_life").innerHTML = `
            <i class="fas fa-heart heart"></i>
            <i class="fas fa-heart heart"></i>
            <i class="fas fa-heart heart"></i>
            <i class="fas fa-heart heart"></i>`;
            if(comp < user){
                document.getElementById("show_itd").innerText = `Wrong!! Enter Less than ${user}`;
            }
            else{
                document.getElementById("show_itd").innerText = `Wrong!! Enter greater than ${user}`;
            }
            
        }
        else if(count == 2){
            document.getElementById("game_life").innerHTML = `
            <i class="fas fa-heart heart"></i>
            <i class="fas fa-heart heart"></i>
            <i class="fas fa-heart heart"></i>`;
            if(comp < user){
                document.getElementById("show_itd").innerText = `Wrong!! Enter Less than ${user}`;
            }
            else{
                document.getElementById("show_itd").innerText = `Wrong!! Enter greater than ${user}`;
            }
        }
        else if(count == 3){
            document.getElementById("game_life").innerHTML = `
            <i class="fas fa-heart heart"></i>
            <i class="fas fa-heart heart"></i>`;
            if(comp < user){
                document.getElementById("show_itd").innerText = `Wrong!! Enter Less than ${user}`;
            }
            else{
                document.getElementById("show_itd").innerText = `Wrong!! Enter greater than ${user}`;
            }
        }
        else if(count == 4){
            document.getElementById("game_life").innerHTML = `
            <i class="fas fa-heart heart"></i>`;
            if(comp < user){
                document.getElementById("show_itd").innerText = `Wrong!! Enter Less than ${user}`;
            }
            else{
                document.getElementById("show_itd").innerText = `Wrong!! Enter greater than ${user}`;
            }
        }
        else if(count == 5){
            document.getElementById("game_life").innerHTML = `
            <i class="fas fa-heart-broken heart"></i>`;
            document.getElementById("game_div").innerHTML = `
            <i class="fas fa-sad-tear user"></i>
            <p id="show_itd">You Loose !!</p>`;
            document.getElementById("comp_num_mark").innerText = `${comp}`;
        }
    }
    else if(comp == user){
        document.getElementById("game_div").innerHTML = `
        <i class="fas fa-laugh-wink user"></i>
        <p id="show_itd">You Win :-) !!</p>`;
        document.getElementById("comp_num_mark").innerText = `${comp}`;
    }
}
