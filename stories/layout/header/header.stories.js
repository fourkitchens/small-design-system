import { document, console } from "global";
import { storiesOf } from "@storybook/html";
import { header } from "./headerHTML";

storiesOf("Layout|Header", module).add("Header", () => header);
