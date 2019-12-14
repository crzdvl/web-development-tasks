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
    auth (id, pin) {
        if (!this.isAuth) {
            for (let i = 0;i < this.users.length; i++) {
                if (this.users[i].id === id && this.users[i].pin === pin) {
                    this.currentUser = Object.assign({}, ATM.users[i]);    
                    this.isAuth = true;
                }
            }
            if (this.isAuth) {
                this.ATMLogs.push(id + " logged in.");
                console.log(this.currentUser.type + ", you have successfully logged in.");
            } else {
                console.log("You've writted wrong login or password.");
                this.ATMLogs.push("Someone with " + id + " wanted to log in.");
            }
            
        } else {
            console.log("You've sucessfully logged in");
            this.ATMLogs.push(this.currentUser.id + ', wanted to login again.');
        }
    },
    // check current debet
    check() {
        if (!this.isAuth) {
            console.log("You need to log in.");
            this.ATMLogs.push("Someone wanted to check current debet.");
        } else {
            console.log(this.currentUser.type + ', you have ' + this.currentUser.debet + '¥ in your debet.');
            this.ATMLogs.push(this.currentUser.id + ', checked their debet.');
        }
    },
    // get cash - available for user only
    getCash(amount) {
        amount = Number(amount);

        if (!this.isAuth) {
            this.ATMLogs.push("Someone wanted to log get cash.");
            console.log("You need to log in.")
        } else {
            if (amount < this.currentUser.debet){
                if (amount < this.cash){
                    this.currentUser.debet -= amount;
                    this.cash -= amount;
                    console.log(this.currentUser.type + ', you get ' + amount + '¥ from your debet.');
                    console.log(this.currentUser.type + ', you have ' + this.currentUser.debet + '¥ in your debet NOW.');
                    this.ATMLogs.push(this.currentUser.id + ', got cash from their debet.');
                } else {
                    console.log("ATM doesn't have enough money.");
                    this.ATMLogs.push(this.currentUser.id + ", wanted to get cash from him debet, but ATM didn't have enough money.");
                }
            } else {
                console.log("You don't have enough money");
                this.ATMLogs.push(this.currentUser.id + ", wanted to get cash from their debet, but he doesn't have enough money.");
            } 
        }
    },
    // load cash - available for user only
    loadCash(amount) {
        amount = Number(amount);        

        if (!this.isAuth) {
            this.ATMLogs.push("Someone wanted to load cash.");
            console.log("You need to log in.")
        } else {
            if (this.currentUser.type != "admin"){
                this.currentUser.debet += amount;
                this.cash += amount;
                console.log(this.currentUser.type + ', you have ' + this.currentUser.debet + '¥ in your debet NOW.');
                this.ATMLogs.push(this.currentUser.id + ", load cash to him debet.");
            } else {
                console.log("You can't use it.");
                this.ATMLogs.push(this.currentUser.id + ", wanted to load cash at debet.");
            }
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    loadAtmCash(amount) {
        amount = Number(amount);

        if (!this.isAuth) {
            this.ATMLogs.push("Someone wanted to load at ATM.");
            console.log("You need to log in.")
        } else {
            if (this.currentUser.type === "admin"){
                this.cash += amount;
                console.log('ATM has ' +  this.cash + '¥ NOW.');
            } else {
                console.log("You can't use it.");
                this.ATMLogs.push(this.currentUser.id + ", wanted to load cash at ATM debet.");
            }
        }
    },
    // get cash actions logs - available for admin only - EXTENDED
    getLogs() {
        if (!this.isAuth) {
            this.ATMLogs.push("Someone wanted to get logs.");
            console.log("You need to log in.")
        } else {
            if (this.currentUser.type === "admin") {
                for (let logs of this.ATMLogs) {
                    console.log(logs);
                }
            } else {
                console.log("You can't use it.");
                this.ATMLogs.push(this.currentUser.id + ", wanted to get logs.");
            }
        }
    },
    // log out
    logout() {
        if (this.isAuth) {
            this.isAuth = false;
            this.ATMLogs.push(this.currentUser.id + " logged out.");
            this.currentUser = {};
            console.log("You've sucessfully logged out.");
       }
    }
};