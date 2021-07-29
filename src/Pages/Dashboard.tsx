import React, { ReactElement, useEffect, useState } from "react";
import { fetchGroups, logout } from "../api";
import Button from "../Components/Button/Button";
import Card from "../Components/Card";
import Header from "../Components/Header";
import Loading_icon from "../Components/Loading_icon.gif";
import Sidebar from "../Components/Sidebar";
interface props {}
const Dashboard: React.FC<props> = () => {
  const [query, setQuery] = useState("");
  const [loading, setloading] = useState(false);
  const [group, setGroup] = useState<any>([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setloading(true);

    const timeId = setTimeout(() => {
      // After 2 seconds set the show value to false
      setloading(false);
    }, 2000);
    fetchGroups({ status: "all-groups", query: query, offset: offset })
      .then((response) => {
        setGroup(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query, offset]);
  var value = "";
  const change = (e: any) => {
    value = e.currentTarget.value;
    setQuery(value);
  };

  return (
    <>
      <Header />

      <Sidebar />
      <div className="mt-28 md:ml-64 flex  justify-center justify-items-center text-center">
        <div className="  border-b-2 pb-3 w-1/2">
          <input
            name="password"
            className="outline-none"
            id="password"
            placeholder="Type things to search"
            onChange={change}
          />
        </div>
      </div>
      {loading ? (
        <div className=" md:ml-64 flex  justify-center h-40">
          <img className=" " src={Loading_icon} />{" "}
        </div>
      ) : (
        ""
      )}
      <div className=" md:ml-60 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {group.length > 0 ? (
          group.map((element: any, index: number) => {
            return (
              <>
                <Card
                  id={element.id}
                  creator={element.creator.first_name}
                  chatCount={element.chatCount}
                  key={element.id}
                  group_image_url={element.group_image_url}
                  name={element.name}
                  description={element.description}
                ></Card>
              </>
            );
          })
        ) : (
          <div className="text-3xl  font-medium"> No results</div>
        )}
      </div>
    </>
  );
};

Dashboard.defaultProps = {};

export default React.memo(Dashboard);
