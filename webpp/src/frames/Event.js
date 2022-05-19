import '../css/Event.css';

function Event() {

    return (
        <div className='event'>
            <header>
                <div className='logo'>
                    <label className='title'>7ª Fronteira</label>
                    <label className='title2'> FESTIVAL BINACIONAL </label>
                    <label className='title2'> DE ENOGASTRONOMIA </label>
                </div>
                <div className='type'>
                    <label>Eventos</label>
                </div>
                <div>
                    <label>?</label>

                </div>
            </header>
            <div>
                <button className='buttom'> Novo Evento </button>
            </div>
        </div>
    );
}


export default Event;