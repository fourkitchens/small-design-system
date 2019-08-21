import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import { typography } from "./typographyHTML";

storiesOf("Typography|Example", module).add(
  "Typography",
  () => `<div style="padding:3rem; max-width:95%;">${typography}</div>`
);
