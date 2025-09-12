class User {
    email: string
    name: string
    country: string = "Nepal"
    constructor(email: string, name: string) {
        this.email = email,
            this.name = name
    }
}

const me = new User("Pra@gmail.com", "DDD")
me.country = "India"