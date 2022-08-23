import styled from 'styled-components';

export const UnitToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UnitName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.size2};
`;

export const ToggleSwitch = styled.div<{ checked: boolean }>`
  --switch-size: 1.5rem;
  position: relative;
  width: calc(var(--switch-size) * 2);
  height: var(--switch-size);
  margin: 0 0.5rem;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    left: 50%;
    width: 85%;
    height: 60%;
    transform: translate(-50%, -50%);
    border-radius: var(--switch-size);
    background: ${({ theme }) => theme.colors.darkShadeCyan};
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: ${(props) => (props.checked ? 'var(--switch-size)' : '0')};
    display: block;
    width: var(--switch-size);
    height: var(--switch-size);
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.orange};
    box-shadow: 0 3px 12px -4px rgba(0, 0, 0, 0.3);
    transition: 0.2s ease-out;
    box-shadow: ${({ theme }) => theme.shadow.base};
  }
`;

export const ToggleSwitchInput = styled.input`
  display: none;
`;
