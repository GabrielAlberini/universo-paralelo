import { Layout } from "../../components/Layout/Layout";
import styled from "styled-components";

const ContainerNotFoundPage = styled.section`
    display: flex;
    justify-content: center;
    font-size: 2rem; 
`

const ImgNotFoundPage = styled.img`
    width: 100%;
`

function NotFound() {
    return (
      <Layout>
          <ContainerNotFoundPage>
            <ImgNotFoundPage src="https://i.ibb.co/SXyz1BR/404-error-not-found-1.png" alt="404 error imagen" />
          </ContainerNotFoundPage>
      </Layout>
    );
  }
  
  export {NotFound};