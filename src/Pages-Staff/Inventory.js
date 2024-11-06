import "../Pages-Staff-CSS/Inventory.css"

function SideBar(){
    return(
        <>
        <h3>
            Index for the content
        </h3>
        </>
    )
}

function Data(){
    return(
        <>
        <div className="">
            shjdkahsdkajhdks
        </div>
        </>
    )
}

function Inventory(){
    return(
        <>
        <div className="InventoryBox1">
            <h1>
                Inventory
            </h1>
        </div>
        <div className="InventoryBox2"> {/* Grid 1 */}
            <div className="InventoryBoxes1">
                <SideBar />
            </div>
            <div className="InventoryBoxes2">
                <Data />
            </div>
        </div>
        </>
    )
}

export default Inventory