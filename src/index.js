module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let len = bracketsConfig.length;
  let brackets = "";
 
  for (let i = 0; i < len; i++) {
    brackets += bracketsConfig[i].join("");
  }

  console.log(brackets);
    
  for (let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex % 2 === 0) {
        if (brackets[bracketsIndex] === 
        brackets[bracketsIndex + 1] &&
        stack[stack.length - 1] === bracketsIndex + 1) {stack.pop();}
        else {stack.push(bracketsIndex + 1);}

        console.log(stack);
    }
    else {
       if (stack.pop() !== bracketsIndex) {return false;}
    }
  }
  console.log(stack);
  return stack.length === 0;
}
