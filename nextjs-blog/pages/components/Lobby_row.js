import Button from "react-bootstrap/Button";
function Lobby_row(props) {
    
    return <div class = "row">
        <div class = "col">12:57</div>
        <div class = "col">Example meeting</div>
        <div class = "col">Location</div>
        <div class = "col">
            <Button>Join now</Button>
        </div>
        <div class = "col">...</div>
    </div>;
}
export default Lobby_row