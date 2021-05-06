import React, { useState } from "react";
import "./Lesson2.css";
import CourseGoalList from "../lesson_2/courseGoals/courseGoalList/CourseGoalList";
import CourseInput from "../lesson_2/courseGoals/courseGoalInput/CourseInput";
import Description from "./Description";

const Lesson2 = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div>
      <Description />
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
            <CourseGoalList
              items={courseGoals}
              onDeleteItem={deleteItemHandler}
            />
          ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
          } */}
      </section>
    </div>
  );
};

export default Lesson2;
