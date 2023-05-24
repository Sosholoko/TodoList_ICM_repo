import { Auth0Provider } from "@auth0/auth0-react";

export const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-6snzrdotjprejvzf.us.auth0.com";
  const clientId = "m91QXXSE1HVOK8wNeBmxrEsKOhugOdd0";
  const redirectUri = "http://localhost:3000";

  return (
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
      {children}
    </Auth0Provider>
  );
};
