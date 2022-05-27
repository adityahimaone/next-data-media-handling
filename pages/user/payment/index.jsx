import React, { useState } from "react";
import Layout from "@/components/layouts/User";
import SearchForm from "@/components/elements/SearchCars/SearchForm";
import { BsArrowLeft, BsFillCheckCircleFill } from "react-icons/bs";
import classNames from "classnames";
import ButtonPrimaryOutline from "@/components/UI/Button/ButtonPrimaryOutline";
import PreviewPDF from "@/components/UI/PreviewPDF/PreviewPDF";

function Payment() {
  const [page, setPage] = useState(3);

  const goFirstPage = () => {
    setPage(1);
  };

  const goSecondPage = () => {
    setPage(2);
  };

  const goThirdPage = () => {
    setPage(3);
  };

  // const goLoginPage = () => {
  //   router.push("/entry/user");
  // };

  const goNextPage = () => {
    if (page === 3) return;
    setPage((page) => page + 1);
  };

  const goPreviousPage = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
  };

  const cx = classNames([
    "rounded-full flex items-center justify-center h-5 w-5 border border-primaryDarkBlue-400",
    page === 3 && "bg-primaryDarkBlue-400 text-white",
  ]);

  return (
    <Layout>
      <div className="hidden lg:block h-[230px] bg-bluewhite ">
        <div className="mx-auto max-w-screen-xl h-full pt-20 flex justify-between">
          <div>
            <button className="flex items-center space-x-3 font-semibold">
              <BsArrowLeft className="h-5 w-5" />
              <p>Pembayaran</p>
            </button>
          </div>
          <div className="w-4/12">
            <div className="relative after:inset-x-0 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:block after:rounded-lg after:bg-primaryDarkBlue-400">
              <ol className="relative z-10 flex justify-between">
                <li className="flex items-center p-2 bg-bluewhite">
                  <button
                    onClick={goFirstPage}
                    className="flex items-center space-x-2"
                  >
                    <div className={cx}>
                      <span className="text-md">1</span>
                    </div>
                    <span>Pilih Metode</span>
                  </button>
                </li>
                <li className="flex items-center p-2 bg-bluewhite">
                  <button
                    onClick={goSecondPage}
                    className="flex items-center space-x-2"
                  >
                    <div className={cx}>
                      <span className="text-md">2</span>
                    </div>
                    <span>Bayar</span>
                  </button>
                </li>
                <li className="flex items-center p-2 bg-bluewhite">
                  <button
                    onClick={goThirdPage}
                    className="flex items-center space-x-2"
                  >
                    <div className={cx}>
                      <span className="text-md">3</span>
                    </div>
                    <span>Tiket</span>
                  </button>
                </li>
              </ol>
            </div>
          </div>
        </div>
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

const StepOne = () => {
  return (
    <div className="">
      <h1>Step One</h1>
    </div>
  );
};

const StepTwo = () => {
  return (
    <div className="">
      <h1>Step Two</h1>
    </div>
  );
};

const StepThree = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-center space-y-4 mt-14">
        <div className="flex justify-center">
          <BsFillCheckCircleFill className="h-16 w-16 text-secondaryLimeGreen-400" />
        </div>
        <h1 className="text-xl font-semibold">Pembayaran Berhasil</h1>
        <p className="text-gray-500">
          Tunjukkan invoice ini ke petugas BCR di titik temu
        </p>
      </div>
      <div className="mt-5">
        <div className="max-w-xl mx-auto p-4 rounded-md shadow-xl border">
          <div className="flex justify-between">
            <div>
              <p>Invoice</p>
              <p>*no invoice</p>
            </div>
            <div>
              <ButtonPrimaryOutline>Unduh</ButtonPrimaryOutline>
            </div>
          </div>
          <div>
            <PreviewPDF />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
