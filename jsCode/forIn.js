/**
 * Syntax
  for (variable in object) 
    {
      // code block to be executed
    }

 */
    const person = {
        name: 'John',
        age: 30,
        city: 'New York'
    };
    
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
