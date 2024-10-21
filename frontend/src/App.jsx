import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function App() {
  return (
    <GoogleOAuthProvider clientId="344895871832-kfrs006bg9urj5btjsn5m49tboo2b0oc.apps.googleusercontent.com">
      <GoogleLogin
        buttonText="Login"
        onSuccess={(response) => {
          console.log(response);
          fetch("http://localhost:3000/auth/google-authentication", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: response.credential }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      />
    </GoogleOAuthProvider>
  );
}
