// The "pseudocode" for the built-in Error class defined by JavaScript itself
import React, { useEffect } from "react";
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Field Missing Issue";
    this.stack = "Please check";
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const JSExamples1 = () => {
  const readUser = (json) => {
    let user = JSON.parse(json);

    if (!user.age) {
      throw new ValidationError("No field: age");
    }
    if (!user.name) {
      throw new ValidationError("No field: name");
    }

    return user;
  };

  const f = () => {
    try {
      throw "bogus";
    } catch (e) {
      console.log('caught inner "bogus"');
      throw e; // this throw statement is suspended until
      // finally block has completed
    } finally {
      return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
  };

  function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }

  useEffect(() => {
    let m = {
      name: "John"
    };
    let f = {
      name: "Ann"
    };
    let family = marry(m,f);

    // error handling 
    // try {
    //   console.log(f());
    // } catch (e) {
    //   // this is never reached!
    //   // while f() executes, the `finally` block returns false,
    //   // which overwrites the `throw` inside the above `catch`
    //   console.log('caught outer "bogus"');
    // }

    // map and weak map 
    // let map = new Map();
    // const a = {};
    // map.set({}, 'hello').set({}, 'hai').set(a, 'a').set(a, 'b');

    // if (true) {
    //   let x = {
    //     a: []
    //   }
    //   var m1 = new Map();
    //   m1.set(x, 'x');
    //   var m2 = new WeakMap();
    //   m2.set(x, 'x')
    // }
    // console.log(m1);
    // console.log(m2);
    // let john = { name: "John" };
    // let map = new Map();
    // map.set(john, "...");
    // john = null;
    // console.log(map);

    // let john2 = { name: "John" };
    // let weakmap = new WeakMap();
    // weakmap.set(john2, "...");
    // john2 = null;
    // console.log(weakmap);
    // debugger
  }, []);

  return <div>Error handling</div>;
};

export default JSExamples1;
