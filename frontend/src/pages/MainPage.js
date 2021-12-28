import React from 'react';
import styled from 'styled-components';

// components
import Header from '../components/Header';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import { head_1 } from '../shared/textStyle';

const MainPage = () => {
  return (
    <Layout>
      <Header>
        <MenuWrap>
          <Menu>
            <MenuItem>
              <span>이달의 나의 OTT</span>
            </MenuItem>
            <MenuItem>
              <span>마이 페이지</span>
            </MenuItem>
            <MenuItem>
              <span>팀 소개</span>
            </MenuItem>
          </Menu>
        </MenuWrap>
      </Header>
    </Layout>
  );
};

const MenuWrap = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  margin-top: 30px;
`;

const MenuItem = styled.li`
  ${head_1}
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-left: 5rem;
`;

export default MainPage;
