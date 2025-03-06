// export default function Filter({ filter, setFilter, books }) {
//   const total = books.length;
//   const activeCount = books.filter(b => b.active).length;
//   const inactiveCount = total - activeCount;

//   return (
//     <div>
//       <button onClick={() => setFilter("all")}>
//         Show All ({total})
//       </button>
//       <button onClick={() => setFilter("active")}>
//         Active ({activeCount}/{total})
//       </button>
//       <button onClick={() => setFilter("inactive")}>
//         Inactive ({inactiveCount}/{total})
//       </button>
//     </div>
//   );
// }

import { useState } from "react";


export default function Filter({ filter, setFilter, books }) {
  const [open, setOpen] = useState(false);
  const total = books.length;
  const activeCount = books.filter(b => b.active).length;
  const inactiveCount = total - activeCount;

  function handleFilterChange(value) {
    setFilter(value);
    setOpen(false);
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Filter: {filter}</button>
      {open && (
        <ul style={{ listStyle: "none", padding: 0, border: "1px solid #ccc", position: "absolute", background: "white" }}>
          <li><button onClick={() => handleFilterChange("all")}>All ({total})</button></li>
          <li><button onClick={() => handleFilterChange("active")}>Active ({activeCount}/{total})</button></li>
          <li><button onClick={() => handleFilterChange("inactive")}>Inactive ({inactiveCount}/{total})</button></li>
        </ul>
      )}
    </div>
  );
}