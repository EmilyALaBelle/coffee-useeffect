export default function SingleCoffee(props) {

    console.log("props here", props.name)

    return (
        <div className="menu-items__items">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
                alt="" />
            <div>
                <h3>{props.name}</h3>
                <p>Black Coffee is as simple as it gets</p>
            </div>
        </div>
    )
}