import React, { useEffect, useState } from "react";
import { client } from "./Url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const Cars = () => {
  const [carData, setCarData] = useState([]);

  const baseUrl = "http://localhost:8000";

  useEffect(() => {
    fetchCarData();
  }, []);

  const fetchCarData = async () => {
    await client
      .get("/carlisting")
      .then((res) => {
        console.log(res.data);
        setCarData(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="relative h-full bg-black-2 flex flex-col items-center pt-20 pb-20 mx-auto text-white lg:w-10/12">
        <span className="relative h-[40px] w-[600px] mt-4">
          <input className="h-[40px] w-[600px] border border-yellow py-1 px-4 text-sm rounded-full bg-inherit" />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-4 top-3 text-yellow"
          />
        </span>
        <div className="text-left w-full mt-10 flex flex-col gap-2">
          <div className="text-lg">Explore Cars</div>
          <div className="flex justify-between items-center">
            <p className="text-sm">
              Explore a variety of our luxury cars available for rent.
            </p>
            <div className="flex gap-8 2xl:gap-10">
              <button className="flex items-center gap-2 border px-4 py-1 rounded-lg hover:text-yellow hover:border-yellow">
                Price
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
              <button className="flex items-center gap-2 border px-4 py-1 rounded-lg hover:text-yellow hover:border-yellow">
                Year
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
              <button className="flex items-center gap-2 border px-4 py-1 rounded-lg hover:text-yellow hover:border-yellow">
                Brand
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
              <button className="flex items-center gap-2 border px-4 py-1 rounded-lg hover:text-yellow hover:border-yellow">
                Rating
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-start gap-4 w-full mt-4 lg:mb-8 2xl:mb-14 p-1">
          {carData &&
            carData.map((car, index) => {
              return (
                <div
                  key={index}
                  className="relative w-[250px] h-[270px] 2xl:w-[370px] 2xl:h-[390px] hover:scale-105 duration-75"
                >
                  <img
                    src={baseUrl + car.image_file}
                    className="object-cover w-[250px] h-[270px] 2xl:w-[370px] 2xl:h-[390px] rounded-lg shadow-lg"
                  />
                  <div className="absolute bottom-0 w-full p-2 text-sm">
                    <p>{car.make}</p>
                    <p>$ {car.daily_rate}/day</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Cars;
