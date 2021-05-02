import { useState } from "react";

function Detective(){
    const [sherlock, setSherlock] = useState("психопат");
    const handleClick = () => {
        return(
            setSherlock("высокоактивный социопат")
        )
    };
    return(
        <div>
           Шерлок - {sherlock}
           <button onClick={handleClick}>
                Узнать правду 
           </button>
        </div>
    )
};
export default Detective;