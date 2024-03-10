import { FooterWrapper, Container, Logo } from './Footer.styled';
import logoFooter from '../../assets/car-rental-logopreview.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Logo src={logoFooter} alt="logo" />
        <div>
        {' '}
        &#169; Car Rental 2024 | Developed by{' '}
        <Link
          to="https://github.com/VitaPerevoznikova"
          target="_blank"
        >
          Vita Perevoznikova
        </Link>
      </div>
      </Container>
    </FooterWrapper>
  );
}
