const rect = require('./Node/rectangle')

const solveRect = (l,b) =>{
console.log("Solving for rectangle with l = " + l + " and b =" +b)
 if (l <= 0 || b <=0){
     console.log("Rectangle dimensions should be greater than zero")
 }else{
     console.log("the area of the rectanle is" + rect.area(l,b))
     console.log('the permiter of the rectangle is' + rect.permiter(l,b))
 }
}

solveRect(4,8)
solveRect(5,8)
solveRect(0,4)