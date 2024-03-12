import('inquirer').then(({ default: inquirer }) => {
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function promptUser() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: function(input) {
        return input.length > 0 && input.length <= 3;
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal number):'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal number):'
    }
  ]);

  return userInput;
}

function generateSVG(shape, shapeColor, text, textColor) {
  let svgContent;
  switch (shape) {
    case 'Circle':
      const circle = new Circle();
      circle.setColor(shapeColor);
      svgContent = circle.render(text, textColor);
      break;
    case 'Triangle':
      const triangle = new Triangle();
      triangle.setColor(shapeColor);
      svgContent = triangle.render(text, textColor);
      break;
    case 'Square':
      const square = new Square();
      square.setColor(shapeColor);
      svgContent = square.render(text, textColor);
      break;
    default:
      throw new Error('Invalid shape');
  }
  return svgContent;
}

async function main() {
  try {
    const userInput = await promptUser();
    const svgContent = generateSVG(userInput.shape, userInput.shapeColor, userInput.text, userInput.textColor);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

main();
});
