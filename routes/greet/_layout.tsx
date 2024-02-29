import { FreshContext } from "$fresh/server.ts";

export default async function Layout(req: Request, ctx: FreshContext) {
  // do something with state here
  const data = await fetch('http://angulski.pl');

  return (
    <div class="layout">
      <pre>{await data.text()}</pre>
      <ctx.Component />
    </div>
  );
}