import React from "react";

function Card() {
  // Simple card so you can verify it renders
  return (
    <div className="max-w-sm mx-auto mt-6 p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Card Title</h2>
      <p className="text-gray-600">
        This is the Card component. If you see this, the import and export are
        working.
      </p>
      <button className="mt-4 px-3 py-1 bg-blue-500 text-white rounded">
        Action
      </button>
    </div>
  );
}

export default Card;
