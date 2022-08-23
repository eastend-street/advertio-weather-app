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
    <ToggleSwitch
      role="checkbox"
      tabIndex={0}
      aria-checked={isFahrenheit}
      checked={isFahrenheit}
      onClick={onToggle}
      aria-label="degree toggle"
    >
      <ToggleSwitchInput
        type="checkbox"
        name="isFahrenheit"
        checked={isFahrenheit}
        onChange={() => {}}
      />
    </ToggleSwitch>
    <UnitName>&#176;F</UnitName>
  </UnitToggleContainer>
);

export default UnitToggle;
