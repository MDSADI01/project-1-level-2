

const formatValue = (param : string | number |boolean)=>{
  if(typeof param ==='string'){
    return param.toUpperCase();
  }else if(typeof param ==='number'){
    return param*10;
  }else if(typeof param ==='boolean'){
       return !param;
  }
}



console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(false));


//Problem 2 

const getLength = <T>(param : T )=>{
    if(typeof param ==='string'){
        return param.length;
    }
    else if(Array.isArray(param)){
        return param.length;
    }
}

console.log(getLength('typescript'))
console.log(getLength([10, 20, 30, 40]))


//Problem - 3

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


const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());


//Problem 4


const books  = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
  ];

  type Products = {
    title: string;
    rating : number;
  }

  const filterByRating = (param : Products[]): Products[] =>{
      return param.filter((product)=>product.rating>=4);
  }
  console.log(filterByRating(books))

//   problem 5

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
  ];

type Users = {
    id : number;
    name:string;
    email:string;
    isActive:boolean;
}
 
const filterActiveUsers = (param : Users[]) : Users[] =>{
    return param.filter((user)=>user.isActive)
}
 
console.log(filterActiveUsers(users));

//Problem 6


interface Book {
    title:string;
    author:string;
    publishedYear : number;
    isAvailable:boolean;
}

const printBookDetails = (param : Book)=>{
   return `Title: ${param.title}, Author: ${param.author}, Published: ${param.publishedYear}, Available:${param.isAvailable}`
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
  };
  
console.log(printBookDetails(myBook));

  //Problem 7

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

  const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

//Problem-8

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

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
  ];
  
  console.log(calculateTotalPrice(products)); // 127.5
  