import React, { useState } from 'react';

function Slides({slides}) {
   const [restarts,isrestarts]=useState(true);
   const [pres,ispre]=useState(false);
   const [nexts,isnext]=useState(false);
    
  

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restarthandler}>Restart</button>
                <button data-testid="button-prev" className="small">Prev</button>
                <button data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{title}</h1>
                <p data-testid="text">{text}</p>
            </div>
        </div>
    );

}

export default Slides;
