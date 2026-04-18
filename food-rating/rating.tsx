import React, { useState } from "react";

interface FoodItem {

 id: number;

 name: string;

 rating: number;

}



const FoodRatingApp = () => {

 const [foods, setFoods] = useState<FoodItem[]>([

  { id: 1, name: "🍕 Pizza", rating: 0 },

  { id: 2, name: "🍔 Burger", rating: 0 },

  { id: 3, name: "🌮 Taco", rating: 0 },

  { id: 4, name: "🥗 Salad", rating: 0 },

 ]);

 const [filter, setFilter] = useState<"all" | "high" | "low" | "unrated">("all");

 const updateRating = (id: number, rating: number) => {

  setFoods((prev) =>

   prev.map((food) =>

    food.id === id ? { ...food, rating } : food

   )

  );

 };

 const filteredFoods = foods.filter((food) => {

  if (filter === "high") return food.rating >= 4;

  if (filter === "low") return food.rating < 3;

  if (filter === "unrated") return food.rating === 0;

  return true;

 });

 const ratedFoods = foods.filter((f) => f.rating > 0);



 const avgRating =

  ratedFoods.length > 0

   ? (ratedFoods.reduce((sum, f) => sum + f.rating, 0) / ratedFoods.length).toFixed(2)

   : null;



 const highest = foods.reduce((a, b) => (a.rating > b.rating ? a : b));

 const lowest = foods.reduce((a, b) => (a.rating < b.rating ? a : b));



 const highCount = foods.filter((f) => f.rating >= 4).length;

 const resetRatings = () => {

  setFoods((prev) => prev.map((f) => ({ ...f, rating: 0 })));

 };



 return (

  <div style={{ padding: "20px" }}>

   <h2>🍽 Food Rating App</h2>



   <div>

    <button onClick={() => setFilter("all")}>Show All</button>

    <button onClick={() => setFilter("high")}>High Rated (4+ ⭐)</button>

    <button onClick={() => setFilter("low")}>Low Rated (&lt;3 ⭐)</button>

    <button onClick={() => setFilter("unrated")}>Unrated (0 ⭐)</button>

   </div>


   <ul>

    {filteredFoods.map((food) => (

     <li key={food.id}>

      {food.name} - ⭐ {food.rating}

      <div>

       {[1, 2, 3, 4, 5].map((star) => (

        <button key={star} onClick={() => updateRating(food.id, star)}>

         {star}⭐

        </button>

       ))}

      </div>

     </li>

    ))}

   </ul>



   <h3>📊 Statistics</h3>

   {foods.every((f) => f.rating === 0) ? (

    <p>No ratings available</p>

   ) : (

    <div>

     <p>Average Rating: {avgRating}</p>

     <p>Highest Rated: {highest.name}</p>

     <p>Lowest Rated: {lowest.name}</p>

     <p>Foods with 4⭐ or more: {highCount}</p>

    </div>

   )}

   <button onClick={resetRatings}>Reset All Ratings</button>

  </div>

 );

};



export default FoodRatingApp;