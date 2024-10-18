// log a statement using console.log
console.log('hello world the third time')


// variable are:
// var
// let
// const


// var firstName = 'Fred'
// console.log(firstName)

// let lastName =  "john"
// lastName = 'james'
// console.log(lastName)

// object
// const student = {
//     firstName : 'Fred',
//     class : 'Jss1',
        //     age : 20
// }
// // console.log(student.class)
// console.log(`My name is ${student.firstName}, i'm in ${student.class} and i am ${student.age}  years old.`)

// typeof is used to check for the data types
// console.log(typeof(student))

// // Arrays
// const oddNumber = [1,3,5,7,9]
// console.log(`${oddNumber[2]}${oddNumber[1]}`)
// console.log(oddNumber[2])


// Oprtators

// Assignment operators
// let x = 2
// console.log(x)

// Arithmetic operator 
console.log (10 % 4)

// // Comparison Operators
// let x = 2;
// let y = 3;
// console.log(x === y)

// logical operators
// console.log(x > 1 || x < 1)
// console.log(x > 5 && y === 3)

// string operators 
// let x = 'Mac'
// let y = 'Angel'
// console.log("it's me " + x + " and my second name is " + y)


// Ternary operators
// let x = 2
// let y = 3
// let z  = 10
// console.log(z % 2 == 0 ? "Number is even" : "Number is odd") 




// TYPE CONVERSION
// implicit and explicit
let x = 2 
let y = 6
console.log((x*y).toString())
console.log(Number(y))
console.log(Boolean(0)) //for boolean true to every number except null, undefined, NaN, "", 0,


// Conditional Statement 
// if statement 
// else statement 
// else if statement
// switch

// simple if statement
// let afa = 'Obi'
// if(afa === 'Ob') {
//     console.log('He is a Boy')
// } else{
//     console.log('He is a junky')
// }


// let name = 'KC'

// if(name === 'Obi') {
//     console.log ('He is a boy')
// } else if(name === 'Ada') {
//     console.log('She is a girl')
// }else if(name === 'KC')  {
//     console.log('This can either be a boy or girl')
//  } else{
//     console.log(name + ' Invalid Name')
// };

// let age = 34

// if(age >= 0 && age <= 12){
// console.log('This is a Child')
// } else if(age >= 13 && age <= 17){
//     console.log('This is a Teen')
// } else if(age >= 17 && age <= 59){
//     console.log('This is an Adult')
// } else if(age >= 60){
//     console.log('This is an Old Nigga')
// } else{
//     console.log('Invalid Age')
// };


// score
// less than 35 = fail
// 35 to 40 = Weak pass 
// 41 to 50 = credit 
// 51 to 69 = Good 
// 70 and above = excellent

let score = 39
if(score <= 34){
    console.log('fail')
} else if(score >= 35 && score <= 40){
    console.log('Weak pass')
} else if(score >= 41 && score <= 50){
    console.log('Credit')
} else if(score >= 51 && score <= 69){
    console.log('Good')
} else if(score >= 70){
    console.log('Excellent')
} else(
    console.log('Invalid score')
);


// Switch Statement
// const grade = 'F'

// switch(grade){
//     case 'A' : console.log('Excellent')
//     break;
//     case 'B' : console.log('Good')
//     break;
//     case 'C' : console.log('Credit')
//     break;
//     case 'D' : console.log('Weak pass')
//     break;
//     case 'F' : console.log('Fail')
//     break
//     default: console.log('Invalid Grade')
// };


const age = 23

switch(true){
    case (age >= 0 && age <= 12) : console.log('Child')
    break;
    case (age >= 13 && age <= 17) : console.log('Teen')
    break;
    case (score >= 41 && score <= 50) : console.log('Adult')
    break;
    case (age >= 60) : console.log('Old Person')
    break;
    default: console.log('Invalid Age')
}

console.clear()

// Function
function greet(person, age){
    console.log('Good Morning ' + person + ' I am ' + age + ' years old')
}
greet('Fred', 96)
greet('Sopulu', 100)
greet('Joy', 40)


// a function to calculate the product of 3 numbers
// function productOfNum(num1, num2, num3){
//     return num1 * num2 * num3
// }
// let result = productOfNum(2,3,8)
// console.log(result)


// console.clear()

// function sayHello(name){
//     console.log(`hello ${name}`)
// };

// sayHello('Emmmanuel')


// function sum(num1, num2, num3){
//     return num1 + num2 + num3
// }
// sum(3,5,9)
// const result1 = sum(3,5,9)
// console.log(result1);

// // arrow function
// const sayHelloAgain = (name) => {
//     console.log('Hello Again! ' + name)
// }
// sayHelloAgain('Convenant')

// const sumOfNum = (num1, num2) => num1 + num2

// const results = sumOfNum(2,4)
// console.log(results)

// write a function
function AboutMe(name, age, sor){
return 'my name is ' + name + ' i am ' + age + ' my state is ' + sor
}

const era =  AboutMe('Macben', 34, "Enugu")
console.log(era);


const ageCalc = (age) => {
    if(age >= 0 && age <= 12){
       return ('This is a Child')
       } else if(age >= 13 && age <= 17){
           return('This is a Teen')
       } else if(age >= 17 && age <= 59){
           return('This is an Adult')
       } else if(age >= 60){
           return('This is an Old Nigga')
       } else{
           return('Invalid Age')
       }
   }

   console.log(ageCalc(67))

// Data Structure

// Array
// const student = new Array('fred', 'jacob', 'Mary', 'John', 'joy', 'mac', 'Convenant')
// Array literal method 
// const students =['fred', 'jacob', 'Mary', 'John', 'joy', 'mac', 'Convenant']
// const result = students[6]
// console.log(result)
// students[5] = 'Kingsley'
// console.log(students)
// console.log(students.length)
// students.pop()
// console.log(students)
// students.push('Ben', 'Burn')
// console.log(students)

// // to p-rint the last value on the array
// console.log(students[students.lenght - 1])
// console.log(students.at(-1))

// // to change a seperator
// console.log(students.join('0'))

// // to change to string 
// console.log(students.strings)

// // to remove the first element on the array
// students.shift()
// console.log(students)

// // to add an element on an array
// students.unshift('mike', 'gana')
// console.log(students)


// Array methods

// Joining two arrays in 1

// const student1 = ['joy', 'mac', 'fred']
// const student2 = ['tony', 'convenant', 'sopulu', ]
// const student3 = ['Emma','jacob', 'kingsley', ]

// const newStudents = student1.concat(student2, student3)
// console.log(newStudents)

// Nested arrays
const student1 = ['joy', 'mac', 'fred']
const student2 = ['tony', 'convenant',['sopulu', 'Emma','jacob'], 'kingsley']
const newStudents = student1.concat(student2,)
console.log(newStudents)


// flat Array
// const students =['fred', ['jacob', 'Mary'], ['John', 'joy', 'mac'] ,'Convenant']
// console.log(students.flat())

// to remove or add Element on an array in any where
// const students =['fred', 'jacob', 'Mary', 'John', 'joy', 'mac' ,'Convenant']
// students.splice(5,2)
// students.splice(3,1, 'Grace')
// console.log(students)

// to extract a section of Array and return it as a Array without modifying the original One
// const students =['fred', 'jacob', 'Mary', 'John', 'joy', 'mac' ,'Convenant']
// console.log(students.slice(3,5))

// to find a name in an Array
const students =['fred', 'jacob', 'Mary', 'John', 'joy', 'mac' ,'Convenant']

const selectedStudent = 'peter'
if (students.includes(selectedStudent)){
    console.log(selectedStudent + ' is part of the student')
} else {
    console.log(selectedStudent + ' is not part of the student')
}

// to reverse
console.log(students.reverse())




// String method
let str1 = 'javascript'
let str2 = 'php'
console.log(str1.concat(str2)) //.trim() to remove extra space    .trimEnd() .trimStart() 

// to count the number of length
console.log(str1.length)

// to replace 
let str = 'javascript'
console.log(str.replace('s', 'S'))  
console.log(str.replaceAll('a', 'A')) //replaceAll() replaces all character in the string

// to check for a Character
let str3 = 'javascript'
console.log(str.includes('Z'))

// split 
let str4 = 'javascript php python c++'
let resultss = str4.split(" ")
console.log(resultss[0])

// Maths method
console.log(Math.max(6,7,3))
console.log(Math.floor(Math.random() * 10) + 1)
console.clear


// Loop
// for loop, while loop, do...while loop

// for loop
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// const ages = (2, 23, 22, 10, 60, 35, 46, 80)
// for(let i = 0; i <= ages.length; i++){
//     console.log(ages[i])
// }


// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) {                //for even number 
//     if (i % 2 == 0)
//     console.log(i)
//     }

//  for (let i = 1; i <= 10; i++) {               // for odd number
//         if (i % 2 !== 0)
//         console.log(i)
//         }

      
        
// const ages = [2, 23, 22, 10, 60, 35, 46, 80]

// for (let i = 0; i <= ages.length; i++){
//     if(ages[i] % 2 === 0){
//     console.log(ages[i])
//     } 
// }




// while loop         //  when you don't know how many iteration to loop 

// let i = 0.5
// while (i <=10) {
//    console.log(i)
//    i++ 
// }
const ages = [2, 23, 22, 10, 60, 35, 46, 80]           
// let i = 0                                             while loop to print odd number
// while (i < ages.length) {
//     if(ages[i] % 2 === 1)
//         console.log(ages[i])
//     i++
// }





// do... while loop
// let i = 0.001
// do {
//     console.log(i)
//     i++
// } while (i <= 10);


 
// Higher array method are
// for each
// Map
// filter
// Reduce
// sort
// some and every
// find


// for each
// ages.forEach(function(age){
//     console.log(age)
// })
    
// Map                prints a new array by changing every item in the original list
// const outPut = ages.map(age => age * 2)
// console .log(outPut)

// Filter                           it creates a new array but only keeps the iems that meets the conditions
// const outPut = ages.filter(function(age){                             
//     return age <= 18
// })
// console.log(outPut)

// Reduce                               it takes all the items and convert them into 1 value
// const outPut = ages.reduce(function(total, current){
//     return total + current 
// }, 10)
// console.log(outPut)

// Sort
// const studentss = ['fred', 'mac', 'jacob', 'anthony']
// const outPut = studentss.sort()
// console.log(outPut)

// const result = ages.sort(function(a,b){
//     return b-a
// })
// console.log(result)

// Some   and Every                                      if one element satisfies the condition, it prints out true.. i.e like an OR    Every is the opposite of Some
// const result = ages.every(function(age){
//     return age > 100
// })
// console.log(result)
// const resultsss = ages.some(function(age){
//     return age > 34
// })
// console.log(resultsss)

// Find                                                   findIndex is used to find the index
// const studentss = ['fred', 'mac', 'jacob', 'anthony']
// const outPut = studentss.find(function(student){
//     return student.includes('hony')
// })
// console.log(outPut)


// Example
const companies = [
    {
        name : 'Tesla',
        yearFounded: 2005,
        location: 'USA',
        owner: 'Elon Musk',
        annualRevenue: 10000000,
    },
    {
        name : 'Airtel',
        yearFounded: 1996,
        location: 'Nigeria',
        owner: 'Fred',
        annualRevenue: 100000,
    },
    {
        name : 'Mtn',
        yearFounded: 2000,
        location: 'South Africa',
        owner: 'Anthony',
        annualRevenue: 1000000000,
    },
    {
        name : 'Dangote sugar',
        yearFounded: 1998,
        location: 'Nigeria',
        owner: 'Dangote',
        annualRevenue: 980000000,
    },
    {
        name : 'Dangote cement',
        yearFounded: 2008,
        location: 'Nigeria',
        owner: 'Dangote',
        annualRevenue: 10000000,
    }
]

let outPut = companies.map(company => `company.name`)
console.log(outPut)

const totalRevenue = companies.reduce(function(total, company){        //this will print the total revenues of all the companies
    return total + company.annualRevenue
},0)
console.log(totalRevenue)

const dangoteCompany = companies.filter(function(company){               //this will print dangote owned companies
    return company.owner === 'Dangote'
})
console.log(dangoteCompany)

const nigeriaCompany = companies.filter(function(company){             //this will print nigeria owned companies
    return company.location === 'Nigeria'                                    
})/
console.log(nigeriaCompany)


let i = 0                                         
while (i < companies.length) {
    if(companies[i].yearFounded >= 2000 )                               //this will print companies after 2000 with while loop
        console.log(companies[i])
    i++
}

let j = 0                                         
while (j < companies.length) {
    if(companies[j].yearFounded >= 2000 )                               //this will print names of companies after 2000 with while loop
        console.log(companies[j].name)
    j++
}

console.log(false + false)

// const companyabove2000 = companies.filter(function(company){             //this will print country founded after 2000
//     return company.yearFounded >= 2000                                    
// })
// console.log(companyabove2000)

// DOM MANIPULATION


