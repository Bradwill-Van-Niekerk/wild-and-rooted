

function Header(){
    return(
        <>
        
        </>
    )
}
function List(){
    return (
        <div className="side-nav">
            <ol>
                <li>
                    <h2 className="h2Homes">Home</h2>
                </li>
                <li>
                    <h2 className="h2Homes">Orders</h2>
                </li>
            </ol>

        </div>
    )
}
function Footer(){
    return(
    <div>
        <div class="footer">
            <h3>
                <ol>
                    <li>
                        <a>FAQ</a>
                    </li>
                    <li>
                        <a>Help</a>
                    </li>
                    <li>
                        <a>Comment</a>
                    </li>
                </ol>
            </h3>
        </div>
        <div class="footer-text">
            <b>
            121, 3rd floor, Marry Orthon
            <br/>Belgravia Street, Athlone
            <br/>Cape Town,7764
            </b>
        </div>
    </div>
    )
}

function Homes(){
    return(
        <div className="HomesBody">
            <Header/>
            <List/>
            <Footer/>
        </div>
    )
}

export default Homes