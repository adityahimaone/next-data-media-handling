import React, { useState } from "react";
import Layout from "@/components/layouts/User";
import SearchForm from "@/components/elements/SearchCars/SearchForm";
import classNames from "classnames";
import StepNav from "@/components/elements/Payment/StepNav";
import StepOne from "@/components/elements/Payment/StepOne";
import StepTwo from "@/components/elements/Payment/StepTwo";
import StepThree from "@/components/elements/Payment/StepThree";

function Payment() {
  const [page, setPage] = useState(3);

  // const goNextPage = () => {
  //   if (page === 3) return;
  //   setPage((page) => page + 1);
  // };

  // const goPreviousPage = () => {
  //   if (page === 1) return;
  //   setPage((page) => page - 1);
  // };

  const cx = classNames([
    "rounded-full flex items-center justify-center h-5 w-5 border border-primaryDarkBlue-400",
    page === 3 && "bg-primaryDarkBlue-400 text-white",
  ]);

  return (
    <Layout>
      <div className="hidden lg:block h-[230px] bg-bluewhite ">
        <StepNav page={page} setPage={setPage} />
      </div>
      <SearchForm title={true} />
      <div className="mx-auto max-w-screen-xl">
        <div className="p-4">
          {page === 1 && <StepOne />}
          {page === 2 && <StepTwo />}
          {page === 3 && <StepThree />}
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
