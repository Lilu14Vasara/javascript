class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){//if we set get propery then always set setter property
        return `${this._password}hitesh`
    }

    set password(value){//this.password =value ...both constructor and setter method set value then stack exceeded
        this._password = value//underscore and password in both getter and setter
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

// const tea=Object.create(User)
// console.log(tea.email);  _:for private property