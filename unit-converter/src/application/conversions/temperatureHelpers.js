export function toFahrenheit(temp, unit) {
  switch (unit) {
    case 'celsius':
      return Number(Number(temp * 1.8 + 32).toFixed(2));
    case 'kelvin':
      return Number(Number(1.8 * (temp - 273.15) + 32).toFixed(2));
    case 'fahrenheit':
      return Number(Number(temp).toFixed(2));
    default:
      return console.error('Error in toFahrenheit');
  }
}

export function toCelsius(temp, unit) {
  switch (unit) {
    case 'fahrenheit':
      return Number(((Number(temp) - 32) * (5 / 9)).toFixed(2));
    case 'kelvin':
      return Number((Number(temp) - 273.15).toFixed(2));
    case 'celsius':
      return Number(Number(temp).toFixed(2));
    default:
      return console.error('Error in toCelsius');
  }
}

export function toKelvin(temp, unit) {
  switch (unit) {
    case 'fahrenheit':
      return Number(((Number(temp) - 32) * (5 / 9) + 273.15).toFixed(2));
    case 'celsius':
      return Number((Number(temp) + 273.15).toFixed(2));
    case 'kelvin':
      return Number(Number(temp).toFixed(2));
    default:
      return console.error('Error in toKelvin');
  }
}

export function temperatureConversion(outputUnit, inputValue, inputUnit) {
  if (outputUnit === 'celsius') {
    return toCelsius(inputValue, inputUnit);
  }
  if (outputUnit === 'fahrenheit') {
    return toFahrenheit(inputValue, inputUnit);
  }
  return toKelvin(inputValue, inputUnit);
}
