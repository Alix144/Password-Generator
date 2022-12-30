const inputEl = document.getElementById("input");
const copyButtonEl = document.getElementById("btnimg");
const generateButtonEl = document.getElementById("btn");
const notifyEl = document.getElementById("notify");

generateButtonEl.addEventListener("click", function(){

const password = generatePassword();

inputEl.value = password;

})

copyButtonEl.addEventListener("click", function(){
    if(inputEl.value){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
    notifyEl.style.visibility = "visible";
    setInterval(() => {
        notifyEl.style.visibility = "hidden";

    }, 2000);
    
    }
   
})

function generatePassword(){

    const char = "abcdfghijklmnopqrstuwxyz~`!@#$%^&*()_-1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var password = "";

    for(i=0; i<15; i++){
        const random = Math.floor(Math.random()*char.length)+1;
        password += char.charAt(random,random+1);
    }
    return password;
}

