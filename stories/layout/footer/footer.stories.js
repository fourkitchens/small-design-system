import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import { footer } from "./footerHTML";

storiesOf("Layout|Footer", module).add("Footer", () => footer);
