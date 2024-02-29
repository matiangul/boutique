import { Handlers, PageProps, type RouteContext } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render({ message: '' });
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const file = form.get("my-file") as File;

    if (!file) {
      return ctx.render({
        message: `Please try again`,
      });
    }

    console.log(await file.text());

    return ctx.render({
      message: `${file.name} uploaded!`,
    });
  },
};

export default function Upload(props: PageProps) {
  const { message } = props.data;
  return (
    <>
      <form method="post" encType="multipart/form-data">
        <input type="file" name="my-file" />
        <button type="submit">Upload</button>
      </form>
      {message ? <p>{message}</p> : null}
    </>
  );
}