import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import ButtonPrimaryOutline from "@/components/UI/Button/ButtonPrimaryOutline";
import PreviewPDF from "@/components/UI/PreviewPDF/PreviewPDF";

function StepThree() {
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
          <div className="bg-gray-200 p-2 shadow-lg rounded-md my-4">
            <PreviewPDF url="/invoice.pdf" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
