/* Main Function */
(function() {
    /* variables */
    var globals = new Globals();
    var delegate = new Delegate("a", "b", "c");

    console.log("GetParam1: ", delegate.getParam1());
    console.log("SetParam1 = 5: ", delegate.setParam1(5));
    console.log("GetParam1: ", delegate.getParam1());

    /* mainly delegate */
    console.log("This is the Address: ", globals.getAddress());
    delegate.printClientName(globals);
    delegate.methode1(globals);
    console.log("delegateRoot: ", delegate.squareRoot(3));
})();

