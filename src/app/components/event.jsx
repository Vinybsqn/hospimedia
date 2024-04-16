"use client";
const Event = () => {
    const handleClick = (event) =>{
        event.stopPropagation(); // empeche la propagation de l'evenement
        event.preventDefault(); // empeche le comportement par defaut
        console.log(event);
        alert("tu as cliqué sur le bouton");
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>Mon bouton</button>
            <a href="/votre destination"></a>
        </div>
    );
}

export default Event;