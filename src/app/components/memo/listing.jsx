const Listing = ({items}) => {
    return (
        <div suppressHydrationWarning={true}>
            <ul>
                {items.map( (item) =>  { return (
                    <li key={item.id}>
                        {item.completed ? <s>{item.text}</s> : item.text}
                    </li>
                )})}
            </ul>
        </div>
    );
};

export default Listing;