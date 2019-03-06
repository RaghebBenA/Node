const rect = require('./rectangle')

const solveRect = (l, b) => {
    console.log("Solving for rectangle with l = " + l + " and b =" + b)

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("EROOR", err.message)
        }
        else {
            console.log('the area of the rectangle of dimensions l = ' + l + " and b = " + b + ' is ' + rectangle.area())
            console.log('the permiter of the rectangle of dimensions l = ' + l + " and b = " + b + ' is ' + rectangle.permiter())
        }
    })
    console.log('this statment is after the call to rect()')
}

solveRect(4, 8)
solveRect(5, 8)
solveRect(0, 4)