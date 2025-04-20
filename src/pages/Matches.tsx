import React from "react";

const Matches: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Matches</h1>
      <p className="mb-4">
        Here you can see all your matched developers and projects.
      </p>
      {/* Match cards would go here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">React Developer</h2>
            <p>Looking for a full-stack developer with React experience.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
