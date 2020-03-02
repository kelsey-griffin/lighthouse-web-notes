const args = process.argv;

let words = (args[2].slice(1, args[2].length) + args[2][0] + "ay")
for (let i = 3; i < args.length; i++) {  
  words = words + " " + (args[i].slice(1, args[i].length) + args[i][0] + "ay");
};

console.log(words)