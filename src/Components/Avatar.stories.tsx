import React from "react";
import Avatar from "./Avatar";
import "./index.css";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {
    status: {
      options: ["online", "offline"],
      control: { type: "select" },
    },
    size: {
      options: ["bigger", "medium", "smaller"],
      control: { type: "select" },
    },
  },
};

//👇 We create a “template” of how args map to rendering
export const Template = (args: any) => <Avatar {...args} />;
Template.args = {
  image: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg",
  status: "undefined",
  size: "large",
};
