import { toMeter, fromMeter } from '../utils/lengthHelper';

describe('toMeter', () => {
  test('from mm', () => {
    expect(toMeter(15, 'millimetre')).toBe(0.015);
  });
  test('from cm', () => {
    expect(toMeter(22.57, 'centimeter')).toBe(0.2257);
  });
  test('from m', () => {
    expect(toMeter(1.1, 'meter')).toBe(1.1);
  });
  test('from dm', () => {
    expect(toMeter(0.57, 'decameter')).toBe(5.7);
  });
  test('from hm', () => {
    expect(toMeter(2223, 'hectometer')).toBe(222300);
  });
  test('from km', () => {
    expect(toMeter(0.0008, 'kilometer')).toBe(0.8);
  });
  test('from inch', () => {
    expect(toMeter(1.2, 'inch')).toBe(0.0305);
  });
  test('from mile', () => {
    expect(toMeter(1, 'mile')).toBe(1609.34);
  });
  test('negative', () => {
    expect(toMeter(-22, 'mile')).toBe('Error');
  });
});

describe('fromMeter', () => {
  test('to mm', () => {
    expect(fromMeter(2.24, 'millimetre')).toBe(2240);
  });
  test('to cm', () => {
    expect(fromMeter(0.345, 'centimeter')).toBe(34.5);
  });
  test('to meter', () => {
    expect(fromMeter(2.24, 'meter')).toBe(2.24);
  });
  test('to dm', () => {
    expect(fromMeter(0.012, 'decameter')).toBe(0.0012);
  });
  test('to hm', () => {
    expect(fromMeter(345, 'hectometer')).toBe(3.45);
  });
  test('to km', () => {
    expect(fromMeter(0.256, 'kilometer')).toBe(0.0003);
  });
  test('to inch', () => {
    expect(fromMeter(3.5, 'inch')).toBe(137.7953);
  });
  test('to mile', () => {
    expect(fromMeter(30456, 'mile')).toBe(18.9245);
  });
  test('negative', () => {
    expect(fromMeter(-0.1, 'negative')).toBe('Error');
  });
});
