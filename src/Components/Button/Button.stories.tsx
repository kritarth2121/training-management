import React from "react";

import Button from "./Button";
import "../index.css";
//👇 This default export determines where your story goes in the story list
export default {
  title: "My button",
  component: Button,
  argTypes:{
    theme:{
      options:['Primary','Info','Error','Warning','Success','Error'],
      control: { type: 'select' }
    },
    border:{
        options:['Outline','Solidify'],
        control: { type: 'select' }
      
    }
  }
};

//👇 We create a “template” of how args map to rendering
export const Template = (args: any) => <Button {...args} />;
Template.args={
    children:"Sign in",
    className:"",
    disabled:false,
    allow:false,

};

 
