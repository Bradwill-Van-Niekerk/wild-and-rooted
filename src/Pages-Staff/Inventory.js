

function sideBar(){

}

function Data(){

}

function Inventory(){
    return(
        <>
        <div className="InventoryBox1">

        </div>
        <div className="InventoryBox2"> {/* Grid 1 */}
            <div className="InventoryBoxes1">
                <sideBar />
            </div>
            <div className="InventoryBoxes2">
                <Data />
            </div>
        </div>
        </>
    )
}

export default Inventory