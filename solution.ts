

const formatValue = (param : string | number |boolean)=>{
  if(typeof param ==='string'){
    return param.toUpperCase();
  }else if(typeof param ==='number'){
    return param*10;
  }else if(typeof param ==='boolean'){
       return !param;
  }
}







const getLength = <T>(param : T )=>{
    if(typeof param ==='string'){
        return param.length;
    }
    else if(Array.isArray(param)){
        return param.length;
    }
}





class Person {
    name : string;
    age : number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    getDetails() : string {
       return `'Name : ${this.name} , Age : ${this.age}'`;
    }
}









  type Products = {
    title: string;
    rating : number;
  }

  const filterByRating = (param : Products[]): Products[] =>{
      return param.filter((product)=>product.rating>=4);
  }
  



type Users = {
    id : number;
    name:string;
    email:string;
    isActive:boolean;
}
 
const filterActiveUsers = (param : Users[]) : Users[] =>{
    return param.filter((user)=>user.isActive)
}
 


interface Book {
    title:string;
    author:string;
    publishedYear : number;
    isAvailable:boolean;
}

const printBookDetails = (param : Book)=>{
   return `Title: ${param.title}, Author: ${param.author}, Published: ${param.publishedYear}, Available:${param.isAvailable}`
}


  


  const getUniqueValues = <T extends string | number>(arr1:T[],arr2:T[]): T[]=>{

    const combinedArray : T[] = [];
    
    const addUnique = (arr : T[])=>{
        for(let i=0 ;i<arr.length;i++){
            let isDuplicate = false;

            for(let x=0; x<combinedArray.length; x++){
                if(arr[i] === combinedArray[x]){
                    isDuplicate = true;
                    break;
                }
            }
            if(!isDuplicate){
                combinedArray.push(arr[i]);
            }
        }
    }

    addUnique(arr1);
    addUnique(arr2);

    return combinedArray;
   
  }

 



type Item = {
  name:string;
  price: number;
  quantity:number;
  discount?:number;
}
const calculateTotalPrice = (products:Item[]):number=>{
    return products.reduce((total, product)=>{
        const { price,quantity, discount} = product;

        const discountedPrice = discount ? price * quantity * (1-discount/100) : price * quantity;

        return total+discountedPrice;

    },0)
}


  
 
  