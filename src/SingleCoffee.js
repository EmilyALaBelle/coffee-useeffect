export default function SingleCoffee({entireObject}) {
    return (
        <div className="menu-items__items">
            <img src= {entireObject.image}
                alt="" />
            <div>
                <h3>{entireObject.name}</h3>
                <span>Price: {entireObject.price}</span>
                <p>{entireObject.description}</p>
            </div>
        </div>
    )
}