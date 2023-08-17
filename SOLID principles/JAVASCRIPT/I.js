// I -> Interface segmented principle

// Def :- Interface should be such , that client should not be implement the unneccessary functions they do  not need. 


interface WaiterInterface {
    void serve();
    void takeOrder() ; 
}



class Waiter implements WaiterInterface{
    public void serve(){
        console.log("Serve the food to the customers");
    }

    public void takeOrder(){
        console.log("Taking an order from the customers");
    }
}