import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContainerFooter = styled.section`
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #222;
    @media (max-width: 480px) {
        flex-direction: column;
        text-align: center;
    }
`

const ItemFooter = styled.article`
    padding: 1rem;
`

const TxtItemFooter = styled.p`
    color: white;
`

const ContainerIconFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const IconFooter = styled(FontAwesomeIcon)`
    color: orange;
    cursor: pointer;
    font-size: 2rem;
    transition: all .2s ease;
    &:hover {
        color: white;
    }
`

const LinkItemFooter = styled.a`
    color: orange;
    text-decoration: none;
    transition: all .2s ease;
    &:hover {
        color: green;
    }
`

export { ContainerFooter,
ItemFooter,
LinkItemFooter,
TxtItemFooter,
IconFooter,
ContainerIconFooter
}