class Bike {

    constructor(model,price){
        this.model = model;
        this.price = price;
    }

    getBikeDetails(price,model){
        console.log("Get Bike Model Name---> "+model);
        console.log("Get Bike Price Details---> "+price);
    }


}

var getModelName = new Bike("FZ",100000);
console.log(getModelName.model);
console.log(getModelName.price);
getModelName.getBikeDetails(getModelName.price,getModelName.model);