var Delegate = function(param1, param2, param3) {
    /* private */
    var param1 = param1;
    var param2 = param2;
    var param3 = param3;

    /* Getters */
    this.getParam1 = function() {
        return param1;
    };

    this.getParam2 = function() {
        return param2;
    };

    this.getParam3 = function() {
        return param3;
    };

    /* Setters */
    this.setParam1 = function(param) {
        return param1;
    };

    this.setParam2 = function(param) {
        param2 = param;
    };

    this.setParam3 = function() {
        param3 = param;
    };
};

Delegate.prototype.printClientName = function(globals) {
    console.log("Called from printClientName und has access to Globals: ", globals.getFirstName());
    console.log("Same here: ", globals.getLastName());
};

Delegate.prototype.methode1 = function(globals) {
    console.log("calls fullprint in Delegate and calls printClient:");
    this.printClientName(globals);
};

Delegate.prototype.squareRoot = function(a) {
    return a * a;
};
