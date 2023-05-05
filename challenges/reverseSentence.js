function reverseSentence(sentence) {
    const sentenceLen = sentence.length;
    
    if (sentenceLen < 1) {
        return "";
    }

    if (sentenceLen < 2) {
        return sentence;
    }

    let result = "";
    const sentenceArr = sentence.split('');
    
    for(let idx=sentenceLen-1; idx > 0; idx--){
        result += sentenceArr[idx];
    }

    return result;
}

module.exports = reverseSentence;
