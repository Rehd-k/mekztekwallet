"use client";

import { useEffect, useState } from "react";

interface StateInterface {
  _id: String;
  coin: String;
  amount: number;
  rate: number;
  duration: number;
}

export default function PlanHolder({
  dataString,
  balance,
}: {
  dataString: string;
  balance: number;
}) {
  const [hide, setHide] = useState("opacity-0");
  const [amount, setAmount] = useState(0);
  const [data] = useState<StateInterface>(JSON.parse(dataString));
  const [isDiabled, setDisabled] = useState(false);

  function handleSelect() {
    if (hide === "opacity-0") {
      setHide("opacity-1");
    } else {
      setHide("opacity-0");
    }
    setDisabled(true);
  }

  function handleSetAmount(e: any) {
    setAmount(e.target.value);
  }

  useEffect(() => {
    function handleDisabled() {
      console.log(amount, balance);
      if (balance) {
        if (amount <= 0 || amount > balance) {
          setDisabled(true);
          return;
        } else {
          setDisabled(false);
          return;
        }
      }
    }
    handleDisabled();
  }, [amount, balance]);
  return (
    <div className="w-full rounded-xl shadow pb-4">
      <div className="h-8 flex justify-center items-center text-white font-semibold bg-gradient-to-tr from-gray-700 to-gray-900 rounded-t-xl">
        Plan Name
      </div>
      <div className="text-center flex justify-center mt-5">
        <div className="font-thin text-4xl">{data.rate}%</div>
        <div className="text-xs mt-auto uppercase">yeild</div>
      </div>
      <div className="flex justify-between px-2 text-gray-700 mt-5">
        <div className="">Minimum Amount :</div>
        <div className="">{data.amount}</div>
      </div>
      <div className="flex justify-between px-2 text-gray-800 mt-4">
        <div className="">Duration:</div>
        <div className="">{data.duration} days</div>
      </div>

      <div
        className={`flex transition-all justify-between px-2 text-gray-800 ${hide} mt-4`}
      >
        <div className="">Amount:</div>
        <input
          type="number"
          min={balance}
          className="active:border-none px-2 bg-gray-50 shadow rounded border-none "
          onChange={handleSetAmount}
        />
      </div>

      <div
        className={`flex transition-all justify-between px-2 text-gray-800 ${hide} mt-4`}
      >
        <div className="">Total Yeiled:</div>
        <div className="">
          {amount * 0.18} {"BTC"}
        </div>
      </div>

      {hide === "opacity-0" ? (
        <button
          onClick={handleSelect}
          className="mx-auto w-10/12 h-10 rounded-xl flex justify-center items-center bg-gray-800 active:bg-gray-900 disabled:bg-gray-400 text-gray-50 mt-5"
        >
          Select Plan
        </button>
      ) : (
        <button
          disabled={isDiabled}
          className="mx-auto w-10/12 h-10 rounded-xl flex justify-center items-center bg-gray-800 active:bg-gray-900 disabled:bg-gray-400 text-gray-50 mt-5"
        >
          Lock In
        </button>
      )}
    </div>
  );
}
