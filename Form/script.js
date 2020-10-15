let strength = 0;
let validations = []
let showPassword = false;
const bars = document.querySelectorAll(".bar");
const valid = document.querySelectorAll(".valid");
function validatePassword(e) {
    const password = e.value;
    validations = [
        (password.length > 4),
        (password.search(/[A-Z]/) > -1),
        (password.search(/[0-9]/) > -1),
        (password.search(/[$&+:;=?@#]/) > -1)
    ]
    strength = validations.reduce((acc, cur) => acc + cur)

}
document.querySelector(".pass").addEventListener("input", function(){
    validatePassword(this)
    bars.forEach(function(e, index){
        if(index < strength) e.classList.add("bar-show");
        else e.classList.remove("bar-show");
    })
    valid.forEach(function(e, index){
        //e.innerHTML = index < strength ? '✅' : '❌' 
        if(validations[index] == true) e.innerHTML = '✅';
        else e.innerHTML = '❌';
    })

})