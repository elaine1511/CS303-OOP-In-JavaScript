// ➢ Question 1: Fix a function that loses “this” (do with bind, wrapper, call, and apply)
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") ok();
    else fail();
}
let user = {
    name: 'John',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    },
};
//use bind
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//use wrapper and call
askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));

//use wrapper and apply
askPassword(() => user.loginOk.apply(user), () => user.loginFail.apply(user));

// Question 2: Partial application for login (do with bind, wrapper, call, and apply)
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password === "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(() => user.login(true), () => user.login(false));

// Question 3: Fix the code below using bind
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};
group.showList();
