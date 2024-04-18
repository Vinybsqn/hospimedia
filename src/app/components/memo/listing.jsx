const Listing = ({items}) => {
    return (
        <div suppressHydrationWarning={true}>
            <ul>
                {items.map( (item) =>  {
                    let className = item.completed ? 'completed-task' : '';
                    return (
                        <li key={item.id} className={className}>
                            {item.text}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Listing;