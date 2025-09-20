import z from "zod";

const schema = z.object({
  colName: z.string().min(1).max(50),
});

type formType = z.infer<typeof schema>;

export { schema, type formType };
