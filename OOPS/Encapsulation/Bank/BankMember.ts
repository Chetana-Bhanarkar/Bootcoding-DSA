export class BankMember{
    private _savingBalance : number ; 

    

    public get SavingBalance():number{
        return this._savingBalance
    }

    public set SavingBalance(v : number){
         this._savingBalance = v ; 
    }

    constructor(savingBalance : number) {
        this._savingBalance = savingBalance ; 
    } 

    public deposit(amount:number) : void{
        this._savingBalance += amount
    }

    public withdrawl(amount : number):void{
        if(this.SavingBalance < amount){
            console.log('insufficient balance');
            return ; 
        }
        
        this._savingBalance -= amount ;
    }
}