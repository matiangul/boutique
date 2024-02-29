import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(req) {
    const form = await req.formData();
    const email = form.get("email")?.toString();

    // Add email to list.

    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set("location", "/about");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function Subscribe() {
  return (
    <>
      <form method="post">
        <input type="email" name="email" value="" />
        <button type="submit">Subscribe</button>
      </form>
    </>
  );
}