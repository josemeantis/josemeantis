import React from 'react';

const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Part = ({ partName, exercises }) => {
  return (
    <p>
      {partName} {exercises} exercises
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} partName={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;