let a = "listen";
let b = "silenj";

const sortedstr1 = a.split('').sort().join('');

const sortedstr2 = b.split('').sort().join('');

if(sortedstr1 == sortedstr2){
    console.log("Both strings are Anagram");   
}else{
    console.log("Both strings are not Anagram");
    
}

