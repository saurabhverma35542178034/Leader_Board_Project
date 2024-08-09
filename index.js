function displayScore(e)
{  
  if (e) {
    e.preventDefault();
}




    let inputs=Array.from(document.querySelectorAll('input'));
    for(let i =0 ; i<1;i++)
     {
        let divCoantiner=document.createElement('div');
        divCoantiner.id='mainContainer';
        divCoantiner.style.display='flex';
        divCoantiner.style.marginTop='3rem';
        divCoantiner.style.justifyContent='space-around';
        divCoantiner.style.backgroundColor='cyan';

       

       let firstname=document.createElement('div');
       let lastname=document.createElement('div');
       let score=document.createElement('div');

       let cross=document.createElement('button');
       cross.textContent='X';
       cross.addEventListener('click',()=>{
        divCoantiner.remove();
       })
       let plusFive=document.createElement('button');
       plusFive.textContent='+5';
       plusFive.addEventListener('click',()=>{
        let sc=Number(score.textContent)+5;
        score.textContent=sc;
       })
       let minusFive=document.createElement('button');
       minusFive.textContent='-5';
       minusFive.addEventListener('click',()=>{
        let sc=Number(score.textContent)-5;
        if(sc>=0)
        score.textContent=sc;
        else 
        score.textContent=0;
       })
       if(inputs[i].value==""||inputs[i+1].value==""||inputs[i+2].value=="")
        {  
          let msg=document.querySelector('#errorMessages');
          msg.textContent = 'Please fill out all required fields.';
           msg.style.display='block';
         
         
          
          
          return;}

       firstname.textContent=inputs[i].value;
       lastname.textContent=inputs[i+1].value;
       score.textContent=inputs[i+2].value;

        // console.log();
      document.body.appendChild(divCoantiner);
      divCoantiner.appendChild(firstname);
      divCoantiner.appendChild(lastname);
      divCoantiner.appendChild(score);
      divCoantiner.appendChild(cross);
      divCoantiner.appendChild(plusFive);
      divCoantiner.appendChild(minusFive);
      let msg=document.querySelector('#errorMessages');
      msg.textContent = '';
    }
}

