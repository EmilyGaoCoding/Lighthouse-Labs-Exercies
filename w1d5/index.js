var chalk = require('chalk');

var message = 'I can change color to ' + chalk.bgYellow('yellow') + ' now!';
console.log(message);

var message1 = 'I can change color to ' + chalk.yellow('yellow') + ' now!';
console.log(message1);

var message2 = 'I can change color to ' + chalk.bold.blue('yellow') + ' now!';
console.log(message2);

var message3 = 'I can change color to ' + chalk.underline('yellow') + ' now!';
console.log(message3);