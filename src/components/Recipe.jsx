import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import food from "../assets/food1.jpg";
import { FaRegClock } from "react-icons/fa";
import { FaFire } from "react-icons/fa";

const Recipe = (props) => {
  const [foodItem, setFoodItem] = useState([]);
  const [wantToCook, setWantToCook] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setFoodItem(data));
  }, []);

  const handleWantToCook = (id) => {
    id = parseInt(id) - 1;
    const getId = wantToCook.map((item) => {
      const cardId = parseInt(item.recipe_id);
      return cardId;
    });

    if (id === getId) {
      return;
    }
    console.log(typeof getId);
    setWantToCook([...wantToCook, foodItem[id]]);
  };

  return (
    <section className='mb-20'>
      <h1>
        {/* {wantToCook.forEach((item) => {
          const x = parseInt(item.recipe_id);
          console.log(typeof item.recipe_id);
          console.log("x is", typeof x);
        })} */}
      </h1>
      <div className='mb-12'>
        <h2 className='text-2xl lg:text-5xl font-bold text-center mt-12'>
          Our Recipes
        </h2>
        <p className='max-w-[800px] mx-auto text-center text-base md:text-xl mt-5 text-[#03071299]'>
          Yes, you can run unit tests and view the results directly within the
          app. The integrated testing features allow for a streamlined.
        </p>
      </div>

      {/* recipe card */}
      <div className='grid grid-cols-5 gap-6'>
        {/* food items (left side) */}
        <div className='col-span-5 md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {foodItem.map((food) => (
            <div key={food.recipe_id} className='border p-6 rounded-2xl'>
              <img className='rounded-2xl' src={food.recipe_img} alt='' />
              <h2 className='text-2xl font-bold my-5'>{food.recipe_name}</h2>
              <p className='border-b-2 pb-5 text-gray-700 font-normal'>
                {food.recipe_desc}
              </p>

              <h3 className='text-lg text-gray-900 font-semibold mb-2'>
                Ingredients: 6
              </h3>
              <ul className='border-b-2 pb-5 *:list-disc *:ml-9 *:text-gray-600 flex flex-col gap-1'>
                {food.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className='flex items-center justify-between my-5'>
                <p className='flex items-center gap-2'>
                  <FaRegClock />
                  <span>{food.preparing_time} minutes</span>
                </p>
                <p className='flex items-center gap-2'>
                  <FaFire />
                  <span>{food.calories} calories</span>
                </p>
              </div>

              <button
                onClick={() => handleWantToCook(food.recipe_id)}
                className='bg-green-400 px-7 py-2 text-black text-xl font-semibold rounded-full'
                type='button'
              >
                Want to Cook
              </button>
            </div>
          ))}
        </div>

        {/* cooking counter (right side) */}
        <div className='col-span-5 md:col-span-2 border rounded-2xl'>
          {/* want to cook */}
          <div>
            <h2 className='text-2xl font-bold px-4 text-center py-4'>
              Want to cook: {wantToCook.length}
            </h2>
            <hr className='w-10/12 mx-auto' />

            <table className='flex flex-col justify-center my-4 w-full border'>
              <thead className='py-2'>
                <tr className='flex items-center gap-5 md:gap-14 md:ml-9'>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>

              <tbody className='space-y-2'>
                {wantToCook.map((cookItem, i) => (
                  <tr
                    key={cookItem.recipe_id}
                    className='flex justify-between bg-gray-200 p-2 gap-2'
                  >
                    <td className='text-gray-600'>
                      <span>{i + 1}. </span> {cookItem.recipe_name}
                    </td>
                    <td className='text-gray-600'>
                      {cookItem.preparing_time} minutes
                    </td>
                    <td className='text-gray-600'>
                      {cookItem.calories} calories
                    </td>
                    <td>
                      <button
                        className='bg-green-500 px-2 text-sm md:text-lg md:px-4 py-1 text-blue-950 font-medium rounded-full'
                        type='button'
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* currently cooking */}
          <div>
            <h2 className='text-2xl font-bold px-4 text-center py-4'>
              Currently cooking: 02
            </h2>
            <hr className='w-10/12 mx-auto' />
            <table className='flex flex-col justify-center my-4 w-full border'>
              <thead className='py-2'>
                <tr className='flex justify-between items-center gap-14 px-2'>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>

              <tbody className='space-y-2'>
                <tr className='flex justify-between bg-gray-200 p-2'>
                  <td className='text-gray-600'>
                    <span>1. </span> Apple Juice
                  </td>
                  <td className='text-gray-600'>10 minutes</td>
                  <td className='text-gray-600'>550 calories</td>
                </tr>
                <tr className='flex justify-between bg-gray-200 p-2'>
                  <td className='text-gray-600'>
                    <span>1. </span> Apple Juice
                  </td>
                  <td className='text-gray-600'>10 minutes</td>
                  <td className='text-gray-600'>550 calories</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-lg font-medium px-2 mb-1'>
            Total Time = 45 minutes
          </p>
          <p className='text-lg font-medium px-2'>
            Total Calories = 1050 calories
          </p>
        </div>
      </div>
    </section>
  );
};

Recipe.propTypes = {};

export default Recipe;
