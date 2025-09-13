class User {

    protected count = 1;

    readonly country: string = "Nepal"
    constructor(
        private email: string,
        public name: string
    ) { }

    get FaceEmail(): string {
        return `Face${this.email}`
    }

    get Recount(): number {
        return this.count
    }
    set SeCount(SSS: number) {
        if (SSS <= 1) {
            throw new Error("This is Wrong")
        }
        this.count = SSS
    }

    private delTOKEN() {
        console.log("TT is GONE")
    }

}

class Sub extends User {
    fam: boolean = true;
    CHcount() {
        this.count = 4
    }
}

interface Photo {
    CameraMode: string,
    filter: string,
    Zoom: string
}

class Instagram implements Photo {
    constructor(
        public CameraMode: string,
        public filter: string,
        public Zoom: string
    ) {

    }
}