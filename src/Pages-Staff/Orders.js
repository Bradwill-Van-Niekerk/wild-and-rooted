function Header(){
    return(
        <>
        <div className="HomesBox1">

        </div>
        <div className="HomesBox2"> {/*grid 1 with 3 columns*/}
            <div className="HomesBox1">
                <div className="HomesBoxes1">
                    <h2>
                        Orders coming in
                    </h2>
                </div>
                <div className="HomesBoxes2">
                
                </div>
            </div>
            <div className="HomesBox2">
                <div className="HomesBoxes1">
                    <h2>
                        In Progress
                    </h2>
                </div>
                <div className="HomesBoxes2">
                
                </div>
            </div>
            <div className="HomesBox3">
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