const person = {
    name: "Abbas",
    greet: function (greeting) {
      console.log(greeting + ", " + this.name);
    }
  };
  
  const person2 = { name: "John" };
  
  
  person.greet.apply(person2, ["Hi"]); 
  