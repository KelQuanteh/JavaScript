function CamelCase(s){
    var n = 1; 

    function isUpperCase(char) {
        return char === char.toUpperCase() && char !== char.toLowerCase();
    }

    for(let i = 0; i < s.length; i++){
        if(isUpperCase(s[i]))
            n++;
    }

    console.log(n); 
}

let s = 'saveChangesInTheEditor'
CamelCase(s); 