import useState from "react";
import './InputPopup.css';


export const InputPopup = (props) => {
    const [show, setShow] = useState(props.show);
    setShow(props.show)

    

    return (
        <div className="inputPopupWrapper" style={ (show === true) ? "display:block" : "display:none" }>
            <div className="inputPopup">
                <form id="add_thing">
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                </form>
            </div>
        </div>
    )
}