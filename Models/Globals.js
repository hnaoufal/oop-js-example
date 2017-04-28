/* In this Object you can define your global Variables */
var Globals = function() {

    /* private Variables */
    var firstName = "hans";
    var lastName = "Peter";
    var postalCode = "13357 Berlin";
    var street = "Prinzenallee 1a";
    var url = "htttp://localhost:6222";
    var address= "hans";

    /* Getters */
    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.getPostalCode = function() {
        return postalCode;
    };
    this.getStreet = function() {
        return street;
    };
    this.getUrl = function() {
        return url;
    };
    this.getAddress = function() {
        return address;
    };

    /* Setters */
    this.setFirstName = function(param) {
        firstName = param;
    };
    this.setLastName = function(param) {
        lastName = param;
    };
    this.setPostalCode = function(param) {
        postalCode = param;
    };
    this.setStreet = function(param) {
        street = param;
    };
    this.setUrl = function(param) {
        url = param;
    };
    this.setAddress = function(param) {
        address = param;
    };
};
