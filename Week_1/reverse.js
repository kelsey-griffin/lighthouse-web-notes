const args = process.argv

for (let i = 2; i < args.length; i++) {
  let reversed = ""
  for (let j = args[i].length - 1; j >= 0; j--) {
    reversed = reversed + args[i][j];
  }
  console.log(reversed);
};

