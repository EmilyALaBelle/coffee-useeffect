import { useState } from "react"

export default function SingleCoffee({ entireObject }) {
    const [favorite, setFavorite] = useState(false)

    return (
        <div className="menu-items__items" style={{ backgroundColor: favorite ? 'red' : '' }}>
            <img src={entireObject.image}
                alt="" />
            <div>
                <h3>{entireObject.title}</h3>
                <span>{entireObject.price}</span>
                <p>{entireObject.description}</p>
                <button onClick={() => setFavorite(true)}>Favorite</button>
            </div>
        </div>
    )
}