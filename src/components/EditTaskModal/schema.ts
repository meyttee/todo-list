import z, { string } from "zod";

const schema = z.object({
  title: string()
    .min(5, "title should have at least 5 character")
    .max(50, "maximum character is 50"),
  description: string().min(0).max(50, "maximum character is 50"),
  priority: z.number(),
  status: z.object({
    label: z.string(),
    value: z.string(),
  }),
});

type formType = z.infer<typeof schema>;

export { schema, type formType };
