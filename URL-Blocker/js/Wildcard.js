// JavaScript source code
var PATTERN_LINE_START = "^";
var PATTERN_LINE_END = "$";
var META_CHARACTERS = ['$', '^', '[', ']', '(', ')', '{', '}', '|', '+', '.', '\\'];
 
 
function wildcard(pattern,word){
    var result = PATTERN_LINE_START;
    for(var i=0;i<pattern.length;i++){
        var ch = pattern.charAt(i);
        if(metaSearch(ch)){
            result += "\\" + ch;
            // continue;
        }else{
            switch (ch) {
                case '*':
                    result += ".*";
                    break;
                case '?':
                    result += ".{0,1}";
                    break;
                default:
                    result += ch;
            }
        }
    }
    result += PATTERN_LINE_END;
    // if(word.match(new RegExp(result)) == null){
    //     return false;
    // }
    // return true;
    return word.match(new RegExp(result)) !== null;
}
function metaSearch(ch){
    for(var metaCh in META_CHARACTERS){
        if (ch == META_CHARACTERS[metaCh]) {
            return true;
        }
    }
    return false;
}
