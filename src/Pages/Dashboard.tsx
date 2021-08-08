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
  This is Dashboard Component
  </>
);
}

Dashboard.defaultProps = {};
export default React.memo(Dashboard);