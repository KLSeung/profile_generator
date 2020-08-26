const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyData = {};

rl.question('What\'s your name? Nicknames are also acceptable: ', (answer) => {
  surveyData.name = answer;

  rl.question('What\'s an activity you like doing?: ', (answer) => {
    surveyData.activity = answer;

    rl.question('What do you listen to while doing that?: ', (answer) => {
      surveyData.music = answer;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.): ', (answer) => {
        surveyData.meal = answer;

        rl.question('What\'s your favourite thing to eat for that meal?: ', (answer) => {
          surveyData.food = answer;
  
          rl.question('Which sport is your absolute favourite?: ', (answer) => {
            surveyData.sport = answer;
    
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!: ', (answer) => {
              surveyData.superpower = answer;
              
              console.log(surveyData);
              rl.close();
            });
          });
        });
      });
    });
  });
});