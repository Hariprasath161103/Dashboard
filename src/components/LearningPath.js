import React from 'react';
import LearningNode from './LearningNode';

const learningSteps = [
  { center: true, content: "Start Your Web Dev Journey" },
  { center: false, content: ["HTML & CSS Basics 1", "JavaScript Fundamentals 2"] },
  { center: true, content: "Git & Version Control 3" },
  { center: true, content: "React Basics 4" },
  { center: false, content: ["State Management (e.g., Redux) 5", "React Hooks & Advanced Concepts 6"] },
  { center: true, content: "Next.js & Server-Side Rendering 7" },
  { center: true, content: "Build Full-Stack React Apps 8" }
];

const LearningPath = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {learningSteps.map((step, index) => (
        <div key={index} className={step.center ? "flex justify-center" : "flex justify-between"}>
          {Array.isArray(step.content) ? (
            step.content.map((item, idx) => <LearningNode key={idx} text={item} />)
          ) : (
            <LearningNode text={step.content} />
          )}
        </div>
      ))}
    </div>
  );
};

export default LearningPath;
