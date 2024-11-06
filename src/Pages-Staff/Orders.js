import '../Pages-Staff-CSS/Orders.css'
import { useState } from 'react';
import { OrderData } from './TempData'

function OrderLayoutWaiting(){
    const [query, setQuery] = useState(""); // State to store search input

    // Filter the data based on the search query
    const filteredData = OrderData.filter((items) =>
        items.subject.toLowerCase().includes(query.toLowerCase())|| items.name.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
    );
    return(
    <div>
    <div className='HomesBoxes1'><h1>Waiting</h1>
    {/* Search bar */}
    <input
        id='TexT1'
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on user input
    />
    <button type="button" id="clearButton1">Clear</button>
    </div>
    {/* Display filtered results */}
    <div className="HomesBoxes2">
        {filteredData.map((items) => (
            <></>
))}
    </div>
</div>)
}
function OrderLayoutInProgress(){
    const [query, setQuery] = useState(""); // State to store search input

    // Filter the data based on the search query
    const filteredData = OrderData.filter((items) =>
        items.subject.toLowerCase().includes(query.toLowerCase())|| items.name.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
    );
    return(
    <div>
    <div className='HomesBoxes1'><h1>In Progress</h1>
    {/* Search bar */}
    <input
        className='TutorSearch'
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on user input
    />
    </div>
    {/* Display filtered results */}
    <div className="HomesBoxes2">
        {filteredData.map((items) => (
            <></>
))}
    </div>
</div>)
}
function OrderLayoutFinished(){
    const [query, setQuery] = useState(""); // State to store search input

    // Filter the data based on the search query
    const filteredData = OrderData.filter((items) =>
        items.subject.toLowerCase().includes(query.toLowerCase())|| items.name.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
    );
    return(
    <div>
    <div className='HomesBoxes1'><h1>Completed</h1>
    {/* Search bar */}
    <input
        className='TutorSearch'
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on user input
    />
    </div>
    {/* Display filtered results */}
    <div className="HomesBoxes2">
        {filteredData.map((items) => (
            <>
            </>
))}
    </div>
</div>)
}
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
                <OrderLayoutWaiting/>
            </div>
            <div className="HomesBoxe2">
                <OrderLayoutInProgress/>
            </div>
            <div className="HomesBoxe3">
                <OrderLayoutFinished/>
            </div>
        </div>
        </>
    )
}

export default Orders