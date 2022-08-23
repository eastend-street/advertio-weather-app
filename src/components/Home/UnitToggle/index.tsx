import React, { FC } from 'react';

import {
  UnitToggleContainer,
  ToggleSwitch,
  ToggleSwitchInput,
  UnitName,
} from './styles';

interface UnitToggleProps {
  isFahrenheit: boolean;
  onToggle: () => void;
}

const UnitToggle: FC<UnitToggleProps> = ({ isFahrenheit, onToggle }) => (
  <UnitToggleContainer>
    <UnitName>&#176;C</UnitName>
    <ToggleSwitch checked={isFahrenheit} onClick={onToggle}>
      <ToggleSwitchInput
        type="checkbox"
        checked={isFahrenheit}
        onChange={() => {}}
      />
    </ToggleSwitch>
    <UnitName>&#176;F</UnitName>
  </UnitToggleContainer>
);

export default UnitToggle;
