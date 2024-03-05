export interface Product{
    id:string;
    imgPath:string[];
    name:string;
    description:string;
    price:number;
    category:string;
    size:string[];
    fabric:string;
    color:string;
    collection?:string;
}
// Наследую все свойства от Product, но тип size изменяю 
export interface OrderProduct extends Omit<Product,'size'>{
    size:string;
}