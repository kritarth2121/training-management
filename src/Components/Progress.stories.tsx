import React from "react";
import Progress from "./Progress";
import "./index.css";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Progress",
  component: Progress,
  argTypes: {
    
    theme: {
      options: ["Primary", "Info", "Error", "Warning", "Success", "Error"],
      control: { type: "select" },
    },
  },
};

//👇 We create a “template” of how args map to rendering
export const Template = (args: any) => <Progress {...args} />;
Template.args = {
    value:10
  //children:"Sign in",
  //className:"",
  //disabled:false,
  //allow:false,
  //type:"submit"
};
