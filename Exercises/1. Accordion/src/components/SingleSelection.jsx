import { useState } from "react";
import data from "../data";

function SingleSelection() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  return (
    <div className="mx-auto px-6 py-8 max-w-4xl">
      <div className="accordion space-y-4">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="border border-gray-300 rounded-lg shadow-sm"
            >
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 transition"
              >
                <h3 className="text-lg font-semibold">{dataItem.question}</h3>
                <span className="text-xl text-gray-500">
                  {selected === dataItem.id ? "-" : "+"}
                </span>
              </div>
              {selected === dataItem.id ? (
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-base">{dataItem.answer}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No data found</div>
        )}
      </div>
    </div>
  );
}

export default SingleSelection;
