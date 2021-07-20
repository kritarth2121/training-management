import React from "react";
import Alert from "./Alert";
import "./index.css";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Alert",
  component: Alert,
  argTypes:{
  theme:{
    options:['Primary','Info','Error','Warning','Success','Error'],
    control: { type: 'select' }
  },
}
};

//👇 We create a “template” of how args map to rendering
export const Template = (args: any) => <Alert {...args} />;
Template.args = {
    theme:'Info'
  //children:"Sign in",
  //className:"",
  //disabled:false,
  //allow:false,
  //type:"submit"
};
