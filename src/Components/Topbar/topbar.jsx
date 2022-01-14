import "./topbar.scss";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Email from "@material-ui/icons/Email";
import Menu from "@material-ui/icons/Menu";

function Topbar({ menustatus , state}) {
    return (
        <div className={"topbar " + (menustatus && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"><h1 class="headline">Roshan</h1><h1 className="root">Root.com</h1></a>
                    <div className="item-container">
                        <WhatsApp className="whatsapp" />
                        <span className="icon-text">+91 8542054691</span>
                    </div>
                    <div className="item-container">
                        <Email className="email"/>
                        <span className="icon-text">roshan.rks2812000@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="menu-ui">
                        <Menu onClick={() => state(!menustatus)} className="menu-icon" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Topbar;