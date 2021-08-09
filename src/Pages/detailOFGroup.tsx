import React, { useEffect, useState } from "react";
import { fetchGroupsid } from "../api/group";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useLocation } from "react-router";
import { Group } from "../models/Group";
interface props {}
const DetailOFGroup: React.FC<props> = () => {
    const path = useLocation();
    var pathname = path.pathname;
    var id = pathname.substr(pathname.lastIndexOf("/") + 1);
    const [data, setdata] = useState<Group>();
    useEffect(() => {
        fetchGroupsid({ id: parseInt(id) })
            .then((response) => {
                //console.log(response.data);
                //setdata(response)// eslint-disable-line;

                setdata(response.data.data);
                console.log(data, 22222222);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    console.log(data, data && data?.is_private);
    return (
        <>
            <Header />
            <Sidebar />
            <div className=" md:ml-64 mr-3 mt-20  justify-center mb-4">
                <div
                    className={
                        "flex flex-row space-y-2 items-center justify-center h-full py-4 " +
                        "bg-yellow-300 border-red-700 text-black hover:bg-yellow-100 hover:text-red-700" +
                        " rounded-xl space-x-10 border-4 "
                    }
                >
                    <div className="w-auto ">
                        <img
                            className="flex-1 rounded-lg  border-2 border-white w-32 h-32 ml-2 sm:ml-0"
                            src="https://www.w3schools.com/howto/img_avatar2.png"
                        />
                        {/* </object> */}
                    </div>
                    <div className="w-2/3">
                        <p className="w-full text-xl  mb-4 font-semibold uppercase ">
                            {data?.name}
                        </p>
                        <p className="w-full pb-4 text-md tracking-wide leading-tight ">
                            {data?.description}
                        </p>
                        <p className="w-full pb-4 text-md tracking-wide leading-tight ">
                            <span className="font-bold">Chat Count</span>{" "}
                            {data?.chatCount}
                        </p>

                        <div className="rounded w-full ">
                            <div className="rounded-lg e   ">
                                <p className="m-auto inset-0 text-lg  leading-normal   text-black underline  font-bold">
                                    Creator Details :
                                </p>
                            </div>
                            <div className="rounded-lg e   ">
                                <p className="m-auto inset-0 text-md font-medium leading-normal   py-1">
                                    Id : {data?.creator?.id}
                                </p>
                            </div>
                            <div className=" rounded-lg    ">
                                <p className="m-auto inset-0 text-md font-medium leading-normal    py-1">
                                    First Name: {data?.creator.first_name}
                                </p>
                            </div>
                            <div className="rounded-lg   ">
                                <p className="m-auto inset-0 text-md font-medium leading-normal   py-1">
                                    Last Name: {data?.creator.last_name}
                                </p>
                            </div>
                        </div>
                        <div className="rounded w-full ">
                            <div className="rounded-lg e   ">
                                <p className="m-auto inset-0 text-lg  leading-normal   text-black underline  font-bold">
                                    State Details :
                                </p>
                            </div>
                            <div className="rounded-lg e   ">
                                <p className="m-auto inset-0 text-md font-medium leading-normal   py-1">
                                    Code : {data?.state?.state_code}
                                </p>
                            </div>
                            <div className=" rounded-lg    ">
                                <p className="m-auto inset-0 text-md font-medium leading-normal    py-1">
                                    Title: {data?.state?.title}
                                </p>
                            </div>
                            <div className="rounded-lg   ">
                                <p className="m-auto inset-0 text-md font-medium leading-normal   py-1">
                                    Created At: {data?.state?.created_at}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

DetailOFGroup.defaultProps = {};

export default React.memo(DetailOFGroup);
