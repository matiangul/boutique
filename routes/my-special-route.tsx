import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipAppWrapper: true, // Skip the app wrapper during rendering
};

export default function Page() {
  return <html>Empty Page</html>
}