const ATM = {
    isAuth: false, 
    currentUser: {},
    // all cash available in ATM
    cash: 2000,
    // all available users
    users: [
        { id: "0000", pin: "000", debet: 0, type: "admin" }, // EXTENDED
        { id: "0025", pin: "123", debet: 675, type: "user"},
        { id: "0026", pin: "037", debet: 1969, type: "user"}
    ],

    ATMLogs: [],
    // authorization
    auth(id, pin) {
        if(!this.isAuth){
            this.isAuth = true;
            let logIn = false;
            for(let i = 0;i < this.users.length; i++) {
                if(this.users[i].id === id && this.users[i].pin === pin) {
                    this.currentUser = i;
                    logIn = true;
                }
            }
            if(logIn) {
                this.ATMLogs.push(id + " logged in.");
                console.log(this.users[this.currentUser].type + ", you have successfully logged in.");
            } else {
                console.log("You've writted wrong login or password.");
                this.ATMLogs.push("Someone with " + id + " wanted to log in.");
            }
        } else {
            console.log("You've sucessfully logged in");
        }
    },
    // check current debet
    check() {
        let user = this.users[this.currentUser];

        if(!this.isAuth) {
            this.ATMLogs.push("Someone wanted to check current debet.");
            console.log("You need to log in.");
        } else {
            console.log(user.type + ', you have ' + user.debet + '¥ in your debet.');
        }
    },
    // get cash - available for user only
    getCash(amount) {
        amount = new Number(amount);
        let user = this.users[this.currentUser];

        if(!this.isAuth) {
            this.ATMLogs.push("Someone wanted to log get cash.");
            console.log("You need to log in.")
        } else {
            if(amount < user.debet){
                if(amount < this.cash){
                    user.debet -= amount;
                    this.cash -= amount;
                    console.log(user.type + ', you get ' + amount + '¥ from your debet.');
                    console.log(user.type + ', you have ' + user.debet + '¥ in your debet NOW.');
                } else {
                    console.log("ATM doesn't have enough money.");
                }
                
            } else {
                console.log("You don't have enough money");
            } 
        }
    },
    // load cash - available for user only
    loadCash(amount) {
        amount = new Number(amount);        
        let user = this.users[this.currentUser];

        if(!this.isAuth) {
            this.ATMLogs.push("Someone wanted to load cash.");
            console.log("You need to log in.")
        } else {
            if(user.type != "admin"){
                user.debet += amount;
                console.log(user.type + ', you have ' + user.debet + '¥ in your debet NOW.');
            } else {
                console.log("You can't use it.");
            }
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    loadAtmCash(amount) {
        amount = new Number(amount);
        let user = this.users[this.currentUser];

        if(!this.isAuth) {
            this.ATMLogs.push("Someone wanted to load at ATM.");
            console.log("You need to log in.")
        } else {
            if(user.type === "admin"){
                this.cash += amount;
                console.log('ATM has ' +  this.cash + '¥ NOW.');
            } else {
                console.log("You can't use it.");
            }
        }
    },
    // get cash actions logs - available for admin only - EXTENDED
    getLogs() {
        if(!this.isAuth) {
            this.ATMLogs.push("Someone wanted to get logs.");
            console.log("You need to log in.")
        } else {
            if(this.users[this.currentUser].type === "admin"){
                for(let logs of this.ATMLogs){
                    console.log(logs);
                }
            } else {
                console.log("You can't use it.");
            }
        }
    },
    // log out
    logout() {
        if(this.isAuth){
            this.isAuth = false;
            this.ATMLogs.push(this.users[this.currentUser].id + " logged out.");
            console.log("You've sucessfully logged out.");
       }
    }
};