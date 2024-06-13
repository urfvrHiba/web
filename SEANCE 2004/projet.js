const article = "lorem HIBA ipsum dolor sit amet consectetur, adipisicing elit. Quo a, incidunt accusantium quidem, vel, officia magni qui tempora et reiciendis pariatur consequatur mollitia vitae illo.Sapiente quibusdam suscipit laborum unde."


// modifiers + ? *
let nameSearch = /hiba?/ig;
// search method ==== result == -1 or index
const searchIndex = article.search(nameSearch);
// console.log(searchIndex);

// match method ==== result == null or []
const matchSearch = article.match(nameSearch);
console.log(matchSearch); 

// matchAll method

// replace method
const updatedArticle = article.replace(nameSearch,"ROUISSI");
console.log(updatedArticle);
listModules = "POO HTML/JAVASCRIPT-CSS PHP"

// split method ==== return []
arrModules = listModules.split(/[\s-/]/)

// console.log(arrModules);

// test method ==== true or false
const tester = nameSearch.test(article);
console.log(tester);

// exec method ==== null or arry ))) the same as match
const chercher = nameSearch.exec(article);
console.log(chercher);

let patternSt = /(\b^[a-zA-Z]+\b)\s(\b[a-zA-z]+)\s([ID][D][0-9]{3})/gi; 

stagiaires=[
    "HIBA ROUISSI DD106",
    "walid EL AHMAR DD105",
    "Soukaina HAFFA ID101",
    "abdouahed HOSNI DD104",
    
];

for (let i = 0; i < stagiaires.length; i++){
    let patItem = stagiaires[i].replace(patternSt, "LE GROUPE $3 LE STAGIAIRE :$1 $2");
    console.log(patItem);
}