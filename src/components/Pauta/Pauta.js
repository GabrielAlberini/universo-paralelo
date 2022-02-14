import { ContainerImgPautas, ImgPauta } from '../../StyledComponents/Pautas'

function Pauta({img}) {
  return (
    <ContainerImgPautas>
      <ImgPauta src={img} alt="imagen de pauta"/>
    </ContainerImgPautas>
  );
}

export {Pauta};