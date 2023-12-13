import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetExt from "@twind/preset-ext";
import presetTypography from "@twind/preset-typography";

export default defineConfig({
  presets: [presetTailwind(), presetExt(), presetTypography()],
});
