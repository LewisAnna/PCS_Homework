let c = prompt('what temperature would you like to convert from Celsius to Farenheit?')
let f = prompt('what temperature would you like to convert from  Farenheit to Celsius?')


const convert2F = (c) => alert(`The temerature in Farenheit is: ${(c/5)*9 + 32}`);
const convert2C = (f) => alert(`The temerature in Celsius is: ${((f - 32)*5)/9}`);

convert2C(50);
convert2F(21);
convert2F(10);
convert2C(105);