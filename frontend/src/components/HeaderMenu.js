import React from 'react';
import styled from 'styled-components';
// import {Grid} from '@mui/material';

// components
import { head_1 } from '../shared/textStyle';

const HeaderMenu = () => {
  return (
    <>
        <Menus>
            <div>이달의 OTT</div>
            <div>마이페이지</div>
            <div>팀소개</div>
        </Menus>
    </>
  );
};

// justify-content: flex-end;

// const Menu = styled.ul`
//   display: flex;
//   justify-content: flex-end;
//   position: fixed;
//   margin-top: 30px;
// `;

// const MenuItem = styled.li`
//   ${head_1}
//   text-align: center;
//   display: flex;
//   justify-content: space-between;
//   margin-left: 5rem;
//   cursor: pointer;
// `;

const Menus = styled.div`
  ${head_1}
  color: white;
  display: flex;
  alignItems: center;
  font-weight: nomal;
  div {
    margin-left: 30px;
    &:hover {
      color: var(--main);
    }
  }
`;
// margin-left: 1rem;
// flex-grow: 0;



export default HeaderMenu;
