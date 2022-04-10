
var findSubstring = function (s, words) {
    
    const indices = [];
    
    if (s === null || s.length === 0 || words === null || words.length == 0) {
        return indices;
    }
    const wordCount = words.reduce((a, b) => {
        a[b] = (a[b] + 1) || 1;
        return a;
    }, {});
  
    const wordLength = words[0].length;
    
    const wordArrayLength = wordLength * words.length;
  
    for (let i = 0; i <= s.length - wordArrayLength; i++) {
        
        let current = s.substring(i, i + wordArrayLength);
        
        const wordMap = {};
       
        let index = 0;
        
        let j = 0;
        
        while (index < words.length) {
            
            const part = current.substring(j, j + wordLength);
            
            wordMap[part] = (wordMap[part] + 1) || 1;
            
            j += wordLength;
            index++;
        }
       
        let a = JSON.stringify(Object.entries(wordCount).sort());
        let b = JSON.stringify(Object.entries(wordMap).sort());
        if (a === b) {
            indices.push(i);
        }
    }
    return indices;
};