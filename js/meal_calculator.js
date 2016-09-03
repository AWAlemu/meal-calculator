var Diner = function(name){
    this.name = name;
    this.dishes = {};
    this.total = 0;
    this.tax = 0;
    this.tip = 0;
};

Diner.prototype.dishTotal = function() {
    for (var dish in this.dishes) {
        this.total += this.dishes[dish].cost;
    }
};

Diner.prototype.calculateTax = function() {
    var tax_rate = 0.06;
    this.tax = this.total * tax_rate;
};

Diner.prototype.calculateTip = function() {
    var tip_percent = 0.20;
    this.tip = this.total * tip_percent;
};

Diner.prototype.calculate = function() {
    this.dishTotal();
    this.calculateTax();
    this.calculateTip();
};

var Bill = function(diners) {
    this.diners = diners;
};

Bill.prototype.printTotalandTax = function() {
    var total = 0;
    var tax = 0;
    for(var diner in this.diners) {
        var dinr = this.diners[diner];
        dinr.calculate();
        total += dinr.total;
        tax += dinr.tax;
    }
    console.log('Total: $' + total.toFixed(2));
    console.log('Tax: $' + tax.toFixed(2));
};

Bill.prototype.printDinersTips = function() {
    var tips = 0;
    for (var diner in this.diners) {
        var dinr = this.diners[diner];
        tips += dinr.tip;
    }
    console.log('Tip: $' + tips.toFixed(2));
};

Bill.prototype.printBillBreakdown = function() {
    console.log('***Bill Breakdown by Diner***');
    for (var diner in this.diners) {
        var dinr = this.diners[diner];
        console.log('Diner: ' + dinr.name);
        console.log('Total: $' + dinr.total.toFixed(2));
        console.log('Tax: $' + dinr.tax.toFixed(2));
        console.log('Tip: $' + dinr.tip.toFixed(2));
    }
};

$(function() {
    var diner1 = new Diner('Alex');
    var diner2 = new Diner('Blake');
    var diner3 = new Diner('Chris');
    var bill = new Bill({diner1, diner2, diner3});
    diner1.dishes.dish1 = {name: 'item1', cost: 10};
    diner1.dishes.dish2 = {name: 'item2', cost: 22};
    diner2.dishes.dish1 = {name: 'item1', cost: 9};
    diner2.dishes.dish2 = {name: 'item2', cost: 24};
    diner3.dishes.dish1 = {name: 'item1', cost: 11};
    diner3.dishes.dish2 = {name: 'item2', cost: 19};
    bill.printTotalandTax();
    bill.printDinersTips();
    bill.printBillBreakdown();
});
