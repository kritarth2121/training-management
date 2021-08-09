import { useFormik } from "formik";
import { FC, memo, useEffect, useState } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../store";
import { meSelector } from "../selectors/auth.selectors";
import { User } from "../models/User";
import { me, updateUser } from "../api/auth";
import Avatar from "../Components/Avatar";
import Button from "../Components/Button/Button";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
interface Props {}

const ProfilePage: FC<Props> = (props) => {
    const user = useAppSelector(meSelector);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    // first_name?: string;
    // middle_name?: string;
    // last_name?: string;
    // profile_pic_url?: string;
    // phone_number?: string;
    // alternate_phone_number?: string;
    // email?: string;
    // gender?: PeopleGender;
    // birth_year?: string;
    // birth_month?: string;
    // birth_date?: string;
    // death_year?: string;
    // death_month?: string;
    // death_date?: string;
    // party?: string;
    // home_state_code?: string;
    // education?: string;
    // hometown?: string;

     
      const [data, setdata] = useState<User>({
        profile_pic_url: user && user.profile_pic_url,
        first_name:  user && user.first_name,
        middle_name:  user && user.middle_name,
        last_name:  user && user.last_name,
        phone_number:  user && user.phone_number,
        birth_date:  user && user.birth_date,
        birth_month:  user && user.birth_month,
        birth_year:  user && user.birth_year,
        email: user && user.email,
        hometown:  user && user.hometown,
    });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log("submit");
    updateUser(data).then(() => history.push("/profile"));
  };
    useEffect(()=>{
        setdata({
          profile_pic_url: user && user.profile_pic_url,
          first_name:  user && user.first_name,
          middle_name:  user && user.middle_name,
          last_name:  user && user.last_name,
          phone_number:  user && user.phone_number,
          birth_date:  user && user.birth_date,
          birth_month:  user && user.birth_month,
          birth_year:  user && user.birth_year,
          email: user && user.email,
          hometown:  user && user.hometown,
      })
        
    },[user])
    const reset=()=>{
        setdata({
            profile_pic_url: user && user.profile_pic_url,
            first_name:  user && user.first_name,
            middle_name:  user && user.middle_name,
            last_name:  user && user.last_name,
            phone_number:  user && user.phone_number,
            birth_date:  user && user.birth_date,
            birth_month:  user && user.birth_month,
            birth_year:  user && user.birth_year,
            email: user && user.email,
            hometown:  user && user.hometown,
        })
    }
    const handlechange = (event: any) => {
        console.log("handlechange");
        const nameOfChangeInput = event.target.name;
        //eslint-disable-next-line
        setdata({ ...data, [nameOfChangeInput]: event.target.value });
        console.log(data,111111111);
    };
    console.log(user&&user.profile_pic_url,"profile",data.profile_pic_url);

    if (user === undefined) {
        return <></>;
    }

    return (
        <>
            <Header></Header>
            <Sidebar />
            <div className="bg-gray-300 md:ml-64 p-2 mt-20">
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="bg-white rounded m-3 p-5">
                        <h3 className="font-semibold w-full pr-12 ">
                            GENERAL INFORMATION
                        </h3>
                        <div className="flex flex-col md:flex-row justify-evenly">
                            <div className="flex  items-center flex-col ">
                                <img
                                    className="w-52 "
                                    alt="profile"
                                    src={user.profile_pic_url}
                                />
                                <input
                                    name="profile_pic_url"
                                    className="h-10 mt-5 px-3  w-96 border rounded"
                                    placeholder="Change Image URL"
                                    value={data.profile_pic_url}
                                    onChange={handlechange}
                                ></input>
                            </div>
                            <div>
                                <h4 className="ml-6 mt-4">Name</h4>
                                <div className="flex max-w-full">
                                    <input
                                        type="text"
                                        name="first_name"
                                        onChange={handlechange}
                                        className="h-10 mt-5 px-3 w-32 border rounded mx-4"
                                        value={data.first_name}
                                        placeholder="First Name"
                                    ></input>
                                    <input
                                        name="middle_name"
                                        onChange={handlechange}
                                        value={data.middle_name}
                                        className="h-10 mt-5 px-3 w-32 border rounded mx-4"
                                        placeholder="Middle Name"
                                    ></input>
                                    <input
                                        name="last_name"
                                        className="h-10 mt-5 px-3 w-32 border rounded mx-4"
                                        value={data.last_name}
                                        onChange={handlechange}
                                        placeholder="Last Name"
                                    ></input>
                                </div>

                                <h4 className="ml-6 mt-4">Date Of Birth</h4>
                                <div className="flex max-w-full">
                                    <input
                                        name="birth_date"
                                        className="h-10 mt-5 px-3  w-20 border rounded mx-4"
                                        value={data.birth_date}
                                        onChange={handlechange}
                                        placeholder="Day"
                                    ></input>
                                    <input
                                        name="birth_month"
                                        className=" h-10 mt-5 px-3  w-20 border rounded mx-4"
                                        value={data.birth_month}
                                        onChange={handlechange}
                                        placeholder="Month"
                                    ></input>
                                    <input
                                        name="birth_year"
                                        className="h-10 mt-5 px-3  w-20 border rounded mx-4"
                                        value={data.birth_year}
                                        onChange={handlechange}
                                        placeholder="Year"
                                    ></input>
                                </div>

                                {/* <h4 className="ml-6 mt-4">Education</h4>
                            <div className="flex max-w-full"></div> */}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded m-3 p-5">
                        <h3 className="font-semibold w-full pr-12 ">
                            CONTACT DETAILS
                        </h3>

                        <h4 className="ml-6 mt-4">Phone Number</h4>
                        <div className="flex ">
                            <input
                                name="phone_number"
                                className="h-10 mt-5 px-3  w-64 border rounded mx-4"
                                value={data.phone_number}
                                onChange={handlechange}
                                placeholder="Contact Details"
                            ></input>
                        </div>
                        <h4 className="ml-6 mt-4">Mail ID</h4>
                        <div className="flex max-w-full">
                            <input
                                name="email"
                                className="h-10 mt-5 px-3  w-64 border rounded mx-4"
                                value={data.email}
                                onChange={handlechange}
                                placeholder="email adress"
                            ></input>
                        </div>
                        <h4 className="ml-6 mt-4">Permanent Address</h4>
                        <div className="flex max-w-full">
                            <input
                                name="hometown"
                                className=" h-10 mt-5 px-3  w-64 border rounded mx-4"
                                value={data.hometown}
                                onChange={handlechange}
                                placeholder="address"
                            ></input>
                        </div>
                    </div>

                    <div className="flex justify-evenly">
                    <Button type="reset" onclick={reset}>Discard Changes</Button>
                        <Button type="submit">Save Changes</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

ProfilePage.defaultProps = {};

export default memo(ProfilePage);
