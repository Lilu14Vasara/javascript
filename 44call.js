function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //setusername() is not working because first function after call executation contex ko hta deta hai or variable delete kr deta hai
    SetUsername.call(this, username)//call keyword use for execute and this paramer first pass
    // because after call its not delet all its part 
    //,after call executation contex ko hta deta hai or variable delete kr deta hai
                                  
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);