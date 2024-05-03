let name = "Gitahi";
let nameLength = name.length;
console.log(nameLength);

//Extract the last four characters from the string below;"extravaganza"

//Converting to Lowercase
let myGreetings = "Hello There";
console.log(myGreetings.toLowerCase ());

let myName = "Gitahi";
console.log(myName.toUpperCase());

let schoolName = "AkiraChix";
console.log(schoolName.length);

let a = "Extravaganza";
console.log(a[8] + a[9] +a[10] + a[11]);

let b = "extravaganza";
console.log(a.substring(8,));
console.log(a.slice(8 ,));
console.log(b.substr(2,3));

//Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"
const food = "the quick fox jumped over the lazy dog"
let c = "eat"
let f = `the ${c} quick fox jumped over the lazy dog`
console.log({f})

//Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story = "The quick brown fox jumped over the lazy brown dog"
let g = "brown"
let h = story.split(g).length-1
console.log(h)
let i = "the"
let j = story.split(i).length-1
console.log(j)

//Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are in the library"
console.log(string1.search("are"))
console.log(string1.includes("are"))

const string2  = "THe child was sitting on the table before it fell"
console.log(string2.search("sitting"))
console.log(string2.includes("sitting"))



//Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"
let k = "wonderful"
console.log(k.toUpperCase())
let l = "amaizing"
console.log(l.toLowerCase())
let m = "UndERneath"
console.log(m.toLowerCase())
let n = "A wonderful world"
console.log

