import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: <Button />,
  args: {
    children: "I am a Button",
  },
};
function Template(args) {
  return <Button {...args} />;
}

export const Enabled = Template.bind({});
export const Disabled = Template.bind({});
Disabled.args = {
  isdisabled: true,
};
export const Outlined = Template.bind();
Outlined.args = {
  isoutlined: true,
};
