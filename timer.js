const args = process.argv.slice(2);

//No numbers are provided then end

//Skip any numbers that are negative

//Ignore non-numbers


for (value of args){
  if (!isNaN(value) && value > -1){
    setTimeout(() => {
      process.stdout.write('BEEP!!!');
  }, value * 1000);
  }

}