import Card from "./Card";
import { options } from "./constants";

export default {
  title: "Button",
  component: <Card />,
};
const Template = (args) => <Card {...args} />;

export const Enabled = Template.bind({});
export const Disabled =  Template.bind({});
Disabled.args = {
  isdisabled: true,
};
export const Outlined =  Template.bind();
Outlined.args = {
  isoutlined: true,
};
