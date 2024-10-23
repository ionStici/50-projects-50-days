import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export default function App() {
  return (
    <GoogleOAuthProvider clientId="159530533357-3pkesavmvai217001et509k63f5gr4lf.apps.googleusercontent.com">
      <GoogleLogin
        buttonText="Login"
        onSuccess={(response) => {
          console.log(response);
          fetch('http://localhost:3000/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token: response.credential }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      />
    </GoogleOAuthProvider>
  );
}
