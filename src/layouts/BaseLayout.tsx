import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <BottomBar />
    </Container>
  );
};

export default Layout;
