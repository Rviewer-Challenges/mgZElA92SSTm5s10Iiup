import {
  toFahrenheit,
  toCelsius,
  toKelvin,
  temperatureConversion,
} from '../utils/temperatureHelpers';

describe('to kelvin', () => {
  test('from celsius', () => {
    expect(toKelvin(20.65, 'celsius')).toBe(293.8);
  });
  test('from fahrenheit', () => {
    expect(toKelvin(-200, 'fahrenheit')).toBe(144.26);
  });
});

describe('to celsius', () => {
  test('from fahrenhet', () => {
    expect(toCelsius(-15.555, 'fahrenheit')).toBe(-26.42);
  });
  test('from kelvin', () => {
    expect(toCelsius(1, 'kelvin')).toBe(-272.15);
  });
});

describe('to fahrenheit', () => {
  test('from celsius', () => {
    expect(toFahrenheit(27, 'celsius')).toBe(80.6);
  });
  test('from kelvin', () => {
    expect(toFahrenheit(300.15, 'kelvin')).toBe(80.6);
  });
});

describe('test temperature conversion', () => {
  test('from celsius to fahrenheit', () => {
    expect(temperatureConversion('fahrenheit', -21.53, 'celsius')).toBe(-6.75);
  });
  test('from fahrenheit to kelvin', () => {
    expect(temperatureConversion('kelvin', -21.53, 'fahrenheit')).toBe(243.41);
  });
});
