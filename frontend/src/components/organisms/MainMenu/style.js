import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

export const MenuStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  .burger {
    display: none;
    flex: 1;
  }
  .menu-cont {
    flex: 1;
  }
  @media (max-width: ${breakpoints.sm}) {
    .menu-cont {
      display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
      flex: 100%;
      z-index: 1;
      background: rgba(255, 255, 255, 0.5);
    }
    .burger {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      i {
        padding: 20px;
        font-size: 16px;
      }
    }
  }
  .ant-menu-overflowed-submenu {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  margin: -5px 20px 0 20px;
  width: 10rem;
`;
