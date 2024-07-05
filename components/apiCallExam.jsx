"use client";
import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";



const APICallExam = () => {

  async function getData() {
     try {
       const response = await fetch("https://webdev2-class-demo.vercel.app/api/sampleReqs/ehen2rfow");
       const data = await response.json();
       console.log(data);
     } catch (error) {
       console.error("Error:", error);
     }
   }

   function handleClicked(){
    getData();
   }

   return (
     <div>
       <div className="flex items-center justify-center">
         {<button className="bg-red-100 p-2 rounded-md border border-red-500" on onClick={handleClicked}>
           Submit
         </button>}
       </div>
     </div>
   );
};

export default APICallExam;
