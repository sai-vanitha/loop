/**
 * task-1:Write a for loop to print the numbers from 1 to 20.
 */
for(i=1;i<=20;i++){
    console.log(i);
}
console.log(`--------------------------------------------------------------------------------------------------`)
/**
 * task-2:Create a for loop to print the squares of numbers from 1 to 10.
 */
for(i=1;i<=10;i++){
    console.log(`Square of ${i} is: ${i * i}`);
}
console.log(`------------------------------------------------------------------------------------------------`)
/**
 * 3.Use a for loop to print the first 10 multiples of 5.
 */
for(i=1;i<=10;i++){
    console.log(`5 * ${i} = ${5 * i}`);
}
console.clear(`---------------------------------------------------------------------------------------------`);
/**
 * 4.Write a for loop to print numbers from 20 to 1 in reverse order.
 */
for(i=20;i>=1;i--){
    console.log(i);
}
console.clear(`-------------------------------------------------------------------------------------------`);
/**
 * 5.Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).
 */
for (i = 20; i >= 2; i -= 2) {
        console.log(i);
}
console.log(`----------------------------------------------------------------------------------------------`)
/**
 * 6.	Print each element of the array
–	Input: [10, 20, 30, 40, 50]

–	Expected Output:
 	10  
20  
30  
40  
50  
 */
var array = [10, 20, 30, 40, 50];
for (i = 0; i < array.length; i++) {
    console.log(array[i] + " ");
}
console.clear(`--------------------------------------------------------------`);
/**
 * 7.	Print the index of each element along with its value
–	Input: ['apple', 'banana', 'cherry']

–	Expected Output:
 	Index 0: apple  
Index 1: banana  
Index 2: cherry  
 */
var fruits = ['apple', 'banana', 'cherry'];
for (i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}