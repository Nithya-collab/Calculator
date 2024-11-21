const input = document.querySelector('input');

function Clear(){
    input.value="";
}

function Display(val){
      input.value += val;
}

function Calc(){
     try{
        input.value=eval(input.value);
     }catch(err){
          input.value="Error !"
     }
}

