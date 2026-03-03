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
 
