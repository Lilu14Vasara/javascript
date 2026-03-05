 let language=document.getElementById('languageTable');
        let languageArr=["Hindi","English","Gujrati"];
        for (let i = 1; i < languageArr.length; i++) {
            console.log(languageArr[i]);
            
            let lan=document.getElementById(languageArr[i])
           let read= document.getElementById(languageArr[i]+"_Read");
           let write= document.getElementById(languageArr[i]+"_Write");
           let speak= document.getElementById(languageArr[i]+"_Speak");
       if (lan.checked) {
           langSelect =true;
        if (!read.checked && !write.checked && speak.checked)  {
        let span=document.getElementById('languageError');
         span.innerHTML=`Please Select Read/Write/Speak for ${languageArr[i]}`;  
         break;  
        }      
      }          
     }
    if (!langSelect) {
        let span=document.getElementById('languageError');
         span.innerHTML="Please Select Your Language With Level of known";
         language.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('languageError');
        span.innerHTML = "";
        language.classList.remove('input-error');
    }

 let technologies=document.getElementById("technologiesTable");
