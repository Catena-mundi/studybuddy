import {GoogleLogout} from "react-google-login";

const clientID = "417296847596-r6q5rb2rcorjc79c07c6g7nn7alul939.apps.googleusercontent.com"
const onSuccess = () => {
    alert("Logout successfully");
};

export default function LogoutButton() {
    return (
        <div>
            <GoogleLogout clientId={clientID}
                          buttonText="Logout"
                          onLogoutSuccess={onSuccess}
            />
        </div>
    )
}
