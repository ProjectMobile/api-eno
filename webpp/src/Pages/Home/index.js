import EventsList from '../../Components/EventsList';
import Header from '../../Components/Header';
import './styles.css';

function Event() {
    return (
        <>
            <Header />
            <EventsList />
            <Header />
        </>
    );
}

export default Event;