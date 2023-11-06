// 1. const array = [1,2,3,4,5]. Yeni array yaradın və bu array-in əksinə düzülmüş formada olsun (e.x [5,4,3,2,1])
const array = [1, 2, 3, 4, 5];
const newarray = [];
for (let i = array.length - 1; i >= 0; i--) {
  newarray.push(array[i]);
}
console.log(newarray);

// 2. const strArray = ["cat","mouse","panter","chicken"] bu array-dən "cat" sözünü silin və sonuna "bird" əlavə edin.

const strArray = ["cat", "mouse", "panter", "chicken"];
strArray.shift();
strArray.push("bird");
console.log(strArray);

// 3. const array = [1,2,3,4,5]. Bu ədədlərin yanına kvadrat-ların əlavə edin. (e.x [1,2,3,4,5,1,4,9,16,25])

const powArray = [1, 2, 3, 4, 5];
for (i = 0; i < 5; i++) {
  powArray.push(powArray[i] ** 2);
}
console.log(powArray);

// 4. Ədədlərdən ibarət array verilir. Array-də olan cüt ədədləri ekrana çıxardın.(Əlavə: yeni array-ə əlavə edin cüt ədədləri)

EdedArray = [2, 4, 5, 7, 8, 9, 22, 32, 43, 56, 23, 77, 89, 54, 66];
YeniArray = [];
for (let i = 0; i < EdedArray.length; i++) {
  if (EdedArray[i] % 2 == 0) {
    YeniArray.push(EdedArray[i]);
  }
}
console.log(YeniArray);
