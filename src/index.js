var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.count = 1;
        this.country = "Nepal";
    }
    Object.defineProperty(User.prototype, "FaceEmail", {
        get: function () {
            return "Face".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Recount", {
        get: function () {
            return this.count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "SeCount", {
        set: function (SSS) {
            if (SSS <= 1) {
                throw new Error("This is Wrong");
            }
            this.count = SSS;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.delTOKEN = function () {
        console.log("TT is GONE");
    };
    return User;
}());
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fam = true;
        return _this;
    }
    Sub.prototype.CHcount = function () {
        this.count = 4;
    };
    return Sub;
}(User));
var Instagrram = /** @class */ (function () {
    function Instagrram(CameraMode, filter, Zoom) {
        this.CameraMode = CameraMode;
        this.filter = filter;
        this.Zoom = Zoom;
    }
    return Instagrram;
}());
var Redditt = /** @class */ (function () {
    function Redditt(CameraMode, filter, Zoom, Redds) {
        this.CameraMode = CameraMode;
        this.filter = filter;
        this.Zoom = Zoom;
        this.Redds = Redds;
    }
    Redditt.prototype.CreateStory = function () {
        console.log("Store near you");
    };
    return Redditt;
}());
var Photo = /** @class */ (function () {
    function Photo(Cam, filter, Zoom) {
        this.Cam = Cam;
        this.filter = filter;
        this.Zoom = Zoom;
    }
    Photo.prototype.getReel = function (n) {
        return n;
    };
    return Photo;
}());
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.see = function () {
        console.log("Viewing photo on Instagram");
    };
    Instagram.prototype.ss = function () {
        console.log("Taking screenshot...");
    };
    return Instagram;
}(Photo));
var insta = new Instagram("Sony", "Vintage", 3);
insta.see(); // "Viewing photo on Instagram"
console.log(insta.getReel(5)); // 5
var score = [];
var names = [];
function i1(v) {
    return v;
}
function i2(v) {
    return v;
}
function i3(v) {
    return v;
}
var R = [1, 2, 3, 4, 5];
function i4(v) {
    return v;
}
// i3<Boot>({})
function i5(v) {
    console.log(v.length);
    return v;
}
i5(R);
