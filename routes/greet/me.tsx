import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true, // Skip already inherited layouts
};

export default function MyPage() {
  return <p>Hello me without layout</p>;
}