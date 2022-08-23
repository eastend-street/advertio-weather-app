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
  onSelectCity: (cityName: City['name']) => void;
}

const CityDropdown: FC<CityDropdownProps> = ({
  selectedCity,
  onSelectCity,
}) => {
  const [showList, setShowList] = useState(false);

  const handleOnSelect = (cityName: City['name']) => {
    onSelectCity(cityName);
    setShowList(false);
  };

  return (
    <CityDropdownContainer
      onMouseEnter={() => setShowList(true)}
      onMouseLeave={() => setShowList(false)}
    >
      <CityButton value={selectedCity.name}>{selectedCity.label}</CityButton>
      {showList && (
        <CityList>
          {CITIES.map((city) => (
            <CityItem key={city.name} onClick={() => handleOnSelect(city.name)}>
              {city.label}
            </CityItem>
          ))}
        </CityList>
      )}
    </CityDropdownContainer>
  );
};

export default CityDropdown;
