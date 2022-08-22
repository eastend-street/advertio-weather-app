import React, { FC, ChangeEvent } from 'react';

import { CITIES } from '../constants';
import { City } from '../types';
import { CityDropdownContainer, CitySelect, CityOption } from './styles';

interface CityDropdownProps {
  selectedCity: City;
  onSelectCity: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const CityDropdown: FC<CityDropdownProps> = ({
  selectedCity,
  onSelectCity,
}) => (
  <CityDropdownContainer>
    <CitySelect value={selectedCity.name} onChange={onSelectCity}>
      {CITIES.map((city) => (
        <CityOption key={city.name} value={city.id}>
          {city.label}
        </CityOption>
      ))}
    </CitySelect>
  </CityDropdownContainer>
);

export default CityDropdown;
