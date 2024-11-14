"use strict";

// const arr = [2,3,4,5];
// // for (let i = 0 ; i < arr.length; i++){
// //     console.log(`element at position ${i} : ${arr[i]}`);
// // }

// const [r,s,t,u] = arr;

// console.log(`the sum of all the element in the array is :${r+s+t+u}`);

// const personalInfo = {
//     firstName : "Adewale",
//     age : 40,
//     placement : "Lagos",
//     designation : "Sales Manager",
//     salary : 100000,
//     friends : ['Paul','tunbosun','Amos','Felicia'],
//     fruit : ['Apple','banana', 'Pinapple','Orange'],

//     knowYou : function(friendPosition,fruitPosition ){
//         return([this.friends[friendPosition],this.fruit[fruitPosition]]);
//     }
// }

// const[friends,fruit] = (personalInfo.knowYou(1,1));
// console.log(friends,fruit)
// let arr = [2,3,4,6];
// let [a,d,f,g,e,c,h] = arr;
// console.log(a,d,f,g,e);

const primaryFriends = ['Nuhu','Kabiru','Dada','Joseph'];
const secondaryFriend = ['Iyabo','Felicia','Paul','Olatunbosun','Amos'];
const tertiaryFriends = ['Edward','Olumide', 'Taiwo','Hidee'];

const allFriends =[...primaryFriends,...secondaryFriend,...tertiaryFriends];
//console.log(allFriends);
for(const [i,individual]  of allFriends.entries()){
    console.log(i + 1 + ": " + individual)  
}


