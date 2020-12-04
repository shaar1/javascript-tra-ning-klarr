// FIRST ASSIGNMENT
 
// Vi har två lag som ska tävla mot varandra. Lage kommer att
// spela tre rundor. Laget med högsta poäång vinner!
// DATA OG: 96, 108, 89
// DATA ALLIANCE: 88, 91, 110
// 1. Räkna ut medlevärdet för varje lag. Plussa ihop varje lags resultat
// dela resultatet på 2
// 2. Jämföra de båda lagens resultate för att avgöra vilket som är högst
// för att kunna jämföra resultaten behöver vi använda större än operator,
// vi behöver använda en if-sats som skriver ut resultatet beroende på vem som 
// är vinnaren. 
 
// steg 1: två variabler som innehåller varje lags data
// steg 1.1: skapa två nya variabler som innehåller medelvärdet
// steg 2: skapa en if-sats och avgöra vilket medelvärde som är högst
 
// 1: Först definierar du vad du ska utföra
// 2: Definierar du vilka steg rent kodmässigt du behöver genomföra
// 3: Skriv ner vilken ordning du behöver utföra stegen
// 4: Om något känns svårt och övermäktigt ta bort ett steg eller en del
// till en början och kom tillbaka till det sen.

const result = 10 + 10 + 10;
const result2 = 5 + 5 + 5;

const averageResult = result / 2;
const averageResult2 = result2 / 2;

//console.log(result, result2);
//console.log(averageResult, averageResult2);

if (averageResult > averageResult2){
    console.log("GRATTIS OG");
} else{
    console.log("GRATTIS ALLIANCE")
}


