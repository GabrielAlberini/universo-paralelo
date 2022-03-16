import { ContainerFooter, ItemFooter, LinkItemFooter, TxtItemFooter, IconFooter, ContainerIconFooter} from '../../StyledComponents/Footer'
// import { Link } from 'react-router-dom'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
      <ContainerFooter>
        <ItemFooter>
          <TxtItemFooter>Seguinos en Instagram!</TxtItemFooter>
          <ContainerIconFooter>
            <IconFooter icon={faInstagram} /> 
          </ContainerIconFooter>
        </ItemFooter> 
        <ItemFooter>
          <TxtItemFooter>Universo Paralelo</TxtItemFooter>
        </ItemFooter>
        <ItemFooter>
          <TxtItemFooter>Powered by <LinkItemFooter href="https://gabrielalberini.vercel.app" target="_blank" rel='noreferrer'>Gabriel Alberini</LinkItemFooter></TxtItemFooter>
        </ItemFooter>
      </ContainerFooter>
    );
  }
  
  export {Footer};