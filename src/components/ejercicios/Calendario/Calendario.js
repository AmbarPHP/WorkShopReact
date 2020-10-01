import React from 'react';
import Header from './Header';
import CalendarBody from './CalendarB';
import './Calendario.css';



const Calendario =() =>{
// Declaración de una variable de estado que llamaremos "tipo"
// const [tipo, setTipo] = useState(0);

    return (
            <div className="CalendarioCont">
            <Header >

            </Header>
            <CalendarBody>

            </CalendarBody>
            </div>
            
        
    );
}

export default Calendario;