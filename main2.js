function calculateArea(length, width) {
  if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) { 
    return undefined;
  }

  const area = length * width;
  return area;
}
const length = 8;
const width = 5;
const rectangleArea = calculateArea(length, width);
console.log(rectangleArea); 
