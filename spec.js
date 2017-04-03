const expect = require('chai').expect

const filtros = {
  isNumber: ( num ) => !isNaN( num ),
  isOdd: ( num ) => !( num % 2 ) && num > 0,
  isZero: ( num ) => !( num ),
  isNotZero: ( num ) => !!( num ),
  greaterThen3: ( num ) => ( num > 3 ),
}

const e = ( aplique ) => ( num ) =>
  aplique.reduce( ( acc, fn ) => acc && filtros[ fn ]( num ), true )

const ou = ( aplique ) => ( num ) =>
  aplique.reduce( ( acc, fn ) => acc || filtros[ fn ]( num ), false )

const test = {
  sim: {
    msg: `pode ser`.toUpperCase(),
    bool: true
  },
  nao: {
    msg: `nao pode ser`.toUpperCase(),
    bool: false
  }
}
describe('E',  () => {

  describe('isNumber E isZero',  () => {

    const aplique = [ `isNumber`, `isZero` ]
    
    it(`Teste se oie ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(`oie`)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 0 ${test.sim.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(0)
      expect(result).to.equal(test.sim.bool)
    })
    it(`Teste se 1 ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(1)
      expect(result).to.equal(test.nao.bool)
    })
  })

  describe('isNumber E isNotZero E isOdd',  () => {

    const aplique = [ `isNumber`, `isNotZero`, `isOdd` ]

    it(`Teste se oie ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(`oie`)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 0 ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(0)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 1 ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(1)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 2 ${test.sim.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(2)
      expect(result).to.equal(test.sim.bool)
    })
    it(`Teste se 3 ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(3)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 4 ${test.sim.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(4)
      expect(result).to.equal(test.sim.bool)
    })
  })
  describe('isNumber E isNotZero E isOdd E greaterThen3',  () => {

    const aplique = [ `isNumber`, `isNotZero`, `isOdd`, `greaterThen3` ]

    it(`Teste se oie ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(`oie`)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 0 ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(0)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 1 ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(1)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 2 ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(2)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 3 ${test.nao.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(3)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 4 ${test.sim.msg}: ${aplique.join(' E ')}`, () => {
      const result = e(aplique)(4)
      expect(result).to.equal(test.sim.bool)
    })
  })

})


describe('OU',  () => {

  describe('isNumber OU isZero',  () => {

    const aplique = [ `isNumber`, `isZero` ]
    
    it(`Teste se oie ${test.nao.msg}: ${aplique.join(' OU ')}`, () => {
      const result = ou(aplique)(`oie`)
      expect(result).to.equal(test.nao.bool)
    })
    it(`Teste se 0 ${test.sim.msg}: ${aplique.join(' OU ')}`, () => {
      const result = ou(aplique)(0)
      expect(result).to.equal(true)
    })
    it(`Teste se 1 ${test.sim.msg}: ${aplique.join(' OU ')}`, () => {
      const result = ou(aplique)(1)
      expect(result).to.equal(test.sim.bool)
    })
  })

  describe('isNumber OU isNotZero OU isOdd',  () => {

    const aplique = [ `isNumber`, `isNotZero`, `isOdd` ]

    it(`Teste se oie ${test.sim.msg}: ${aplique.join(' OU ')}`, () => {
      const result = ou(aplique)(`oie`)
      expect(result).to.equal(test.sim.bool)
    })
    it(`Teste se 0 ${test.sim.msg}: ${aplique.join(' OU ')}`, () => {
      const result = ou(aplique)(0)
      expect(result).to.equal(test.sim.bool)
    })
    it(`Teste se 1 ${test.sim.msg}: ${aplique.join(' OU ')}`, () => {
      const result = ou(aplique)(1)
      expect(result).to.equal(test.sim.bool)
    })
    it(`Teste se 2 ${test.sim.msg}: ${aplique.join(' OU ')}`, () => {
      const result = ou(aplique)(2)
      expect(result).to.equal(test.sim.bool)
    })
  })

})
