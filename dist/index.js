class User {
    email;
    name;
    count = 1;
    country = "Nepal";
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    get FaceEmail() {
        return `Face${this.email}`;
    }
    get Recount() {
        return this.count;
    }
    set SeCount(SSS) {
        if (SSS <= 1) {
            throw new Error("This is Wrong");
        }
        this.count = SSS;
    }
    delTOKEN() {
        console.log("TT is GONE");
    }
}
class Sub extends User {
    fam = true;
    CHcount() {
        this.count = 4;
    }
}
class Instagrram {
    CameraMode;
    filter;
    Zoom;
    constructor(CameraMode, filter, Zoom) {
        this.CameraMode = CameraMode;
        this.filter = filter;
        this.Zoom = Zoom;
    }
}
class Redditt {
    CameraMode;
    filter;
    Zoom;
    Redds;
    constructor(CameraMode, filter, Zoom, Redds) {
        this.CameraMode = CameraMode;
        this.filter = filter;
        this.Zoom = Zoom;
        this.Redds = Redds;
    }
    CreateStory() {
        console.log("Store near you");
    }
}
class Photo {
    Cam;
    filter;
    Zoom;
    constructor(Cam, filter, Zoom) {
        this.Cam = Cam;
        this.filter = filter;
        this.Zoom = Zoom;
    }
    getReel(n) {
        return n;
    }
}
class Instagram extends Photo {
    see() {
        // console.log("Viewing photo on Instagram");
    }
    ss() {
        // console.log("Taking screenshot...");
    }
}
const insta = new Instagram("Sony", "Vintage", 3);
insta.see(); // "Viewing photo on Instagram"
// console.log(insta.getReel(5)); 
const score = [];
const names = [];
function i1(v) {
    return v;
}
function i2(v) {
    return v;
}
function i3(v) {
    return v;
}
const R = [1, 2, 3, 4, 5];
function i4(v) {
    return v;
}
// i3<Boot>({})
function i5(v) {
    // console.log(v.length)
    return v;
}
i5(R);
const Gennn = (p) => {
    const index = 2;
    return p[index];
};
console.log("Gen ", Gennn(R));
export {};
//# sourceMappingURL=index.js.map