function toggleCase(str) {
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = char.charCodeAt(0);
    
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32); 
    }
    else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32); 
    }
    else {
      result += char;
    }
  }
  
  return result;
}

console.log(toggleCase("Hello World 123")); 