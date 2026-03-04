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
   
      table = document.createElement('table');
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
       for (let i = 0; i < techArr.length; i++) {
     let row=document.createElement('tr');
     let td=document.createElement('td');
    
     td.innerHTML =techArr[i];
   td.innerHTML +=`<input type="checkbox" name='${techArr[i]}'>`
     row.appendChild(td);
  
     for (let j = 0; j < levelArr.length; j++) {
      
      let td=document.createElement('td');
      td.innerHTML=`<label> ${levelArr[j]} </label>
      <input type="radio" name='${techArr[i]}}'>`
  
      row.appendChild(td)
  
     }
     table.appendChild(row)
  
  }
  }
  technology()
   



let form = document.getElementById("jobForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();
    let isValid = true;

    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let designation = document.getElementById("designation");
    let address1 = document.getElementById("address1");
    let address2 = document.getElementById("address2");
    let city = document.getElementById("city");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let state = document.getElementById("state");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let zipCode = document.getElementById("zipCode");
    let relation = document.getElementById("relation");
    let date = document.getElementById("date");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;

    function setError(id, message, element) {
        document.getElementById(id).innerText = message;
        element.classList.add("error-border");
        isValid = false;
    }

    function clearError(id, element) {
        document.getElementById(id).innerText = "";
        element.classList.remove("error-border");
    }

    
    if (firstName.value.trim() === "")
        setError("firstNameError", "First Name Required", firstName);
    else
        clearError("firstNameError", firstName);

    
    if (lastName.value.trim() === "")
        setError("lastNameError", "Last Name Required", lastName);
    else
        clearError("lastNameError", lastName);

   
    if (designation.value.trim() === "")
        setError("designationError", "Designation Required", designation);
    else
        clearError("designationError", designation);

    
    if (address1.value.trim() === "")
        setError("address1Error", "Address Required", address1);
    else
        clearError("address1Error", address1);

   
    if (address2.value.trim() === "")
        setError("address2Error", "Address Required", address2);
    else
        clearError("address2Error", address2);

    
    if (city.value.trim() === "")
        setError("cityError", "City Required", city);
    else
        clearError("cityError", city);

    
    if (email.value.trim() === "")
        setError("emailError", "Email Required", email);
    else if (!emailPattern.test(email.value))
        setError("emailError", "Invalid Email", email);
    else
        clearError("emailError", email);

    
    if (phone.value.trim() === "")
        setError("phoneError", "Phone Required", phone);
    else if (!phonePattern.test(phone.value))
        setError("phoneError", "Enter Valid 10 Digit Number", phone);
    else
        clearError("phoneError", phone);

    
    if (zipCode.value.trim() === "")
        setError("zipCodeError", "Zip Required", zipCode);
    else
        clearError("zipCodeError", zipCode);


    if (state.value === "")
        setError("stateError", "Select State", state);
    else
        clearError("stateError", state);

    
    if (!male.checked && !female.checked) {
        document.getElementById("genderError").innerText = "Select Gender";
        isValid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }

    
    if (relation.value === "")
        setError("relationError", "Select Relationship Status", relation);
    else
        clearError("relationError", relation);

    
    let birthDate = new Date(date.value);
    let today = new Date();

    if (date.value === "")
        setError("dateError", "Date Required", date);
    else if (birthDate >= today)
        setError("dateError", "Invalid Birth Date", date);
    else
        clearError("dateError", date);


   

    let educationTable = document.getElementById("education");

    if (educationTable.rows.length <= 1) {
        document.getElementById("educationError").innerText =
            "Add At Least One Education Detail";
        isValid = false;
    } else {
        document.getElementById("educationError").innerText = "";
    }


    

    let workTable = document.getElementById("workExperience");

    if (workTable.rows.length <= 1) {
        document.getElementById("workError").innerText =
            "Add At Least One Work Experience";
        isValid = false;
    } else {
        document.getElementById("workError").innerText = "";
    }


   

    let languageChecked =
        document.querySelectorAll("#languageTable input[type='checkbox']:checked");

    if (languageChecked.length === 0) {
        document.getElementById("languageError").innerText =
            "Select At Least One Language";
        isValid = false;
    } else {
        document.getElementById("languageError").innerText = "";
    }


  

    let techChecked =
        document.querySelectorAll("#technologiesTable input[type='checkbox']:checked");

    let techRadio =
        document.querySelectorAll("#technologiesTable input[type='radio']:checked");

    if (techChecked.length === 0) {
        document.getElementById("technologyError").innerText =
            "Select At Least One Technology";
        isValid = false;
    } else if (techRadio.length === 0) {
        document.getElementById("technologyError").innerText =
            "Select Technology Level";
        isValid = false;
    } else {
        document.getElementById("technologyError").innerText = "";
    }


    

    let refrenceName = document.getElementById("refrenceName");
    let refrenceCon = document.getElementById("refrenceCon");
    let refrenceRel = document.getElementById("refrenceRel");

    if (refrenceName.value.trim() === "")
        setError("refrenceNameError", "Reference Name Required", refrenceName);
    else
        clearError("refrenceNameError", refrenceName);

    if (refrenceCon.value.trim() === "")
        setError("refrenceConError", "Reference Contact Required", refrenceCon);
    else if (!phonePattern.test(refrenceCon.value))
        setError("refrenceConError", "Invalid Contact Number", refrenceCon);
    else
        clearError("refrenceConError", refrenceCon);

    if (refrenceRel.value.trim() === "")
        setError("refrenceRelError", "Reference Relation Required", refrenceRel);
    else
        clearError("refrenceRelError", refrenceRel);


   

    let preferdLocation = document.getElementById("preferdLocation");
    let expectedCtc = document.getElementById("expectedCtc");
    let currentCtc = document.getElementById("currentCtc");
    let department = document.getElementById("department");

    if (preferdLocation.selectedOptions.length === 0) {
        document.getElementById("preferdLocationError").innerText =
            "Select Preferred Location";
        isValid = false;
    } else {
        document.getElementById("preferdLocationError").innerText = "";
    }

    if (expectedCtc.value.trim() === "" || isNaN(expectedCtc.value))
        setError("expectedCtcError", "Enter Valid Expected CTC", expectedCtc);
    else
        clearError("expectedCtcError", expectedCtc);

    if (currentCtc.value.trim() === "" || isNaN(currentCtc.value))
        setError("currentCtcError", "Enter Valid Current CTC", currentCtc);
    else
        clearError("currentCtcError", currentCtc);

    if (department.value === "")
        setError("departmentError", "Select Department", department);
    else
        clearError("departmentError", department);


    

    if (isValid) {
        form.submit();
    }

});
