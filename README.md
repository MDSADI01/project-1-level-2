# 1.What are some differences between interfaces and types in TypeScript?

 (1) Interface is mainly for object shapes.

 (2) Type can represent : object types, union types, intersections,primitive aliases,function types,tuples,literal types.

 (3) Interfaces can be extended multiple times and types can only be used one time


 # 2.What is the use of the keyof keyword in TypeScript? Provide an example.
 
 keyof means we can get the keys of properties. It takes an object type and returns a union of its keys.

 Example :
 type User = {
    name:string;
    age:number;
    email:string;
 }

 type UserKeys = keyof User;
 

 Output : "name" | "age" | "email"

