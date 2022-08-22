import styled from 'styled-components';

export const CityDropdownContainer = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: 0.6rem;
    top: 1.2rem;
    width: 0;
    border-left: 0.4rem solid transparent;
    border-right: 0.4rem solid transparent;
    border-top: 0.4rem solid ${({ theme }) => theme.colors.grey};
  }
`;

export const CitySelect = styled.select`
  width: 9rem;
  font-size: ${({ theme }) => theme.fontSizes.size2};
  padding: 0.7rem;
  outline: none;
  border: none;
  border-radius: 0;
  appearance: none;
  cursor: pointer;
`;

export const CityOption = styled.option``;
