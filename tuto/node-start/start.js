class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
      this.id = Math.random();
    }
  
    getDescription() {
      return `Car's description : ${this.brand}, ${this.model} , ID:${this.id}`;
    }
  }
  
  const dacia = new Car('Dacia', 'Sandero');
  
  console.log( dacia.getDescription() );

//module.exports = router;

/**
 * moduke integraded to the runtime environment
 * cont http =vrequire('http');
 * module used after package installation
 * const shortid = require('shortid');
 */