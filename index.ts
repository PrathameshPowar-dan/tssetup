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
console.log(insta.getReel(5)); 


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

const R: number[] = [1, 2, 3, 4, 5]

function i4<T>(v: T): T {
    return v;
}

i4(R)

interface Boot {
    name: string
    price: number
}

function i5<T>(v: T[]): T[] {
    console.log(v.length)
    return v;
}

i5(R)

const Gennn = <T>(p: T[]): T | undefined => {
    const index = 2;
    return p[index]
}

console.log("Gen ",Gennn(R))

function I9<T,U>(ValT: T,ValU: U):object{
    return {
        ValT,
        ValU
    }
}


interface Q{
    question:string,
    answer:string
}

interface C{
    name:string,
    owner:string,
    subject:string
}


class Sellabe<T>{
    public cart: T[]=[]
    AddCart(pro: T){
        this.cart.push(pro)
    }
}

function ttt(typ: number | string) {
    if (typeof typ === "number") {
        return typ;
    }
    return typ.toLocaleLowerCase();
}

function ID(i: string | null) {
    if (!i) {
        console.log("Please provide a ID")
    }
    return i?.toLocaleLowerCase();
}

interface Userrr {
    name: string,
    email: string
}

interface Adminnn {
    name: string,
    email: string,
    admin: boolean
}

function isAdmin(p: Userrr | Adminnn) {
    if ("admin" in p) {
        return p.admin;
    }
    return p;
}

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());


    } else {
        console.log(x.toUpperCase());

    }
}

type Fish = { swim: () => {} }
type Bird = { fly: () => {} }

function isFish(val: Fish | Bird): val is Fish {
    return (val as Fish).swim !== undefined
}

function Food(val: Fish | Bird) {
    if (isFish(val)) {
        val
        return "Fish Food"
    } else {
        val
        return "Bird Food"
    }
}


interface Round {
    kind: "cirle",
    radius: number
}

interface Box {
    kind: "square",
    side: number
}

interface Rec {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Round | Box | Rec

function Shapes(v: Shape) {
    switch (v.kind) {
        case "cirle":
            return Math.PI ** 2
        case "square":
            return v.side * v.side
        case "rectangle":
            return v.length * v.width
        default:
            const defaultshape: never = v
            return defaultshape
    }
}

export { };