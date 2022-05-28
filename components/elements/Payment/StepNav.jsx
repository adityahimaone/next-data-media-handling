import React from "react";
import classNames from "classnames";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";

function StepNav({ page, setPage }) {
  const router = useRouter();

  const goBack = () => {
    return router.back();
  };
  const goFirstPage = () => {
    setPage(1);
  };

  const goSecondPage = () => {
    setPage(2);
  };

  const goThirdPage = () => {
    setPage(3);
  };

  const cx = classNames([
    "rounded-full flex items-center justify-center h-5 w-5 border border-primaryDarkBlue-400",
    page === 3 && "bg-primaryDarkBlue-400 text-white",
  ]);

  return (
    <div className="mx-auto max-w-screen-xl h-full pt-20 flex justify-between">
      <div>
        <button
          onClick={goBack}
          className="flex items-center space-x-3 font-semibold"
        >
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
  );
}

export default StepNav;
