import React, { useState } from "react";
import Layout from "@/components/layouts/Admin";
import Breadcumb from "@/components/UI/Breadcumb/Breadcumb";
import ButtonPrimaryOutline from "@/components/UI/Button/ButtonPrimaryOutline";
import ButtonPrimary from "@/components/UI/Button/ButtonPrimary";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { apiFetch } from "@/utils/helpers/apifetch.helpers";
import Image from "next/image";
import Alert from "@/components/UI/Alert/Alert";

function AddNewCar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [successPost, setSuccessPost] = useState(false);

  const onSubmit = async (payload) => {
    const formData = new FormData();
    for (let key in payload) {
      formData.append(key, payload[key]);
    }
    formData.append("image", payload.image[0]);

    apiFetch
      .post("/admin/car", formData)
      .then((res) => {
        console.log(res);
        setSuccessPost(true);
      })
      .catch((err) => {
        setSuccessPost(false);
      });
  };

  return (
    <Layout>
      {successPost && (
        <Alert
          title="Add Car Success"
          text="You can continue to list car page"
          navigation="/admin/cars"
          confirmText="Go To List Car"
        />
      )}
      <div>
        <Breadcumb />
        <h1 className="heading-dashboard-h1">Add New Car</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="bg-white rounded-md p-6 shadow-md space-y-5 w-full">
            <div className="flex items-center">
              <div className="w-2/12">
                <label
                  htmlFor="name"
                  className="text-gray-500 after:content-['*'] after:text-red-500"
                >
                  Nama
                </label>
              </div>
              <div className="w-full lg:w-4/12">
                <input
                  type="text"
                  id="name"
                  placeholder="Nama"
                  className="border border-gray-300 rounded-sm p-1.5 w-full"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2/12">
                <label
                  htmlFor="price"
                  className="text-gray-500 after:content-['*'] after:text-red-500"
                >
                  Harga
                </label>
              </div>
              <div className="w-full lg:w-4/12">
                <input
                  type="number"
                  id="price"
                  placeholder="Harga"
                  {...register("price")}
                  className="border border-gray-300 rounded-sm p-1.5 w-full"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2/12">
                <label
                  htmlFor="photo"
                  className="text-gray-500 after:content-['*'] after:text-red-500"
                >
                  Foto
                </label>
              </div>
              <div className="w-full lg:w-4/12 flex flex-col">
                <input
                  id="photo"
                  type="file"
                  placeholder="Foto"
                  onChange={onSubmit}
                  {...register("image")}
                  className="border border-gray-300 rounded-sm p-1.5 w-full"
                />
                <label htmlFor="description" className="text-gray-500 text-sm">
                  File size max. 2MB
                </label>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2/12">
                <label
                  htmlFor="price"
                  className="text-gray-500 after:content-['*'] after:text-red-500"
                >
                  Category
                </label>
              </div>
              <div className="w-full lg:w-4/12">
                <select
                  defaultValue="small"
                  {...register("category")}
                  className="border border-gray-300 rounded-sm p-1.5 w-full"
                >
                  <option value="category" disabled>
                    Category
                  </option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2/12">
                <label
                  htmlFor="status"
                  className="text-gray-500 after:content-['*'] after:text-red-500"
                >
                  Status
                </label>
              </div>
              <div className="w-full lg:w-4/12 flex space-x-4">
                <div className="flex items-center">
                  <input
                    id="status-option-1"
                    type="radio"
                    name="status"
                    value="true"
                    {...register("status")}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    aria-labelledby="status-option-1"
                    aria-describedby="status-option-1"
                  />
                  <label
                    htmlFor="country-option-1"
                    className="text-sm font-medium text-gray-900 ml-2 block"
                  >
                    True
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="status-option-2"
                    type="radio"
                    name="status"
                    value="false"
                    {...register("status")}
                    className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    aria-labelledby="status-option-2"
                    aria-describedby="status-option-2"
                  />
                  <label
                    htmlFor="country-option-1"
                    className="text-sm font-medium text-gray-900 ml-2 block"
                  >
                    False
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2/12">
                <label htmlFor="name" className="text-gray-500">
                  Start Rent
                </label>
              </div>
              <div className="w-full lg:w-4/12">
                <p>-</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2/12">
                <label htmlFor="name" className="text-gray-500">
                  Finish Rent
                </label>
              </div>
              <div className="w-full lg:w-4/12">
                <p>-</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2/12">
                <label htmlFor="name" className="text-gray-500">
                  Created At
                </label>
              </div>
              <div className="w-full lg:w-4/12">
                <p>-</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-2/12">
                <label htmlFor="name" className="text-gray-500">
                  Updated At
                </label>
              </div>
              <div className="w-full lg:w-4/12">
                <p>-</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="space-x-4">
            <ButtonPrimaryOutline>Cancel</ButtonPrimaryOutline>
            <ButtonPrimary type="submit">Save</ButtonPrimary>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default AddNewCar;
