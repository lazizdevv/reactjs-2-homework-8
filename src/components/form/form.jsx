import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({ title, description, img, name, price, submit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { title, description, img, name, price },
  });
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-slate-100 h-screen">
        <form
          className="max-w-[500px] w-full border-2 bg-white px-5 py-10 rounded-lg shadow-lg"
          onSubmit={handleSubmit(submit)}
        >
          <div className="my-5">
            <p class="block text-gray-700 text-sm font-bold mb-1">
              Enter Img Url
            </p>
            <input
              className="w-full py-2 px-3 border-2 rounded-sm outline-blue-500 font-semibold"
              placeholder="Exsample:https://olcha.uz/imgage123.jpg"
              {...register("img")}
              type="text"
            />
          </div>

          <div className="my-5">
            <p class="block text-gray-700 text-sm font-bold mb-1">
              Name:
            </p>
            <input
              className="w-full py-2 px-3 border-2 rounded-lg outline-blue-500 text-lg font-bold"
              {...register("name")}
              type="text"
            />
          </div>

          <div className="my-5">
            <p class="block text-gray-700 text-sm font-bold mb-1">
              Title
            </p>
            <input
              className="w-full py-2 px-3 border-2 rounded-lg outline-blue-500 text-lg font-bold"
              {...register("title")}
              type="text"
            />
          </div>

          <div className="my-5">
            <label class="block text-gray-700 text-sm font-bold mb-1">
              Price:
            </label>
            <input
              className="w-full py-2 px-3 border-2 rounded-lg outline-blue-500 text-lg font-bold"
              {...register("price")}
              type="number"
            />
          </div>
          <div className="my-5">
            <label class="block text-gray-700 text-sm font-bold mb-1">
              Description:
            </label>
            <textarea
              className="w-full border-2 py-3 px-5 rounded-lg outline-blue-500 font-medium text-lg"
              {...register("description")}
              rows={4}
              id=""
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              className="py-3 px-20 bg-green-500 hover:bg-green-700 mx-auto rounded-lg font-bold text-white"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
