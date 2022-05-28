import React from "react";
import { useRouter } from "next/router";
import { BsClock, BsPerson } from "react-icons/bs";
import { useForm } from "react-hook-form";

function SearchForm({ title = false }) {
  const router = useRouter();

  const { id } = router.query;

  const {
    handleSubmit,
    register,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const typeDriver = ["Dengan Sopir", "Tanpa Sopir"];
  const pickupTime = ["08.00", "09.00", "10.00", "11.00", "12.00"];

  const onSubmit = (values) => {
    if (router.pathname === "/user") {
      // dispatch(saveSearch(values));
      router.push(`/user/cars/search`);
    } else {
      dispatch(saveSearch(values));
      // router(getCars());
    }
  };

  return (
    <div className="w-full flex justify-center mx-auto relative lg:-mt-14 px-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full m-2 flex-col bg-white max-w-screen-xl p-4 rounded-md shadow-lg z-10"
      >
        <div>{title && <h1 className="font-bold my-2">Pencarianmu</h1>}</div>
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
          <div className="flex-1">
            <label>Tipe Driver</label>
            <select
              defaultValue="Dengan Sopir"
              {...register("type_driver")}
              className="border border-gray-300 rounded-sm p-2.5 w-full"
            >
              {typeDriver.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
              ;
            </select>
          </div>
          <div className="flex-1">
            <label>Tanggal</label>
            <input
              type="date"
              id="date"
              placeholder="Date"
              className="border border-gray-300 rounded-sm p-1.5 w-full"
              {...register("date")}
            />
          </div>
          <div className="flex-1">
            <label>Waktu Jemput</label>
            <select
              defaultValue="08.00"
              {...register("pickup_time")}
              className="border border-gray-300 rounded-sm p-2.5 w-full"
            >
              {pickupTime.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label>Jumlah Penumpang (optional)</label>
            <input
              type="number"
              id="passenger"
              placeholder="Passenger"
              className="border border-gray-300 rounded-sm p-1.5 w-full"
              {...register("passenger")}
            />
          </div>
          <div className="flex items-end">
            {router?.pathname !== `user/cars/${id}` && (
              <button
                className={`font-semibold ${
                  router?.pathname === `/user/cars/search`
                    ? "button-primary-blue"
                    : "button-secondary-green"
                }`}
                isLoading={isSubmitting}
                type="submit"
                isDisabled={router?.pathname === `/cars/${id}`}
              >
                {router?.pathname === `/user/cars/search`
                  ? "Edit"
                  : "Cari Mobil"}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
