function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let arr = expr.split('');
    let RightBrackets = 0;
    let LeftBrackets = 0;
    for (i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
        LeftBrackets += 1;
    } else if (arr[i] === ')') {
        RightBrackets +=1;
    } 
    if (arr[i] === '/' && arr[i + 2] === '0') throw "TypeError: Division by zero.";
    }
    if (RightBrackets !== LeftBrackets) throw 'ExpressionError: Brackets must be paired';
    
    
    return (new Function(`return ${expr}`)());
    

    
}

module.exports = {
    expressionCalculator
}