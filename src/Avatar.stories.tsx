import React from "react";
import Avatar from "./Avatar";
import "./index.css";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    status: {
      options: ['online','offline'],
      control: { type: "select" },
    },
  },
};

//👇 We create a “template” of how args map to rendering
export const Template = (args: any) => <Avatar {...args} />;
Template.args={
    //children:"Sign in",
    //className:"",
    //disabled:false,
    //allow:false,
    //type:"submit"

};

 
