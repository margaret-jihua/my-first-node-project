# Setting up a Node project

1. Create a new folder for the first node project
``` 
mkdir my-first-node-project
```

2. Initialize Node inside the project folder
``` 
npm init -y
```

3. Make entry point
``` 
touch index.js
console.log("Hello World") 
```

4. Run program
``` 
node index.js 
```

5. Make node module
```
touch myModule.js
module.exports.beBasic = () => "That's so fetch!"
```

6. Import module in index.js
```
const myModule = require('./myModule.js')
console.log(myModule.beBasic());
```

7. Install npm packages
```
npm i moment
```

8. Require and use in index.js
```
const moment = require("moment")
console.log(moment().format('dddd [the] Do [of] MMMM [in the year] YYYY'));
```

## `.gitignore` Instruction
```
touch .gitignore
```
and then add `node_modules/` inside the file

Or the simple way:
```
echo "node_modules/" >> .gitignore
```

## install globely:  `nodemon`
```
npm i -g nodemon
```