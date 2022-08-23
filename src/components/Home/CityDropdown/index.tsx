import React, { FC, useState } from 'react';

import { CITIES } from '../constants';
import { City } from '../types';
import {
  CityDropdownContainer,
  CityButton,
  CityList,
  CityItem,
} from './styles';

interface CityDropdownProps {
  selectedCity: City;
  onSelectCity: (cityValue: City['value']) => void;
}

const CityDropdown: FC<CityDropdownProps> = ({
  selectedCity,
  onSelectCity,
}) => {
  const [showList, setShowList] = useState(false);

  const handleOnSelect = (cityValue: City['value']) => {
    onSelectCity(cityValue);
    setShowList(false);
  };

  return (
    <CityDropdownContainer
      onMouseEnter={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}
      data-testid="city-dropdown-container"
    >
      <CityButton value={selectedCity.value}>{selectedCity.label}</CityButton>
      {showList && (
        <CityList>
          {CITIES.map((city) => (
            <CityItem
              key={city.value}
              onClick={() => handleOnSelect(city.value)}
              role="option"
            >
              {city.label}
            </CityItem>
          ))}
        </CityList>
      )}
    </CityDropdownContainer>
  );
};

export default CityDropdown;
