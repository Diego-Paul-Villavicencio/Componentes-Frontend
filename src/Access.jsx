import React, { useState, useEffect } from 'react';

const Access = () => {
  const [ecuadorTime, setEcuadorTime] = useState(new Date());
  const [spainTime, setSpainTime] = useState(new Date());
  const [showTime, setShowTime] = useState('Ecuador'); 

  useEffect(() => {
    const intervalId = setInterval(() => {

      setEcuadorTime(new Date());
      setSpainTime(new Date(ecuadorTime.getTime() + 7 * 60 * 60 * 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  
return (
    <section className="access-container" style={{ width: '20rem', height: '25rem' }}>
      <h4>Reloj EC ES</h4>
      <h1>
        {showTime === 'Ecuador' ? formatTime(ecuadorTime) : formatTime(spainTime)}
      </h1>
      <button onClick={() => setShowTime('Ecuador')}>Hora de Ecuador</button>
      <button onClick={() => setShowTime('España')}>Hora de España</button>
    </section>
  );
};

export default Access;

