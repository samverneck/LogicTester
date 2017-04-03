const Logic = require( `./lib/logic` )


const l1 = [ true, `and`, true, `and`, [true, `or`, false, `and`, [true, `or`, false]]]

const l2 = [ true, `and`, true, `and`, [true, `or`, false, `and`, [true, `and`, false]]]

console.log( `l1: `, Logic( l1 ) )
console.log( `l2: `, Logic( l2 ) )

// l1:  true
// l2:  false
