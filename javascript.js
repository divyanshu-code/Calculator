let userinput = document.querySelector('#bold')
const ans = document.querySelector('#f')
let buttons = document.querySelectorAll('.button')

let string = "";


Array.from(buttons).forEach( a=>{

    a.addEventListener('click' , (e)=>{
      
        if(e.target.innerHTML == '='){
            string = string.replace('^' , '**');
            string = string.replace('%' , '/100');
            string = eval(string);
            ans.value = string ;
            userinput.value = ""; 
        }else if( e.target.innerHTML == 'AC'){

            string= "";
            userinput.value = string ;
            ans.value= string;
        }else if (e.target.innerHTML == 'DEL'){

             string = string.substring(0 , string.length-1) ;

             userinput.value = string ;
        }
        else{

             string += e.target.innerHTML;
             userinput.value = string ;
        }
            
    });

});
