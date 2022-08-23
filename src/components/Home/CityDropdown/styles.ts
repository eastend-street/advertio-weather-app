import styled from 'styled-components';

export const CityDropdownContainer = styled.div`
  position: relative;
  width: 9rem;
  box-shadow: ${({ theme }) => theme.shadow.base};
`;

export const CityButton = styled.button`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.size2};
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: none;
  border-radius: 0;
  text-align: left;
  padding: 0.7rem;

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

export const CityList = styled.ul`
  list-style: none;
  position: absolute;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 0;
  box-shadow: ${({ theme }) => theme.shadow.base};
`;

export const CityItem = styled.li`
  color: ${({ theme }) => theme.colors.black};
  padding: 0.7rem 0.5rem;
  max-width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
