import React from "react";
import Layout from "@/components/layouts/Admin";
import Breadcumb from "@/components/UI/Breadcumb/Breadcumb";
import ButtonPrimaryOutline from "@/components/UI/Button/ButtonPrimaryOutline";
import ButtonPrimary from "@/components/UI/Button/ButtonPrimary";

function AddNewCar() {
  return (
    <Layout>
      <div>
        <Breadcumb />
        <h1 className="heading-dashboard-h1">Add New Car</h1>
      </div>
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
                type="text"
                id="price"
                placeholder="Harga"
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
                type="text"
                id="photo"
                placeholder="Foto"
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
                htmlFor="name"
                className="text-gray-500 after:content-['*'] after:text-red-500"
              >
                Nama
              </label>
            </div>
            <div className="w-full lg:w-4/12">
              <p>-</p>
            </div>
          </div>
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
              <p>-</p>
            </div>
          </div>
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
              <p>-</p>
            </div>
          </div>
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
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <div className="space-x-4">
          <ButtonPrimaryOutline>Cancel</ButtonPrimaryOutline>
          <ButtonPrimary>Save</ButtonPrimary>
        </div>
      </div>
    </Layout>
  );
}

export default AddNewCar;
