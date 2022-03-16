import {
  ContainerFooter,
  ItemFooter,
  LinkItemFooter,
  TxtItemFooter,
  IconFooter,
  ContainerIconFooter,
} from "../../StyledComponents/Footer";
// import { Link } from 'react-router-dom'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <ContainerFooter>
      <ItemFooter>
        <TxtItemFooter>Seguinos en Instagram!</TxtItemFooter>
        <ContainerIconFooter>
          <a
            href="https://www.instagram.com/radio.universoparalelo/"
            target="_blank"
            rel="noreferrer"
          >
            <IconFooter icon={faInstagram} />
          </a>
        </ContainerIconFooter>
      </ItemFooter>
      <ItemFooter>
        <div style={{ width: 150 }}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/PNKxZRN/pixlr-bg-result.png"
            alt="logo de programa"
          />
        </div>
      </ItemFooter>
      <ItemFooter>
        <TxtItemFooter>
          Powered by{" "}
          <LinkItemFooter
            href="https://www.linkedin.com/in/gabriel-alberini/"
            target="_blank"
            rel="noreferrer"
          >
            Gabriel Alberini
          </LinkItemFooter>
        </TxtItemFooter>
      </ItemFooter>
    </ContainerFooter>
  );
}

export { Footer };
