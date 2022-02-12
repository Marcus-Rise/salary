import React from "react";
import type { Meta, Story } from "@storybook/react";
import type { IResultProps } from "./results.component";
import { Results } from "./results.component";

const Config: Meta = {
  title: "components/Results",
  component: Results,
};

const Template: Story<IResultProps> = (args) => <Results {...args} />;

const Default = Template.bind({});
Default.args = {
  avans: 4000,
  salary: 10000,
  salaryPercent: 100,
  totalPercent: 100,
  total: 14000,
  avansPercent: 100,
};

export { Default };
export default Config;
