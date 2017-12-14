export class contact{
    
        id: number;
        firstName: string;
        lastName: string;
        fullName: string;
        email: string;
        persoPhone : string;
        proPhone : string;
        gender : string;
        age : number;
    
    
        constructor(id:number,firstName: string,lastName: string,fullName: string,email: string,persoPhone : string,proPhone : string, gender : string,age : number){
            this.id = id;
            this.firstName =firstName;
            this.lastName=lastName;
            this.fullName=fullName;
            this.email=email;
            this.persoPhone=persoPhone ;
            this.proPhone=proPhone ;
            this.gender=gender ;
            this.age =age;
        }
    
        
    }