import React from "react";

function ProbelmStatements({ problems }) {
  const HandleSend = () => {
    window.open(
      "https://drive.google.com/file/d/1c2CRYyo72aNdqjxgezolLPK4yjP24_EQ/view?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div>
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Challenge Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems?.map((problem) => (
              <div
                key={problem.id}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold">
                      {problem.id}
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        problem.difficulty === "Easy"
                          ? "bg-green-600/20 text-green-400"
                          : problem.difficulty === "Medium"
                          ? "bg-yellow-600/20 text-yellow-400"
                          : "bg-red-600/20 text-red-400"
                      }`}
                    >
                      {problem.difficulty}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                <h4>Desired Output</h4>
                <div className="text-gray-400 text-sm">
                  {problem?.output?.map((out, index) => (
                    <p key={index}>
                      {index + 1}.{out}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-5 ">
            <button
              onClick={() => {
                HandleSend();
              }}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Click Here to know more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProbelmStatements;
