class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    render(text, textColor) {
      const svgContent = `<svg width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      return svgContent;
    }
  }
  
  class Triangle extends Shape {
    render(text, textColor) {
      const svgContent = `<svg width="300" height="200">
        <polygon points="150, 20 270, 180 30, 180" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      return svgContent;
    }
  }
  
  class Square extends Shape {
    render(text, textColor) {
      const svgContent = `<svg width="300" height="200">
        <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      return svgContent;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  