import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
interface props{
}
const Dashboard: React.FC<props> = () =>{
return(<> 
<Header>

</Header>
<Sidebar />
<div className="md:ml-64 mt-20">
  This is Dashboard Component
  </div>
  </>
);
}

Dashboard.defaultProps = {};
export default React.memo(Dashboard);