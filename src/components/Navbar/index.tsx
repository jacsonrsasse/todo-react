import styled from 'styled-components';

const NavbarDesign = styled.nav`
  position: fixed;
  background-color: black;
  height: 80px;
  width: 100vw;
`;

export function Navbar() {
  return <NavbarDesign></NavbarDesign>;
}
