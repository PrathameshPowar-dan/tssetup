class User {
    email;
    name;
    country = "Nepal";
    constructor(email, name) {
        this.email = email,
            this.name = name;
    }
}
const me = new User("Pra@gmail.com", "DDD");
me.country = "India";
console.log(me)
export {};
//# sourceMappingURL=index.js.map