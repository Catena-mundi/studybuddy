import Button from "react-bootstrap/Button";
function Lobby_row(props) {
    
    return <div class = "row mb-3">
        <div class = "col">{props.dataFromParent.time}</div>
        <div class = "col">{props.dataFromParent.title}</div>
        <div class = "col">{props.dataFromParent.location}</div>
        <div class = "col">
            <Button>Join now</Button>
        </div>
        <div class = "col">...</div>
    </div>;
}
export default Lobby_row