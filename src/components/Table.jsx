import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full flex justify-center">
        <table className="table-auto rounded-lg overflow-hidden shadow-md border border-gray-300 whitespace-nowrap w-full md:w-5/6 lg:w-11/12 xl:w-4/5 max-w-3xl">
          <thead className="bg-gray-300 text-gray-700">
            <tr>
              <th className="p-3 border-b rounded-tl-lg">Page</th>
              <th className="w-full p-3 border-b">Description</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);

              return (
                <tr key={idx} className="hover:bg-gray-200">
                  <td className="p-3 border-b">{row.page}</td>
                  <td className="w-full p-3 border-b">{row.description}</td>
                  <td>
                    <span
                      className={`label rounded-md p-1 text-white ${
                        row.status === "draft"
                          ? "bg-gray-500"
                          : row.status === "live"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {statusText}
                    </span>
                  </td>
                  <td className="p-3 border-b rounded-lg">
                    <span className="flex justify-around">
                      <BsFillTrashFill
                        className="delete-btn text-red-600 hover:text-red-800 cursor-pointer"
                        onClick={() => deleteRow(idx)}
                      />
                      <BsFillPencilFill
                        className="edit-btn text-blue-600 hover:text-blue-800 cursor-pointer"
                        onClick={() => editRow(idx)}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
