import React, { useEffect, useState } from "react";
import {filterData, apiUrl } from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner"
import { toast } from "react-toastify";

const App = () => {
  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      // console.log("start")
      // console.log(response);
      // console.log(output);
      // console.log(output.data);
      setCourses(output.data);
    }
    catch(error){
      toast.error("ntework issue");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData}
        category={category}
        setCategory={setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          loading? (<Spinner/>):(<Cards courses={courses} category={category}/>)
        }
        
      </div>
      
    </div>
  );
};

export default App;
