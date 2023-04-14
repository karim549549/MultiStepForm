let login=document.querySelector('.login');

let signup=document.querySelector('.signup');

let thanks=document.querySelector('.thanks');

let btn1=document.querySelector('.btn1');

let btn2=document.querySelector('.btn2');

let nums=document.querySelectorAll('.no');

btn2.addEventListener("click", function(event){
    event.preventDefault()
});
btn1.onclick=function(){
    numbers(1);
    signup.classList.remove("onclick");
    login.classList.add("onclick");
    thanks.classList.add("onclick");

}
btn2.onclick=function(){
    numbers(2);
    signup.classList.add("onclick");
    thanks.classList.remove("onclick");
}

const numbers=function(e){
    for(let i = 0; i < nums.length;  i++){
        nums[i].classList.remove("active");
    }
    nums[e].classList.add("active");
    
}