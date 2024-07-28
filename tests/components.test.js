import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import About from "@/components/about.astro";

test("About", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(About);
  expect(result).toContain(
    "m-10 text-left text-xl",
    "orem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiorestenetur, et animi libero repudiandae earum impedit nihil pariatur architectoaspernatur dignissimos excepturi. Cumque, laboriosam fugiat! Sit saepeexplicabo quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.Nemo doloremque omnis quas voluptatibus, aspernatur repudiandae quo, magnamperferendis blanditiis deserunt placeat at voluptate porro, adipisciexpedita? Et incidunt architecto perferendis? Lorem ipsum dolor sit ametconsectetur adipisicing elit. Repellendus assumenda quaerat perspiciatis?Nostrum recusandae, ratione fugiat qui expedita, dignissimos evenietcorrupti sit maxime totam inventore voluptatem, itaque quibusdam doloremqueunde!",
  );
});
