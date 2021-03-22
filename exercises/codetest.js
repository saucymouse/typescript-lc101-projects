var Tiger = /** @class */ (function () {
    function Tiger() {
        this.roar = 'rooooaaaarrrr';
    }
    return Tiger;
}());
var Lion = /** @class */ (function () {
    function Lion() {
        this.roar = 'ROOOOAAAAARRRRRR';
    }
    return Lion;
}());
function pantheraSounds(panthera) {
    console.log("Panthera says " + panthera.roar);
}
var tiger = new Tiger();
var lion = new Lion();
pantheraSounds(tiger);
pantheraSounds(lion);
