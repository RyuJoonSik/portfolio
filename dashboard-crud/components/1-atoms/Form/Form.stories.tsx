import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Form from "./Form";

export default {
  title: "Atoms/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => <Form />;

export const Default = Template.bind({});
