import "../Pages-Staff-CSS/Inventory.css";
import { Link } from "react-router-dom";

function SideBar(){
    return(
        <>
        <div>
            <p>
            <ol>
                <li>
                    
                    <Link to="/Inventory/Fishes" />Fish
                </li>
                <li>
                    <Link to="/Inventory/Meats" />Meats
                </li>
                <li>
                    <Link to="/Inventory/Fruits" />Fruits
                </li>
                <li>
                    <Link to="/Inventory/Vegetables" />Vegetables
                </li>
            </ol>
            </p>
        </div>
        </>
    )
}

function Data(){
    return(
        <>
        <div className="">
            
        </div>
        </>
    )
}

function Inventory(){
    //usestate for each of the side bar

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