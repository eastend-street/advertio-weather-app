import React, { FC } from 'react';

import { UnitToggleContainer, ToggleSwitch, ToggleSwitchInput } from './styles';

interface UnitToggleProps {
  isFahrenheit: boolean;
  onToggle: () => void;
}

const UnitToggle: FC<UnitToggleProps> = ({ isFahrenheit, onToggle }) => (
  <UnitToggleContainer>
    <ToggleSwitch checked={isFahrenheit} onClick={onToggle}>
      <ToggleSwitchInput
        type="checkbox"
        checked={isFahrenheit}
        onChange={() => {}}
      />
    </ToggleSwitch>
  </UnitToggleContainer>
);

export default UnitToggle;
