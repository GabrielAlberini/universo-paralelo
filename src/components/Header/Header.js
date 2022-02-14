import { ContainerHeader, ContainerImgHeader, ImgHeader, TextHeader, SocialIconHeader, ContainerItemHeader } from '../../StyledComponents/Header'
import { faFacebook, faWhatsapp, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
      <ContainerHeader>
        <ContainerImgHeader>
          <ImgHeader src="https://i.ibb.co/Vt2zygh/logo.jpg" alt="logo de universo paralelo" />
        </ContainerImgHeader>
        <ContainerItemHeader>
          <TextHeader>Programación</TextHeader>
        </ContainerItemHeader>
        <ContainerItemHeader>
          <SocialIconHeader icon={faFacebook} />
          <SocialIconHeader icon={faWhatsapp} />
          <SocialIconHeader icon={faInstagram} />
          <SocialIconHeader icon={faTwitter} />
          <SocialIconHeader icon={faYoutube} />
        </ContainerItemHeader>
      </ContainerHeader>
    );
  }

  export {Header}; 