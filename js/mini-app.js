//PET PROJECT
//alert("home");//DELETE AFTER CONFIRMING CONNECTION


//onload function
window.onload = pageReady;
function pageReady(){
    
    
    //Get the table row tag-name
    let taskData = document.getElementById("taskData");
    let tableRow = document.getElementsByTagName("tr");
    //Create a "close" button and append it to each list item
    for (let i = 0; i < tableRow.length; i++) {
        //create the element and the text inside for 'DELETE'
        let td = document.createElement("td");
        let text = document.createTextNode("x");
        //Add them in
        td.className = "close";
        td.appendChild(text);
        tableRow[i].appendChild(td);
    }
            //Get close element for 'DELETE'
            var close = document.getElementsByClassName("close");
                for (i = 0; i < close.length; i++) {
                    //Use the function to delete item when close element is clicked
                    close[i].onclick = deleteItem; }; 
    
  
    //Get button element
    var addbutton = document.getElementById("addBtn");
    //Create a listener when clicked
    addbutton.onclick = listready;
    //Create a funtion
    function listready(){
        
        
        //Get the name and date element values
        var nameValue = document.getElementById("nameInput");
        console.log(nameValue.value);
        var dateValue = document.getElementById("dateInput");
        console.log(dateValue.value);
        
        //If statements to see when bars have no input value
        if(nameValue.value === ""){ //change background to red
            nameValue.style.backgroundColor = "#fbc3bc";
        } else { nameValue.style.backgroundColor = "#ffffff" };
        if(dateValue.value === ""){
            dateValue.style.backgroundColor = "#fbc3bc";
        } else { dateValue.style.backgroundColor = "#ffffff" };
        
        
        //If statements to see when bars have input
        if(nameValue.value !== "" && dateValue.value !== "") {
            
            //create the elements with the values
            var table = document.getElementById("taskData");
            var nameValue = document.getElementById("nameInput");
            var dateValue = document.getElementById("dateInput");
            //Variable to create new inputs
            var newNameInput = document.createTextNode(nameValue.value);
            var newdateInput = document.createTextNode(dateValue.value);
            //Create new elements for the table
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            //input the new values into the td
            td1.appendChild(newNameInput);
            td2.appendChild(newdateInput);
            //Input the td into the tr
            tr.appendChild(td1);
            tr.appendChild(td2);
            //Input the tr into the table
            table.appendChild(tr);
            
            
            //Figure out how to save the values to the server 
            //so that when page is reloaded all the values are still there
            var object = {name: nameValue.value, date: dateValue.value};
            console.log(object);
            
            localStorage.setItem("name", nameValue.value);
            localStorage.setItem("date", dateValue.value);
            var retrieveName = localStorage.getItem("name");
            var retrieveDate = localStorage.getItem("date");
            console.log(retrieveName);
            console.log(retrieveDate);/////////////////////////////////
            
            //create the element and the text inside for 'DELETE'
            var tdt = document.createElement("td");
            var textt = document.createTextNode("x");
            //Add them in
            tdt.className = "close";
            tdt.appendChild(textt);
            tableRow[i].appendChild(tdt);
            
            //Get close element for 'DELETE'
            var close = document.getElementsByClassName("close");
                for (i = 0; i < close.length; i++) {
                    //Use the function to delete item when close element is clicked
                    close[i].onclick = deleteItem; }; 
            
        };//End of if statement
        
    };//End of on click function  

};//End of onload function

/*/ FUNCTIONS /*/

//Function to delete item
function deleteItem(){
    var div = this.parentElement.style.display = "none";
    localStorage.clear();
}









/*//create the element and the text inside for 'EDIT'
            var td = document.createElement("td");
            var text = document.createTextNode("edit");
            //Add them in
            td.className = "edit";
            td.appendChild(text);
            tableRow[i].appendChild(td);*/

            /*//Get edit element for 'EDIT'
            var edit = document.getElementsByClassName("edit"),rIndex;
                for (i = 0; i < edit.length; i++) {
                    //Use the function to delete item when close element is clicked
                    edit[i].onclick = editItem; }
                    
        //Function to edit item
            function editItem(){
        
            }*/
 
/*//create to ccheck if the user date is over due
            var eltd = document.getElementsByTagName("td")[1];
            var thisDay = new Date();
	        var dueDay = new Date(dateValue.value);
            //CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
            var UTCNow = thisDay.getTime();
            var UTCDue = dueDay.getTime();
            var dateDiff = UTCDue - UTCNow;
            //CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	        dateDiff = Math.floor(dateDiff/86400000);
            //LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
            if(dateDiff < 0){
                
                dueData.innerHTML = "This assignment is past due";
            }*/
