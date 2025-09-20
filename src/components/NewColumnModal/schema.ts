import z from "zod";

const schema = z.object({
  colName: z
    .string()
    .min(1, "column name is require field")
    .max(50, "maximum character is 50"),
});

type formType = z.infer<typeof schema>;

export { schema, type formType };
