import React from "react";
import Login from "./Pages/Login";
import "./index.css";
//👇 This default export determines where your story goes in the story list
export default {
  title: "Login",
  component: Login,
};

//👇 We create a “template” of how args map to rendering
export const Template = (args: any) => <Login {...args} />;
Template.args={
    //children:"Sign in",
    //className:"",
    //disabled:false,
    //allow:false,
    //type:"submit"

};

 
