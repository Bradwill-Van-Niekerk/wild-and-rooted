import '../Pages-Staff-CSS/Orders.css'

function Orders(){
    return(
        <>
        <div className="HomesBox1">
            <h1>
                Orders
            </h1>
        </div>
        <div className="HomesBox2"> {/*grid 1 with 3 columns*/}
            <div className="HomesBoxe1">
                <div className="HomesBoxes1">
                    <h2>
                        Waiting
                    </h2>
                </div>
                <div className="HomesBoxes2">
                
                </div>
            </div>
            <div className="HomesBoxe2">
                <div className="HomesBoxes1">
                    <h2>
                        In Progress
                    </h2>
                </div>
                <div className="HomesBoxes2">
                
                </div>
            </div>
            <div className="HomesBoxe3">
                <div className="HomesBoxes1">
                    <h2>
                        Orders Going out
                    </h2>
                </div>
                <div className="HomesBoxes2">
                
                </div>
            </div>
        </div>
        </>
    )
}

export default Orders