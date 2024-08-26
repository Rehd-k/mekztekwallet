"use client";

import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/loading";

declare interface Coin {
  name: String;
  short: any;
  price: number;
  changePercent: Number;
  amount: any;
  priceAmount: number;
  image: any;
}

export default function CoinCard({ props }: { props: Coin }) {
  return (
    <Link href={props.short}>
      <div className="w-full bg-gray-300 p-2 relative text-gray-600 rounded-md text-xs mt-5">
        <div className="flex justify-between pb-1.5">
          <div className="">{props.name}</div>

          <div className="text-center">
            <p className="">
              {props.price === 0 ? (
                <Loader size={"20"} speed={"2"} color={"black"} />
              ) : (
                Math.floor((props.price + Number.EPSILON) * 100) / 100
              )}
            </p>
            <p className="text-orange-600">{0.054644}%</p>
          </div>
        </div>
        {/* <div className="border-b border-gray-400 w-full"></div> */}
        <div className="absoulte left-0 right-0 top-0 bottom-0 m-auto h-14 w-14 rounded-full flex justify-center items-center">
          <Image
            src={props.image}
            alt={"coin logo"}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-between pt-1.5">
          <div className="">
            {props.amount} {props.short}
          </div>

          <div className="">
            ${Math.round((props.priceAmount + Number.EPSILON) * 100) / 100}
          </div>
        </div>
      </div>
    </Link>
  );
}
