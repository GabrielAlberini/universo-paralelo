import './Presentacion.css'

const Presentacion = () => {
    return (
        <div className='container'>
            <div className='cont-img'>
                <img className='img' src="https://i.ibb.co/r60xf8C/logopresentacion-1.jpg" alt="imagen de presentacion" />
            </div>
            <div className='cont-sombra'></div>
            <h1>¡Próximamente!</h1>
        </div>
    )
}

export { Presentacion };