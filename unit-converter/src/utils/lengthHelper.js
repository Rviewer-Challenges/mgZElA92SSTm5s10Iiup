export function toMeter(number, unit) {
  if (number < 0) return 'Error';
  switch (unit) {
    case 'millimetre':
      return Number((number * 0.001).toFixed(4));
    case 'centimeter':
      return Number((number * 0.01).toFixed(4));
    case 'decimeter':
      return Number((number * 0.1).toFixed(4));
    case 'meter':
      return Number(number.toFixed(4));
    case 'decameter':
      return Number((number * 10).toFixed(4));
    case 'hectometer':
      return Number((number * 100).toFixed(4));
    case 'kilometer':
      return Number((number * 1000).toFixed(4));
    case 'inch':
      return Number((number * 0.0254).toFixed(4));
    case 'mile':
      return Number((number * 1609.34).toFixed(4));
    default:
      return console.error('Error in toMeter');
  }
}

export function fromMeter(number, unit) {
  if (number < 0) return 'Error';
  switch (unit) {
    case 'millimetre':
      return Number((number / 0.001).toFixed(4));
    case 'centimeter':
      return Number((number / 0.01).toFixed(4));
    case 'decimeter':
      return Number((number / 0.1).toFixed(4));
    case 'meter':
      return Number(number.toFixed(4));
    case 'decameter':
      return Number((number / 10).toFixed(4));
    case 'hectometer':
      return Number((number / 100).toFixed(4));
    case 'kilometer':
      return Number((number / 1000).toFixed(4));
    case 'inch':
      return Number((number / 0.0254).toFixed(4));
    case 'mile':
      return Number((number / 1609.34).toFixed(4));
    default:
      return console.error('Error in fromMeter');
  }
}
