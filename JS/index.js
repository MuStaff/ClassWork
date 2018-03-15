// var login = process.argv[2];
// var password = process.argv[3];


// if (login == "mustafa" && password == "123") {
//     console.log("go");
// } else {
//     console.log("stop");
// }

// var age = parseInt(process.argv[2]);
// var sum = parseInt(process.argv[3]);

// if (age >= 2) {
//     console.log(sum + 10);
// } else if (age > 2) {
//     console.log(sum + 15);
// } else if (age < 4) {
//     console.log(sum + 15);
// } else if (age > 4) {
//     console.log(sum + 25);
// }


// var a = parseFloat(process.argv[2]);
// var b = parseFloat(process.argv[3]);



// if (a || b ) {
//     console.log("ok");
// } else {
//     console.log(`sum = ${a = b}`);
// }

// var a = parseInt(process.argv[2]);
// var b = parseInt(process.argv[3]);
// var c = parseInt(process.argv[4]);

// var c = ""
// var numb = process.argv[2];

// for (var i = 0; i < numb; i++) {
//     c += "#"
//     console.log(c);
// }

// var c = ""
// var numb =parseInt(process.argv[2]);


// var login = process.argv[2];

// switch (login) {
//     case "admin":
//         console.log("is admin");
//         break;
//     case "user":
//         console.log("is user");
//         break;
//     case "root":
//         console.log("is root");
//         break;
//     default:
//         console.log("is default");
// }


// var color = process.argv[2];

// switch (color) {
//     case "ff0000":
//         console.log("red");
//         break;
//     case "00ff00":
//         console.log("green");
//         break;
//     case "0000ff":
//         console.log("blue");
//         break;
//     default:
//         console.log("is default");
// }

// var len = +process.argv[2];

// var str1 = "", str2 = "", char1, char2;

// for (var i = 0; i < len; i++) {
//     if (i % 2 == 0) {
//         char1 = "#";
//         char2 = "_"
//     } else {
//         char1 = "_";
//         char2 = "#";
//     }
//     str1 = str1 + char1;
//     str2 = str2 + char2;
// }




// var num = +process.argv [2];
// var sum = +process.argv [3];

// var otvet = num >= 10 ? `Ответ: ${(sum/25%)*num}` : `Ответ: sum ;



// dodelat
// var len = +process.argv[2];

// var str1 = "", str2 = "", char1, char2;

// for (var i = 0; i < len; i++) {
//     //     if (i % 2 == 0) {
//     //         char1 = "#";
//     //         char2 = "_"
//     //     } else {
//     //         char1 = "_";
//     //         char2 = "#";
//     //     }
//     var str1 = i % 2 == 0 ? "#" : "_";
//     var str2 = i % 2 != 0 ? "_" : "#";

//     str1 = str1 + char1;
//     str2 = str2 + char2;
// }

// console.log()



// for (var i = 0; i > -100; i--) {
//     if (i % 10 != 0) {
//         continue;
//     }
//     console.log(i);
// }



// var array = [1, "test", false, "liga"];
// console.log(array[0]);
// console.log(process.argv);





// var password = ["asdasd", "root", "123123"];
// var userPassword = process.argv[2];

// for (var i = 0; i < 3; i++) {
//     if (userPassword == password[i]) {
//         console.log("you auth");
//         break;
//     }
// }














// var numb = ["2", "4", "6", "8", "10"];
// var userNumb = process.argv[2];

// for (var i = 0; i < 5; i++) {
//     if (userNumb == numb[i]) {
//         console.log("have");
//         break;
//     }
// }

// if (userNumb != numb) {
//     console.log("dont");
// }












// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var userName = process.argv[2];

// userName = parseInt(u_Num);
// var res = [];

// for (var i = arrey.length; i--;) {
//     for (var j = arrey.length; j--;) {
//         if (i === j) continue;

//         if (arrey[i] + arrey[j] === u_Num) {
//             res[res.length] = arrey[i];
//             res[res.length] = arrey[j];
//         }
//     }
// }


// console.log(res);





// console.log(Math.random());




// var t = Math.random() * 10;
// t = parseInt(t);

// console.log(t);


// var N = process.argv[2];
// var array = [];

// while (array.length < N) {
//     var t = parseInt(Math.random() * 1000);
//     array[array.length] = t;
// }





// var counter1 = array.length;
// var counter2 = array.length;

// while (counter1--) {
//     counter2 = array.length;
//     var item = array[counter1];
//     while (counter2--) {
//         if (item < array[counter2]) {
//             var buffer = array[counter2];
//             array[counter2] = item;
//         }
//     }
// }



// for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < array.length; j++) {
//         if (array[j] < array[j + 1]) {
//             var buffer = array[j];
//             array[j] = array[j + 1];
//             array[j + 1] + buffer;
//         }
//     }
// }

// console.log(array);


// function log(message) {
//     console.log(message);
// }

// log("test");

// function summ(a, b) {
//     console.log(a, b);
//     console.log(c);
// }

// var a = 1;
// var b = 2;
// var c = 3;

// summ(10, 22);





// function rand(min, max) {
//     var res = min + Math.random() * (max - min);
//     return res;
// }

// var a = parseInt(rand(2, 10));

// console.log(a);








// function numb(a) {
//     if (isNaN(a)) {
//         console.log("error");
//     } else {
//         return a % 2 == 0;
//     }
// }

// console.log(numb());






// hello("standart FCN");

// function hello(argument) {
//     console.log(argument);
// }

// HELLO("NOT standart FCN");

// var HELLO = function (argument) {
//     console.log(argument);
// }





// var str = "hello world     ";

// console.log(str[5]);
// console.log(str[str.length - 1]);




// function spase(str) {
//     var count = 0;
//     for (var i = str.length; i++;);
//     (" " === str[i]) && (count++);

//     return count;
// }

// console.log(spase(" 2 "));





// function counting(str, str2) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str2 === str[i]) {
//             count++;
//         }
//     }
//     return !!count;
// }

// console.log(counting("0231", "1"));








// function randomArr() {
//     var array = [];
//     var len = parseInt(Math.random() * 100);
//     for (var i = 0; i < len; i++) {
//         array[i] = parseInt(Math.random() * 100);
//     }
//     return array;
// }

// function filter(arr, val) {
//     var res = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < val) {
//             res[res.length] = arr[i];
//         }
//     }
//     return res;
// }

// var a = randomArr();
// console.log(a);
// console.log(filter(a, 10));





// var str = "Hello World";

// console.log(str.charAt(1));
// console.log(str(1));

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.indexOf("World"));






// function includ(str, sub) {
//     return str.indexOf(sub) !== -1
// }

// includ_ = (s, _) => s.indexOf(_) != -1;

// console.log(includ("Hello world", "eH"));
// console.log(str.include)




// var str = "Hello world";


// for (var i = 1; i < str.length; i += 2) {
//     console.log(str.substr(i, 1));
// }






var len = Math.round(Math.random() * 10);
var array = [];
for (var i = 0; i < len; i++) {
    array.push(Math.ceil(Math.random() * 100));
}
console.log(array);

var array_0 = [];
var array_1 = [];

while (array.length) {
    var buffer = array.pop();
    if (buffer % 2) {
        array_0.push(buffer);
    } else {
        array_1.push(buffer);
    }
}

console.log(array_0);
console.log(array_1);
