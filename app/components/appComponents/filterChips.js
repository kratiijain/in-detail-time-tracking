import React, { useState } from "react";

const filters = [
  "All Tasks",
  "Pending",
  "In Progress",
  "Completed",
  "Invoiced",
];

export function FilterChips() {
  const [activeFilter, setActiveFilter] = useState("All Tasks");

  return React.createElement(
    "div",
    { className: "flex flex-wrap gap-2 mb-6" },
    filters.map((filter) =>
      React.createElement(
        "button",
        {
          key: filter,
          onClick: () => setActiveFilter(filter),
          className: `px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            activeFilter === filter
              ? "bg-dashboard-blue-primary text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`,
        },
        filter
      )
    )
  );
}
