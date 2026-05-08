"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userStatus;
(function (userStatus) {
    userStatus[userStatus["active"] = 0] = "active";
    userStatus[userStatus["inactive"] = 1] = "inactive";
    userStatus[userStatus["suspended"] = 2] = "suspended";
})(userStatus || (userStatus = {}));
function CreateUser(age, name, status) {
    return name + age + status;
}
CreateUser(22, "maryam", userStatus.active);
var prices_array = new Array(10, 20, 30, 40, 50);
calculateDiscount(prices_array);
function calculateDiscount(prices) {
    prices.forEach((price) => {
        var discount = (prices[price] = +price) * 0.1;
    });
}
;
