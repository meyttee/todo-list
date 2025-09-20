import z, { string } from "zod";

const schema = z.object({
  title: string().min(5).max(50),
  description: string().min(0).max(50),
});

type formType = z.infer<typeof schema>;

export { schema, type formType };
