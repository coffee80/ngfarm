export default interface Building {

    position:number;
    type:"House"|"Service"|"Industry"|"Farm"|"Empty";
    name:string;
    
    subtype:string;
    productionrate:number;
    production:number;
}