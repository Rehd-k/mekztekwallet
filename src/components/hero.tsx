"use client";
import { FaRegCreditCard } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { MdOutlineCallReceived } from "react-icons/md";
import { IoIosSwap } from "react-icons/io";
import { FiLink } from "react-icons/fi";
import Modal from "react-modal";
import { useState } from "react";
import CoinCard from "@/components/coincard";
import Link from "next/link";

const customStyles = {
  content: {
    top: "50%",
    // left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-50%",
    transform: "translate(0%, -50%)",
  },
};

export default function Hero({ coinsThem }: any) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="mt-5 flex justify-between md:justify-around items-center">
      <div className="text-white">
        <div className="md:w-14 md:h-14 h-10 w-10 rounded-md flex justify-center items-center bg-gradient-to-t from-blue-700 to-blue-900">
          <FaRegCreditCard />
        </div>
        <div className="mt-3 text-white font-bold text-center md:text-sm text-xs">
          Buy
        </div>
      </div>

      <div className="text-white cursor-pointer" onClick={openModal}>
        <div className="md:w-14 md:h-14 h-10 w-10 rounded-md flex justify-center items-center bg-gradient-to-t from-yellow-700 to-yellow-800">
          <FiSend />
        </div>
        <div className="mt-3 text-white font-bold text-center text-xs md:text-sm">
          Send
        </div>
      </div>

      <div className="text-white">
        <div className="md:w-14 md:h-14 h-10 w-10 rounded-md flex justify-center items-center bg-gradient-to-t from-red-700 to-red-800 mx-auto">
          <MdOutlineCallReceived />
        </div>
        <div className="mt-3 text-white font-bold text-center text-xs md:text-sm">
          Receive{" "}
        </div>
      </div>

      <Link className="text-white" href={"/main/swap"}>
        <div className="md:w-14 md:h-14 h-10 w-10 rounded-md flex justify-center items-center bg-gradient-to-t from-orange-700 to-orange-800">
          <IoIosSwap />
        </div>
        <div className="mt-3 text-white font-bold text-center text-xs md:text-sm">
          Swap
        </div>
      </Link>

      <Link className="text-white" href={"/main/stake"}>
        <div className="md:w-14 md:h-14 h-10 w-10 rounded-md flex justify-center items-center bg-gradient-to-t from-blue-600 to-blue-700 mx-auto">
          <FiLink />
        </div>
        <div className="mt-3 text-white font-bold text-center text-xs md:text-sm">
          Stake
        </div>
      </Link>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className="w-full"
      >
        <div className="grid md:grid-cols-4 gird-cols-1 w-11/12 gap-5 mx-auto pb-5 pt-36 clear-both">
          {coinsThem.map((data: any, index: number) => {
            return (
              <div key={index}>
                <CoinCard props={data} />
              </div>
            );
          })}
        </div>
      </Modal>
    </div>
  );
}
