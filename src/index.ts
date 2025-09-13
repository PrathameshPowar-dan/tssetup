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

interface Photoo {
    CameraMode: string,
    filter: string,
    Zoom: string
}

interface Stores {
    CreateStory(): void
}

class Instagrram implements Photoo {
    constructor(
        public CameraMode: string,
        public filter: string,
        public Zoom: string
    ) {

    }
}

class Redditt implements Photoo, Stores {
    constructor(
        public CameraMode: string,
        public filter: string,
        public Zoom: string,
        public Redds: string
    ) {

    }

    CreateStory(): void {
        console.log("Store near you")
    }
}


abstract class Photo {
    constructor(
        public Cam: string,
        public filter: string,
        public Zoom: number
    ) { }

    abstract see(): void;
    abstract ss(): void;

    getReel(n: number): number {
        return n;
    }
}

class Instagram extends Photo {
    see(): void {
        console.log("Viewing photo on Instagram");
    }

    ss(): void {
        console.log("Taking screenshot...");
    }
}


const insta = new Instagram("Sony", "Vintage", 3);
insta.see();            // "Viewing photo on Instagram"
console.log(insta.getReel(5)); // 5


const score: Array<number> = []
const names: Array<string> = []

function i1(v: boolean | number): boolean | number {
    return v;
}

function i2(v: any): any {
    return v;
}


function i3<Type>(v: Type): Type {
    return v;
}

const R: number[] = [1,2,3,4,5]

function i4<T>(v: T): T {
    return v;
}

// i4(R)

interface Boot{
    name: string
    price: number
}

// i3<Boot>({})
