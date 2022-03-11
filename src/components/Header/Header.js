import { Link } from 'react-router-dom';
import { IFrameSpotify } from '../IFrameSpotify/IFrameSpotify';
import { ContainerHeader, ContainerImgHeader, ImgHeader, SocialIconHeader, ContainerItemHeader, LinkIconSocial } from '../../StyledComponents/Header';
import { faFacebook, faWhatsapp, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';

const SOCIAL_LINK = [
  {
    icon: faFacebook,
    link: 'https://www.facebook.com/universoparalelo.radio'
  },
  {
    icon: faWhatsapp,
    link: '+5493425337915'
  },
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/radio.universoparalelo/'
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/universo_pa'
  },
  {
    icon: faYoutube,
    link: 'https://www.youtube.com/channel/UC-aGOJT37x_m2aX1j5oOCKA/featured'
  },
]

const Header = () => {
    return (
      <ContainerHeader>
        <ContainerImgHeader>
        <Link to={`/`}>
        <ImgHeader src="https://i.ibb.co/KyzRyd6/logo.png " alt="logo de universo paralelo" />
        </Link>

        </ContainerImgHeader>
        <ContainerItemHeader>
            <IFrameSpotify />
        </ContainerItemHeader>
        <ContainerItemHeader>
          <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
            {
              SOCIAL_LINK.map( socialNetwork => {
                return (
                  <LinkIconSocial href={socialNetwork.link} target='_blank' rel='noreferrer'>
                    <SocialIconHeader icon={socialNetwork.icon} />
                  </LinkIconSocial>
                )
              }) 
            }
          </div>
        </ContainerItemHeader>
      </ContainerHeader>
    );
  }

  export {Header}; 