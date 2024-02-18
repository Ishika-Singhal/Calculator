let string = "";
let input = document.getElementById('inputb');
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    try{
    if(e.target.innerHTML == ' = '){
      console.log('a');
      string=eval(string);
      input.value = string;
    }
    else if(e.target.innerHTML == 'AC')
    {
      console.log('a');
      string="";
      input.value=string;
    }
   else if(e.target.innerHTML ==  'DE')
   {
     console.log('a');
     string =string.substring(0,string.length-1);
     input.value = string;
   }
    
    else{
      console.log('a');
    string += e.target.innerHTML;
    input.value = string;
    }
    }
    catch(err)
    {
      string="ERROR";
      input.value = string;
      
      
    }
  })
})
