import Button, { buttonProps } from "../../components/button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    label: {
      values: ['Example1', 'Example2']
    }
  }
}

export const ButtonTemplate = (args: buttonProps) => <Button {...args} />;
