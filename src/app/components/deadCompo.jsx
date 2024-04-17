import {useEffect} from "react";

const DeadCompo = () => {

    useEffect(() => {
        return () => {
            console.log('Nooooooon');
        }
    })

    return (
        <div>
            <h2>Dead Compo</h2>
        </div>
    );
}

export default DeadCompo;