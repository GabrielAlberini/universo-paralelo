import { IFrameSpotify } from '../IFrameSpotify/IFrameSpotify'
import { ContainerHeader, ContainerImgHeader, ImgHeader, SocialIconHeader, ContainerItemHeader } from '../../StyledComponents/Header'
import { faFacebook, faWhatsapp, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
      <ContainerHeader>
        <ContainerImgHeader>
          <ImgHeader src="https://i.ibb.co/Vt2zygh/logo.jpg" alt="logo de universo paralelo" />
        </ContainerImgHeader>
        <ContainerItemHeader>
            <IFrameSpotify />
        </ContainerItemHeader>
        <ContainerItemHeader>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
            <SocialIconHeader icon={faFacebook} />
            <SocialIconHeader icon={faWhatsapp} />
            <SocialIconHeader icon={faInstagram} />
            <SocialIconHeader icon={faTwitter} />
            <SocialIconHeader icon={faYoutube} />
          </div>
        </ContainerItemHeader>
      </ContainerHeader>
    );
  }

  export {Header}; 