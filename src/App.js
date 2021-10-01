import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  Indian: [
    { name: "Malai Kofta", rating: "5/5" },
    { name: "Fried Paneer Pakora", rating: "3.5/5" }
  ],

  Mexican: [
    {
      name: "Vegetarian Burritos",
      rating: "4/5"
    },
    {
      name: "Paneer Tacos",
      rating: "3.5/5"
    }
  ],
  Italian: [
    {
      name: "Stuffed Cheesy Garlic Bread",
      rating: "3.5/5"
    },
    {
      name: "Pizza Margherita",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Indian");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1> 📚 Foods </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite foods. Select a category to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedCategory].map((food) => (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
