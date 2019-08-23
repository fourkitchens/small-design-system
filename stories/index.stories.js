import { storiesOf } from "@storybook/html";
import logo from "./utils/4k-logo.svg";

storiesOf("Introduction|About", module).add(
  "About this Design System",
  () =>
    `<div style="margin: 4rem auto; max-width: 85%; text-align:center;"><img src="${logo}" style="margin-bottom: 4rem;"/><h1>This design system is a simple example of how you can get started making your own.</h1>
    <p><a href="https://fourkitchens.com" class="button btn-primary" style="margin-top:2rem;">Read the Article</a></p><p><a style="text-decoration: none;" href="https://github.com/fourkitchens/small-design-system"><i class="fab fa-github"></i> Code on Github</a></p></div>`
);
