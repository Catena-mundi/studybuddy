import {GoogleLogout} from "react-google-login";

const clientID = "417296847596-r6q5rb2rcorjc79c07c6g7nn7alul939.apps.googleusercontent.com"
const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
};
const onFailure = (res) => {
    console.log('[Login failed] res:', res);
};

export default function LoginButton() {
    return (
        <div>
        <GoogleLogout clientId={clientID}
                      buttonText="Login"
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                      style={{ marginTop: "100px"}}
                      isSignedIn={true}
        />
    </div>
    )
}
