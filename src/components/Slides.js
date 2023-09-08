import React, { useState } from 'react';

function Slides({slides}) {
   const [restarts,isrestarts]=useState(true);
   const [pres,ispre]=useState(false);
   const [nexts,isnext]=useState(false);
    
   function restarthandler(){
     if(restarts==true){
       
     }
   }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restarthandler}>Restart</button>
                <button data-testid="button-prev" className="small">Prev</button>
                <button data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">Slide Title Here</h1>
                <p data-testid="text">Slide Text Here</p>
            </div>
        </div>
    );

}

export default Slides;
