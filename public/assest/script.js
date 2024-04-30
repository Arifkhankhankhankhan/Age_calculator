const input=document.querySelector(".input")
const btn=document.querySelector(".age-button")
const result=document.querySelector(".result")
console.log(input,btn,result)

btn.addEventListener("click",()=>{
    if(input.value===""){
        alert("enter your age plz")
    }else{
        let dob=new Date();
        let dob_year=dob.getFullYear();
        console.log(dob)
        let now=new Date(input.value);
        let now_year=now.getFullYear();
        let age =dob_year-now_year;
        console.log(age)
        result.innerHTML =`your age is ${age}`
    }

})