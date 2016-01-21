var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.message;
    };
    return Greeter;
})();
//new Greeter("World").greet(); 
//# sourceMappingURL=greeter.js.map