JS Import Compiler
==============

JS Import Compiler is a node.js application that 
looks for include requests recursively in the source JavaSCcript file and
 resolves them in the destination file the same way as LESS/SCSS preprocessors resolve
@import rule in the output CSS.

There is no special requirements for the including files 

STATUS: 0.1.0


## Usage


Define dependencies in your code:

src/main.js
```	
var foo = $import("./Form/Input/Tel");
```

Create the dependency source:

src/Form/Input/Tel.js
```
function() {
    return {
          prop: "",
          method: function(){}
    }
}
```

Run the compiler:

```
node jsic.js src/main.js build/mail.js
```

Examine the combined file:

build/main.js
```	
var foo = function() {
    return {
          prop: "",
          method: function(){}
    }
};
```

## Linter compatibility

In order to have keep dependency source in in valid syntax from a linter prospective
 you can assign its body to module.exports, which is ignored by the compiler
``` 
module.exports = function() {
    return {
          prop: "",
          method: function(){}
    }
}
```

## JSIC as a grunt task

Please find instructions at https://github.com/dsheiko/grunt-jsic