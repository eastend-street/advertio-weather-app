export interface City {
  id: number;
  name: string;
  label: string;
}

export interface TemperatureUnit {
  value: 'metric' | 'imperial';
}
