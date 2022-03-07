import { Layout } from "../../components/Layout/Layout"
import { ContainerPautas } from "../../components/ContainerPautas/ContainerPautas"
import { ContainerNoticias } from '../../components/ContainerNoticias/ContainerNoticias'

const Home = () => {
    return(
        <Layout>
            <ContainerPautas />
            <ContainerNoticias />
        </Layout>
    )
}

export { Home };