"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState(null);
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const fetchUsers = async () => {
    const res = await fetch("/api/data", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      setAllData(data);
      setUsers(data.data);
      setTotalUsers(data.totalUsers);
    }
    
    setLoading(false);
  };
  const [visibleItems, setVisibleItems] = useState(6);
  const featureIcons = {
    AI: "/images/gold.png",
    "Audio Call": "/images/gold.png",
    "Video Call": "/images/gold.png",
    Messages: "/images/gold.png",
    "Voice Notes": "/images/gold.png",
    "Unlimited Likes": "/images/gold.png",
    "Change Location": "/images/gold.png",
    "Profile Control": "/images/gold.png",
    "Turn off Ads": "/images/gold.png",
    Boost: "/images/gold.png",
    "Super Like": "/images/gold.png",
    "Reset Card": "/images/gold.png",
    "End-To-End Encryption": "/images/gold.png",
  };
  const toggleItems = () => {
    setVisibleItems(visibleItems === 6 ? users.length : 6);
  };
  const locationSorting = (e) => {
    const location = e.target.value;
    const item = allData.data.find((user) => user.location === location);
    console.log(item);
    if (location === "All") {
      setUsers(allData.data);
      return;
    } else {
      console.log(item);
      if (!item) setUsers([]);
      else setUsers([item]);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <Navbar />
      {loading ? (
        <div className="h-[60vh] flex items-center justify-center">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="p-4 md:p-10 lg:p-16 h-auto -mt-10" id="comparison">
          <h1
            className="heading text-3xl md:text-6xl text-primary font-bold font-conthrax mb-6"
            data-text="Kaba vs. Competitors"
          >
            KABA USERS
          </h1>
          <div className="flex my-4 justify-between">
            <h3></h3>
            <select
              onChange={locationSorting}
              className="bg-black/50 outline-none py-2 px-4 rounded-lg"
              name=""
              id=""
            >
              <option key={-1} value={"All"}>
                All
              </option>
              ;
              {allData?.data?.map((user, idx) => {
                return (
                  <option key={idx} value={user.location}>
                    {user.location}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col md:flex-row mt-4">
            <div className="flex-grow md:w-2/3">
              <div className="overflow-x-auto">
                <table className="min-w-full text-white border-collapse border border-white">
                  <thead>
                    <tr className="text-lg font-bold text-center">
                      <th className="px-2 py-2 text-xl border-b-2 border-white">
                        <span className="bg-white text-black p-1 px-4 font-bold font-conthrax flex items-center justify-center">
                          LOCATION
                          <Image
                            src="/images/icons/map-pin.svg"
                            alt="Feature Icon"
                            width={22}
                            height={22}
                            className="ml-2"
                          />
                        </span>
                      </th>
                      <th className="px-2 py-2 text-xl border-b-2 border-white">
                        <span className="bg-white text-black p-1 px-4 font-bold font-conthrax flex items-center justify-center">
                          USERS
                          <Image
                            src="/images/icons/users.svg"
                            alt="Kaba Icon"
                            width={22}
                            height={22}
                            className="ml-2"
                          />
                        </span>
                      </th>
                      <th className="px-2 py-2 text-xl border-b-2 border-white">
                        <span className="bg-white text-black p-1 px-4 font-bold font-conthrax flex items-center justify-center">
                          PERCENTAGE
                          
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.slice(0, visibleItems).map((item, index) => (
                      <tr
                        key={index}
                        className="text-lg border-b-2 border-white"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                      >
                        <td className="px-2 py-2 text-center border-r-2 border-white flex items-center justify-center">
                          <span>{item?.location}</span>
                        </td>
                        <td className="px-2 py-2 text-center border-r-2 border-white">
                          <span>{item?.count}</span>
                        </td>
                        <td className="px-2 py-2 text-center">
                          <span>
                            {((item?.count * 100) / totalUsers).toFixed(1)} %
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={toggleItems}
                  className="button bg-primary text-white px-6 py-3 text-lg rounded-lg shadow hover:bg-primary-dark"
                >
                  {visibleItems === 6 ? "Show More" : "Show Less"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Page;
/*
    100 = 10%
    900 = x;
    900 * 100 /100
 */
