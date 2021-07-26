import React from "react";
import Avatararray from "./AvatarArray";
import "./index.css";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Avatararray",
  component: Avatararray,
};

//👇 We create a “template” of how args map to rendering
export const Template = (args: any) => <Avatararray {...args} />;
Template.args = {
  //children:"Sign in",
  //className:"",
  //disabled:false,
  //allow:false,
  //type:"submit"
};
