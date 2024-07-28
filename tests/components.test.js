import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import About, { aboutText } from "@/components/about.astro";

test("About", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(About);
  expect(result).toContain("m-10 text-left text-xl", { text: aboutText });
});
