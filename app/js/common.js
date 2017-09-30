(function(){
  forms = document.querySelectorAll("form");

  forms[0].addEventListener('submit', function(e){
    e.preventDefault(); 
     console.log(headerPass.value.length);

     if(nameValidate(headrName.value) && emailValidate(headerEmail.value) && headerPass.value.length > 3){     	
         var http = new XMLHttpRequest();
         var url = "";
         var params =  {
             name: headrName.value,
             email: headerEmail.value,
             password: headerPass.value
         }
         http.open("POST", url, true);
         http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         http.send(JSON.stringify(params))
         this.reset();
     }
  }, false);

  forms[1].addEventListener('submit',
    function(e){
      e.preventDefault();
      if(nameValidate(contactName.value) && emailValidate(contactEmail.value) 
      	  && sbjValidate(contactSbj.value && msgValidate(contactMsg.value))){
         var http = new XMLHttpRequest();
         var url = "";
         var params =  {
             name: contactName.value,
             email: contactEmail.value,
             sbj: contactSbj.value,
             msg: contactMsg.value
         }
         http.open("POST", url, true);
         http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         http.send(JSON.stringify(params))
         this.reset();



      }
    }, false);


  headrName.addEventListener("keydown", function(e){  	
     if(!nameValidate(headrName.value))   { 
     headrName.classList.add("redinputbottom");   
    }
     else headrName.classList.remove("redinputbottom");
  }, false);
   
  contactName.addEventListener("keydown", function(e){  	
     if(!nameValidate(contactName.value))   { 
     contactName.classList.add("redinputbottom");   
    }
     else contactName.classList.remove("redinputbottom");
  }, false);
   

  headerEmail.addEventListener("keydown", function(e){  	
     if(!emailValidate(headerEmail.value))   { 
     headerEmail.classList.add("redinputbottom");   
    }
     else headerEmail.classList.remove("redinputbottom");

  }, false);

  contactEmail.addEventListener("keydown", function(e){  	
     if(!emailValidate(contactEmail.value))   { 
     contactEmail.classList.add("redinputbottom");   
    }
     else contactEmail.classList.remove("redinputbottom");

  }, false);



  function  emailValidate(str){
    var pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+$/;   
    if(!pattern.test(str.trim())) {
    	return false;
    }
    return true;
  };
  
  function nameValidate(str){
     var pattern = /^[a-zA-Z]+(\s+)?([a-zA-Z]+)?$/;   
    if(!pattern.test(str.trim())) {
    	return false;
    }
    return true;
  };

   function sbjValidate(str){
    if(str.length < 10) {
    	return false;
    }
    return true;
  };
  function msgValidate(str){
    if(str.length < 10) {
    	return false;
    }
    return true;
  };
 
})();

