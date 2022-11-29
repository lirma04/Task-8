function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.substarction = function() {
      return this.a - this.b;
    };

    this.multiplication = function() {
        return this.a * this.b;
      };

    this.division = function() {
        return this.a / this.b;
      };
  }
  
  let calculator = new Calculator();
  calculator.read();