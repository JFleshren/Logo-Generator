const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('render method should return SVG content with correct color and text', () => {
    const circle = new Circle();
    circle.setColor('red');
    const svgContent = circle.render('ABC', 'blue');
    expect(svgContent).toContain('<circle cx="150" cy="100" r="50" fill="red" />');
    expect(svgContent).toContain('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue">ABC</text>');
  });
});

describe('Triangle', () => {
  test('render method should return SVG content with correct color and text', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    const svgContent = triangle.render('XYZ', 'yellow');
    expect(svgContent).toContain('<polygon points="150, 20 270, 180 30, 180" fill="green" />');
    expect(svgContent).toContain('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="yellow">XYZ</text>');
  });
});

describe('Square', () => {
  test('render method should return SVG content with correct color and text', () => {
    const square = new Square();
    square.setColor('purple');
    const svgContent = square.render('123', 'orange');
    expect(svgContent).toContain('<rect x="50" y="50" width="200" height="100" fill="purple" />');
    expect(svgContent).toContain('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="orange">123</text>');
  });
});

