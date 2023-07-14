//  ! INCRIMeNT  +
// let i = 0;
// ? постфиксная форма инкремента
// console.log(i++); //0
// console.log(i); //1

// ? префиксная форма инеремента
// console.log(++i);  //1
// console.log(i); //2

// ! DECREMENT -- === -1
// let i = 5;
// ? постфиксная форма декремента
// console.log(i--); //5
// console.log(i); //4
// ? префиксная форма декремента
// console.log(--i);  //4
// console.log(i);  //4

// ! +=. *=, -=
// let i = 0;
// i = i + 1;
// i = i + 2;
// i += 2;
// console.log(i);

// ! FOR
// for(начало; условие; шаг){
//     тело цикла
// }
// for(let i = 5; i <= 20; i++){
//     console.log(i);
// }

// let arr = ['kate', 'anna', 'alena']
// arr[0]
// arr[1]
// arr[2]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let str = 'hallo';
// let counter = 0;
// for(let i = 0; i < str.length; i++){
//     if(str[i] === 'l'){
//         counter++
//     }
//     // console.log(str[i]);
// }
// console.log(counter);

// ! CONTINUE- проспускает интерацию
// ! BREAK - ОСТАНОВИТ ЦИКЛ
// let tableware = ['plate-1', 'plate-2', 'cup', 'plate-3'];
// for(let i = 0; i < tableware.length; i++){
//     if(tableware[i] === 'cup'){
//         // continue
//         break
//     }else{
//         console.log(tableware[i]);
//     }
// }

// ! FOR IN -работает и с объектами и с массивами (перебирает объект)
// let person = {
//     name: 'Mary',
//     age: 19,
// }
// // person.name, person.age
// // person['name'], person['age']

// for(let key in person){
//     // console.log(key);
//     console.log(person[key]);
// }

// let arr = ['kate', 'anna', 'alena'];
// // 0
// // kate

// //1
// // anna
// for(let i in arr){
//     // console.log(i);
//     console.log(arr[i]);
// }

// !FOR OF
// let arr = ['kate', 'anna', 'alena', 1, true, {}];
// for(let item of arr) {
//     console.log(item);
// }

// // console.log('a')
// // console.log('b')
// // console.log('b')
// let str = 'Kubat';
// for(let world of str){
//     console.log(world);
// }

// ! WHILE - сначала проверяет условие, потом выполняет то, что в теле цикла
// начало
// while(условие){
//     Тело цикл
//     шаг внутри цикла
// }

// let i = 1;
// while( i <= 5){
//     console.log(i);
//     i++
// }

// let items = ['name', 'age', 'phone', 1, 2, 46, true];
// let i = 0;
// while(i < items.length){
//     console.log(items[i]);
//     i++
// }

// let i = 1;
// while (i < 1) {
//     console.log(i);
//     i++
// }

// ! DO ... WHILE сначла выполняет то, что в теле цикла, потом проверяет условие
// начало
// do {
//     тело цикла
//     шаг внутри тела цикла
// }while(условие)

// let i = 100;
// do {
//     console.log(i);
//     i++
// }while(i < 1)

// ! tasks
// ! 1
/*
Даны числа от 35 до 87. Найти и напечатать те из них, которые при делении на 7 дают остаток 1, 2 или 5.
*/

// for(let i = 35; i <= 87; i++){
//     if(i % 7 === 1 || i % 7 === 2 || i & 7 === 5){
//         console.log(i);
//     }
// }

// for (let i = 87; i >= 35; i--) {
//  if (i % 7 === 1 || i % 7 === 2 || i & 7 === 5) {
//             console.log(i);
//         }
//     }

// ! 2
// Есть массив с числами let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]. Составьте программу, которая определяет кол-во отрицательных, кол-во положительных и кол-во нулей в массиве.
// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0];
// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0];
// let negative = 0;
// let positive = 0;
// let zero = 0;
// for(let num of arr) {
//     // console.log(num);
//     if(num < 0) {
//         negative++
//     }
//     if(num >0) {
//         positive++
//     }
//     if(num === 0) {
//         zero++
//     }
// }
// console.log(positive, negative, zero);  //4, 2, 3
