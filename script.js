console.log("Homework#3");
function firstLetter(str) {
    let result = str.charAt(0).toUpperCase()+str.slice(1);
    return result;
    
}
function sumAfterTax(salary,tax1,tax2){
    let tax=tax1+tax2;
    let genTax=(salary*tax)/100;
    return salary-genTax;
}
function getRandonNumber(n,m){
   let diap=m-n;
   let ranN=Math.random()*diap;
   let randomNumber=ranN+n;
   return Math.floor(randomNumber);
   
}

function deleteLetters (str,letter){
    return str.replaceAll(letter,'');
    
}

function currencyConverter (sum,currency){
    const ex_rate=36.77;
    currency=currency.toLowerCase();
    if(currency!=="$"&&currency!=="uah"){
        console.log("Currency is not available");  
    }
    else{
        if (currency=="uah"){
            return sum*ex_rate;    
        }
        else {
            sum=sum/ex_rate; 
            return sum.toFixed(2);
        
        }

    }
}

function password(numberOfChar=8){
    let number;
    let password="";
    for (let i=0;i<=numberOfChar;i++){
      number=Math.random()*10;
      number=Math.floor(number);
      password+=number;

    }
    return password;
  
}


console.log("Функція №1",firstLetter("кокос"));
console.log("Функція №2",sumAfterTax(2000,15,5));
console.log("Функція №3",getRandonNumber(30,55));
console.log("Функція №4",deleteLetters("баланс","а"))
console.log("Функція №5",currencyConverter(100,"$"));
console.log("Функція №6",password(5));