import Button, { buttonProps } from "../../components/button";

export default {
  title: "Components/Button",
  component: Button
}


export const ButtonTemplate = (args: buttonProps) => <Button {...args} />;


export const example = ButtonTemplate.bind({})
example.args = {
  label: 'asd'
}