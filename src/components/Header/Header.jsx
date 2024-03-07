import {
  NavMenu,
  HeaderWrapper,
  Container,
  Span,
  HomeIcons,
  Drives,
  Favorite,
} from './Header.styled';

export default function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <NavMenu to="/">
          <HomeIcons />
          <Span>Home</Span>
        </NavMenu>
        <NavMenu to="/catalog">
          <Drives />
          <Span>Catalog</Span>
        </NavMenu>
        <NavMenu to="/favorites">
          <Favorite />
          <Span>Favorites</Span>
        </NavMenu>
      </Container>
    </HeaderWrapper>
  );
}
