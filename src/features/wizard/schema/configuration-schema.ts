import { z } from "zod";

export const configurationSchema = z.object({
  currency: z.union([
    z.literal("BYN"),
    z.literal("RUB"),
    z.literal("USD"),
    z.literal("EUR"),
    z.literal("JPY"),
    z.literal("CNY"),
    z.literal("PLN"),
  ]),
});
