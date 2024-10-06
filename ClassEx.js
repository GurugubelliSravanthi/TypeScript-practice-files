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
var type = /** @class */ (function () {
    function type() {
    }
    type.prototype.getmeth = function () {
        return this.a;
    };
    type.prototype.setmeth = function (a) {
        this.a = a;
    };
    return type;
}());
var script = /** @class */ (function (_super) {
    __extends(script, _super);
    function script() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    script.prototype.assam = function () {
        console.log("ikuuuu");
    };
    return script;
}(type));
var obj = new script();
obj.setmeth(5);
obj.assam();
console.log(obj.getmeth());
