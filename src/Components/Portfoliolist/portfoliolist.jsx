import "./portfoliolist.scss";

function Portfoliolist({id, title, active, setselected}) {
    return (
        <li className={"item " + (active && "active")} onClick={()=>setselected(id) } >{title}</li>
        );

}

export default Portfoliolist;