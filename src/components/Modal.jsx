import React, { useState } from "react";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: "live",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.page && formState.description && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40"
      onClick={(e) => {
        if (
          e.target.className ===
          "fixed inset-0 flex items-center justify-center bg-black bg-opacity-40"
        )
          closeModal();
      }}
    >
      <div className="bg-white rounded-lg p-8 max-w-xl w-full">
        <form>
          <div className="mb-4">
            <label htmlFor="page" className="mb-1 block">
              Page
            </label>
            <input
              name="page"
              onChange={handleChange}
              value={formState.page}
              className="border border-black rounded-md p-1 text-base w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="mb-1 block">
              Description
            </label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
              className="border border-black rounded-md p-1 text-base w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="mb-1 block">
              Status
            </label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
              className="border border-black rounded-md p-1 text-base w-full"
            >
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="error">Error</option>
            </select>
          </div>
          {errors && (
            <div className="bg-red-200 text-red-600 rounded-md p-2 mb-4">{`Please include: ${errors}`}</div>
          )}
          <button
            type="submit"
            className="block mx-auto bg-blue-500 text-white rounded-md py-2 px-4 w-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
