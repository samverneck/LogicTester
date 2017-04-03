const expect = require('chai').expect

const and = ( a ) => ( b ) => a && b
const or = ( a ) => ( b ) => a || b

const logical = {
  and,
  or,
  e: and,
  ou: or,
  y: and,
  o: or
}

const test = ( prev, cur ) =>
  ( cur.map )
    ? cur.reduce( test )
    : ( typeof cur === 'string' || cur instanceof String) 
      ? fn = logical[cur]( prev )
      : fn( cur )
    


const run = ( logic ) => {
  let fn = ''

  return !!logic.reduce( test )

}

module.exports = run

// > run( [ true, and, true, or, true ] )
// true
// > run( [ true, and, true, or, false ] )
// true
// > run( [ true, and, false, or, false] )
// false
// > run( [ false, and, true, or, true] )
// true
// > run( [ true, and, true, and, [true, and, false]] )
// false
// > run( [ true, and, true, and, [true, or, false]] )
// true
// > run( [ true, and, true, and, [true, or, false, and, [true, or, false]]] )
// true
// > run( [ true, and, true, and, [true, or, false, and, [true, and, false]]] )
// false

