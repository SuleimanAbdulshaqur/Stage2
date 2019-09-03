function CONTACTSULE()
{ 
    var name = document.forms["ContactForm"]["name"];               
    var email = document.forms["ContactForm"]["email"];    
    var title = document.forms["ContactForm"]["title"];
    var message = document.forms["ContactForm"]["message"];  
   
    if (name.length<4)                                  
    { 
        window.alert("Name: Please enter at least 4 characters."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("E-mail: Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("E-mail: Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("E-mail: Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (title.value == "")                           
    { 
        window.alert("Please enter a title."); 
        title.focus(); 
        return false; 
    } 
   
    if (message.length < 20)                        
    { 
        window.alert("Message: Please enter at least 20 characters"); 
        message.focus(); 
        return false; 
    } 
   
    return true; 
}