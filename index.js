// For...of

const array = [2, 3, 4, 5, 6];

for (const key of array){
//    console.log(key)
}


// const myarr = new MyArray(4, 5, 6, 7, 8);

/*
for (const key of myarr){
       console.log(key)
    }
*/


/*
Symbol.iterator - це метод, який повертає об'єкт.
Метод реалізує принцип перебору.
Об'єкт, що повертається - наз. Ітератор.

В цьому об'єкті є метод next()

Метод next() повертає об'єкт. Об'єкт з двома властивостями:
{value,
done}
*/


for (let i = 0; i< array.length; i++) {
    array[i]
}