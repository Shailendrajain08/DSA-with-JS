function countChar (word, char) {
    let count = 0;
    word = word.toLowerCase();
    char = char.toLowerCase();
    
    for (let i=0; i<word.length; i++) {
         if(word[i] === char){
             count ++
         }
    }
    return count
 }
 
 console.log(countChar('missIssippi','I'))