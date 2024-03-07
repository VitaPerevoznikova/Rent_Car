import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const HeaderWrapper = styled.header`
  padding: 16px 0 0 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 48px;
  max-width: 1440px;
  margin: 0 auto;

  @media screen and (max-width: 425px) {
    gap: 8px;
  }
`;

export const NavMenu = styled(NavLink)`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var( --bg-white);
  color: var(--dark);
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  @media screen and (max-width: 425px) {
    padding: 10px 15px;
  }

  &.active {
    color: var(--hover-btn-text);
    background: var(--blue);
  }

  &:hover {
    color: var(--hover-btn-text);
    background: var(--blue);
  }
`;

export const HomeIcons = styled(HomeIcon)`
 
  @media screen and (min-width: 767px) {
    display: none; 
    margin-right: 5px;
  }
`;

export const Drives = styled(DriveEtaIcon)`
  @media screen and (min-width: 767px) {
    display: none;
    margin-right: 5px;
  }
`;

export const Favorite = styled(FavoriteBorderIcon)`
  @media screen and (min-width: 767px) {
    display: none;
    margin-right: 5px;
  }
`;

export const Span = styled.span`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;



