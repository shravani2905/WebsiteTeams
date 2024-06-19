
import React, { useState, useEffect } from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';
const usePointerGlow = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const syncPointer = ({ x: pointerX, y: pointerY }) => {
      const x = pointerX.toFixed(2);
      const y = pointerY.toFixed(2);
      const xp = (pointerX / window.innerWidth).toFixed(2);
      const yp = (pointerY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty('--x', x);
      document.documentElement.style.setProperty('--xp', xp);
      document.documentElement.style.setProperty('--y', y);
      document.documentElement.style.setProperty('--yp', yp);
      setStatus({ x, y, xp, yp });
    };

    document.body.addEventListener('pointermove', syncPointer);
    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  return [status];
};

const App = () => {
  usePointerGlow();

  return (
    <main>
      <div className='mainflex'>
        <div>
        <article data-glow>
        <span data-glow />
        <h2 className="main-card-title">Faculty Coordinators</h2>
        <p className="main-card-text">Meet our experienced faculty coordinators.</p>
        <button data-glow>
        <Link to="/faculty" >
        <span className='knowmore'>Know more</span>
        </Link>
        </button>
      </article>
        </div>
      
      <article data-glow>
        <span data-glow />
        <h2 className="main-card-title">Committee Members</h2>
        <p className="main-card-text">Get to know our dedicated committee members.</p>
        <button data-glow>
        <Link to="/committee" >
          <span  className='knowmore'>Know more</span>
          </Link>
          </button>
      </article>
      </div>
      
    </main>
  );
};

export default App;