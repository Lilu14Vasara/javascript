function createTable() {
  let container=document.getElementById('education');
 
    container.border = "1";

    for (let i = 0; i < 1; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            let td = document.createElement('td');
            td.style.width = "70px";
            td.style.height = "30px";
           
            if (j==2) {
                td.innerHTML=`<input type="number" id="passingYear">`
                
            }
             td.contentEditable =true ;

            row.appendChild(td);
        }
        container.appendChild(row);
    } 
}
function deleteRow() {
    let container=document.getElementById('education');
    if (!container) return;
    let rowCount = container.rows.length;
    console.log(rowCount);
    
    if (rowCount > 0) {
        container.deleteRow(rowCount - 1);
    }
}

 function createWorkTable(){
      let container=document.getElementById('workExperience');

    container.border = "1";

    for (let i = 0; i < 1; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 8; j++) {
            let td = document.createElement('td');
            td.style.width = "70px";
            td.style.height = "30px";
            td.contentEditable =true ;
            if (j==2 ||j==3) {
                td.innerHTML=`<input type="date" id="fromDate">`
                
            }


            row.appendChild(td);
        }
        container.appendChild(row);
    } 
}

function deleteWorkRow(){
    let container=document.getElementById('workExperience');
    if (!container) return;
    let rowCount = container.rows.length;
    console.log(rowCount);
    
    if (rowCount > 0) {
        container.deleteRow(rowCount - 1);
    }
}


function language() {
    let table=document.getElementById('languageTable')
    let languageArr=["Hindi","English","Gujrati"];
    let skillArr=["Read","Write","Speak"]
 for (let i = 0; i < languageArr.length; i++) {
   let row=document.createElement('tr');
   let td=document.createElement('td');
  
td.innerHTML =languageArr[i];
 td.innerHTML +=`<input type="checkbox" name='${languageArr[i]}'>`
   row.appendChild(td);

   for (let j = 0; j < skillArr.length; j++) {
    
    let td=document.createElement('td');
    td.innerHTML=`<label> ${skillArr[j]} </label>
    <input type="checkbox" name='${languageArr[i]}_${skillArr[j]}'>`

    row.appendChild(td)

   }
   table.appendChild(row)
    
 }   
}
language()

function technology(){
    let table= document.getElementById('technologiesTable');
    let techArr=["PHP","Mysql","larave","Oracle"];
    let levelArr=["Beginer","Mideator","Expert"]
    table.innerHTML="";
     for (let i = 0; i < techArr.length; i++) {
   let row=document.createElement('tr');
   let td=document.createElement('td');
  
   td.innerHTML =techArr[i];
 td.innerHTML +=`<input type="checkbox" name='${techArr[i]}'>`
   row.appendChild(td);

   for (let j = 0; j < levelArr.length; j++) {
    
    let td=document.createElement('td');
    td.innerHTML=`<label> ${levelArr[j]} </label>
    <input type="radio" name='${techArr[i]}'>`

    row.appendChild(td)

   }
   table.appendChild(row)

}
}
technology()

let submit=document.getElementById('submit');
let reset=document.getElementById('reset');
let jobApplication=document.getElementById('jobApplication');
submit.addEventListener("click",(e)=>{
    e.preventDefault();

 let firstName= document.getElementById("firstName");
 let lastName= document.getElementById('lastName');
 let designation= document.getElementById('designation')
 let address1= document.getElementById('address1');
 let email= document.getElementById('email');
 let address2= document.getElementById('address2');
 let city= document.getElementById('city');
 let phone= document.getElementById('phone');
 let state= document.getElementById('state');
 let zipCode= document.getElementById('zipCode');
 let date= document.getElementById('date');
 let male= document.getElementById('male');
 let female= document.getElementById('female');
 let relationshipstatus= document.getElementById("relation");



 let emailPattern=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
 let mobilePattern=/[0-9]{10}/;
  let isValid = true;

    if (firstName.value.trim()=="") {
        let span=document.getElementById('firstError');
        span.innerHTML="first name is require";
         firstName.classList.add('input-error');
         isValid=false;
    }
     else {
        let span=document.getElementById('firstError');
        span.innerHTML = "";
        firstNameField.classList.remove('input-error');
        
    }


    if (lastName.value.trim()=="") {
        let span=document.getElementById('lastnameError');
         span.innerHTML="last name is require";
         lastName.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('lastnameError');
        span.innerHTML = "";
        lastName.classList.remove('input-error');
       
    }
   
    if (designation.value.trim()=="") {
        let span=document.getElementById('designationError');
         span.innerHTML="Designation is require";
         designation.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('designationError');
        span.innerHTML = "";
        designation.classList.remove('input-error');
       
    }
        if (address1.value.trim()=="") {
        let span=document.getElementById('address1Error');
         span.innerHTML="Address1 is require";
         address1.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('address1Error');
        span.innerHTML = "";
        address1.classList.remove('input-error');
       
    }
    if (email.value.trim()=="") {
        let span=document.getElementById('emailError');
         span.innerHTML="Email is require";
         email.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('emailError');
        span.innerHTML = "";
        email.classList.remove('input-error');
       
    }
        if (!emailPattern.test(email.value)) {
        let span=document.getElementById('emailError');
         span.innerHTML="Please Enter Valid email"
         email.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('emailError');
        span.innerHTML = "";
        email.classList.remove('input-error');
       
    }
        if (address2.value.trim()=="" && address1.value.trim()=="") {
        let span=document.getElementById('address2Error');
         span.innerHTML="one address is require compulsory";
         address2.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('address2Error');
        span.innerHTML = "";
        address2.classList.remove('input-error');
       
    }
       if (city.value.trim()=="") {
        let span=document.getElementById('cityError');
         span.innerHTML="City Name is require";
         city.classList.add('input-error');
        isValid=false
    }
     else {
         let span=document.getElementById('cityError');
        span.innerHTML = "";
        city.classList.remove('input-error');
       
    }
     if (phone.value.trim()=="") {
        let span=document.getElementById('phoneError');
         span.innerHTML="Phone number is require";
         phone.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('phoneError');
        span.innerHTML = "";
        phone.classList.remove('input-error');
       
    }
         if (!mobilePattern.test(phone.value)) {
        let span=document.getElementById('phoneError');
         span.innerHTML="Please Enter correct Mobile Number";
         phone.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('phoneError');
        span.innerHTML = "";
        phone.classList.remove('input-error');
       
    }

        if (state.value==="") {
        let span=document.getElementById('stateError');
         span.innerHTML="Please select state";
        
        isValid=false
    }
     else {
        let span=document.getElementById('stateError');
        span.innerHTML = "";
       
       
    }

    if (zipCode.value=="") {
        let span=document.getElementById('zipcodeError');
         span.innerHTML="ZipCode is require";
         zipCode.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('zipcodeError');
        span.innerHTML = "";
        zipCode.classList.remove('input-error');
       
    }

    if (male.value=="" && female.value=="") {
        let span=document.getElementById('genderError');
         span.innerHTML="Please select Gender";
        isValid=false
    }
     else {
         let span=document.getElementById('genderError');
        span.innerHTML = "";
    }

    if (relationshipstatus.value=="") {
        let span=document.getElementById('relationError');
         span.innerHTML="Please select Relationship status";
         relationshipstatus.classList.add('input-error');
        isValid=false
    }
     else {
         let span=document.getElementById('relationError');
        span.innerHTML = "";
        relationshipstatus.classList.remove('input-error');
       
    }

        if (date.value=="") {
        let span=document.getElementById('birthDateError');
         span.innerHTML="Please select Date of Birth";
         date.classList.add('input-error');
        isValid=false
    }
     else {
         let span=document.getElementById('birthDateError');
        span.innerHTML = "";
        date.classList.remove('input-error');
       
    }
    
    let birthDate=date.value;
    let today=new Date().value;

    if (birthDate >= today) {
        let span=document.getElementById('birthDateError');
         span.innerHTML="Please select  Correct Date of Birth";
         date.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('birthDateError');
        span.innerHTML = "";
        date.classList.remove('input-error');
       
    }

    

 let educationTable=document.getElementById('education');

    if (educationTable.rows.length <=1) {
        let span=document.getElementById('educationRowError');
         span.innerHTML="Please Add Atleast 2 Education details";
         educationTable.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('educationRowError');
        span.innerHTML = "";
        educationTable.classList.remove('input-error');
    }


 let workExperienceTable=document.getElementById('workExperience');
   if (workExperienceTable.rows.length <1) {
        let span=document.getElementById('workExperienceError');
         span.innerHTML="Please Add Internship Detail If you have no Experience";
         workExperienceTable.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('workExperienceError');
        span.innerHTML = "";
        workExperienceTable.classList.remove('input-error');
    }

 let language=document.getElementById('languageTable');
    if (language.value=="") {
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
 
  
   
     let php= document.querySelectorAll('input[name="PHP"]');
     let mysql= document.querySelectorAll('input[name="Mysql"]');
     let larave=document.querySelectorAll('input[name="larave"]');
     let oracle=document.querySelectorAll('input[name="Oracle"]')



    let techSelect=false;
     if (php[0].checked) {
         techSelect=true;
        let levelSelect=false;
          for (let i = 1; i < php.length; i++) {
        if (php[i].checked) {
            levelSelect =true;
            break;
        }   
        }
         if (!levelSelect) {
        let span=document.getElementById('TechnologyError');
         span.innerHTML="Please Select Your PHP Level";
            
     }
        
     }
        if (mysql[0].checked) {
        techSelect=true;
        let levelSelect=false;
          for (let i = 1; i < mysql.length; i++) {
        if (mysql[i].checked) {
            levelSelect =true;
            break;
        }   
        
       
     }
      if (!levelSelect) {
            let span=document.getElementById('TechnologyError');
         span.innerHTML="Please Select Your Mysql Level";
            
        }
        
     }
    if (larave[0].checked) {
       techSelect=true;
        let levelSelect=false;
          for (let i = 1; i < larave.length; i++) {
        if (larave[i].checked) {
            levelSelect =true;
            break;
        }   
        
        
     }
     if (!levelSelect) {
            let span=document.getElementById('TechnologyError');
         span.innerHTML="Please Select Your Larave Level";
            
        }
        
     }
    if (oracle[0].checked) {
         techSelect=true;
        let levelSelect=false;
          for (let i = 1; i < oracle.length; i++) {
        if (oracle[i].checked) {
            levelSelect =true;
            break;
        }   
        
     }
         if (!levelSelect) {
            let span=document.getElementById('TechnologyError');
         span.innerHTML="Please Select Your Oracle Level";
            
        }
     }
  



   if (!techSelect) {
        let span=document.getElementById('TechnologyError');
         span.innerHTML="Please Select Your Technology With Level";
    }
   else if (span.innerHTML === ""){
        let span=document.getElementById('TechnologyError');
        span.innerHTML = "";
        technologies.classList.remove('input-error');
     }
      

 

let refrenceName=document.getElementById('refrenceName');
let refrenceContact=document.getElementById('refrenceCon');
let refrenceRelation=document.getElementById('refrenceRel');

    if (refrenceName.value=="") {
        let span=document.getElementById('refrenceNameError');
         span.innerHTML="Refrence Name is Require if you have no refrence than write null";
         refrenceName.classList.add('input-error');
        isValid=false
    }
     else {
         let span=document.getElementById('refrenceNameError');
        span.innerHTML = "";
        refrenceName.classList.remove('input-error');
    }
        if (refrenceContact.value=="") {
        let span=document.getElementById('refrenceContactError');
         span.innerHTML="Refrence Contact is Require if you have no refrence than write null";
         refrenceContact.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('refrenceContactError');
        span.innerHTML = "";
        refrenceContact.classList.remove('input-error');
    }

 if (!mobilePattern.test(refrenceContact.value)) {
        let span=document.getElementById('refrenceContactError');
         span.innerHTML="Please Enter correct Refrence Number";
         refrenceContact.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('refrenceContactError');
        span.innerHTML = "";
        refrenceContact.classList.remove('input-error');
       
    }

           if (refrenceRelation.value=="") {
        let span=document.getElementById('refrenceRelError');
         span.innerHTML="Refrence Relation is Require if you have no refrence than write null";
         refrenceRelation.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('refrenceRelError');
        span.innerHTML = "";
        relationshipstatus.classList.remove('input-error');
    }



let preferances=document.getElementById('preferances');
let noticePeriod=document.getElementById('noticPeriod');
let expectedCTC=document.getElementById('expectedCtc');
let currentCTc=document.getElementById('currentCtc');
let department=document.getElementById('department');

    if (preferances.value=="") {
        let span=document.getElementById('preferancesError');
         span.innerHTML="Preferances Name is Require ";
         preferances.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('preferancesError');
        span.innerHTML = "";
        preferances.classList.remove('input-error');
    }


    if (noticePeriod.value=="") {
        let span=document.getElementById('noticPeriodError');
         span.innerHTML="Please enter Your Notice Period";
         noticePeriod.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('noticPeriodError');
        span.innerHTML = "";
        noticePeriod.classList.remove('input-error');
    }

        if (expectedCTC.value=="") {
        let span=document.getElementById('expectedCTCError');
         span.innerHTML="Please enter Your Expected CTC";
         expectedCTC.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('expectedCTCError');
        span.innerHTML = "";
        expectedCTC.classList.remove('input-error');
    }
        if (currentCTc.value=="") {
        let span=document.getElementById('currentCtcError');
         span.innerHTML="Please enter Your Current CTC";
         currentCTc.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('noticPeriodError');
        span.innerHTML = "";
        currentCTc.classList.remove('input-error');
    }


            if (department.value=="") {
        let span=document.getElementById('departmentError');
         span.innerHTML="Please Select Your Department";
         department.classList.add('input-error');
        isValid=false
    }
     else {
        let span=document.getElementById('departmentError');
        span.innerHTML = "";
        department.classList.remove('input-error');
    }



let submit=document.getElementById('submit');
let reset=document.getElementById('reset');


})







