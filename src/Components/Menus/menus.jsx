import "./menus.scss";
function Menus({ menustatus,state}) {
    return (
        <div className={"menu " + (menustatus && "active" )}>
            <ul className="menulist">
                <li className="items">
                    <a onClick={() => { state(!menustatus)}} href="#intro" className="link">Home</a>
                </li>
                <li className="items">
                    <a onClick={() => { state(!menustatus) }} href="#about" className="link">About</a>
                </li>
                <li className="items">
                    <a onClick={() => { state(!menustatus) }} href="#portfolio" className="link">Portfolio</a>
                </li>
                <li className="items">
                    <a onClick={() => { state(!menustatus) }} href="#testimonial" className="link">Testimonials</a>
                </li>
                <li className="items">
                    <a onClick={() => { state(!menustatus) }} href="#contact" className="link">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menus;