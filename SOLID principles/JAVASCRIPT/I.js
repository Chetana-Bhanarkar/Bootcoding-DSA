// I -> Interface segmented principle

// Def :- Interface should be such , that client should not be implement the unneccessary functions they do  not need. 


interface WaiterInterface {
    void serve();
    void takeOrder() ; 
}

interface ChefInterface{ 
    void cook() ;
    void decideMenu() ;
}


class Waiter implements WaiterInterface{
    public void serve(){
        console.log("Serve the food to the customers");
    }

    public void takeOrder(){
        console.log("Taking an order from the customers");
    }
}


class Chef implements ChefInterface{
    public void cook(){
        console.log("Cooked the food on the customer order basis.");
    }

    public void decideMenu(){
        console.log("Decide the menu on today's possibility.");
    }
}

const w = new Waiter();
const c = new Chef();

w.serve()
w.takeOrder();

c.cook();
c.decideMenu()