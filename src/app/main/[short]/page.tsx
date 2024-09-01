import Link from "next/link";
import Image from "next/image";
import { authOptions } from "@/libs/auth";
import dbConnect from "@/libs/dbConnect";
import { getServerSession } from "next-auth";
import User from "@/model/user";
import axios from "axios";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BiChevronLeft, BiMoneyWithdraw } from "react-icons/bi";
import { BsMoonStars } from "react-icons/bs";
import BigIcon from "./bigicon";
import { GrGrow } from "react-icons/gr";

export default async function Short({ params }: { params: { short: string } }) {
  const Userresponce = await getServerSession(authOptions);
  await dbConnect();
  let price = 0;
  const userInfo = await User.findOne({
    email: Userresponce?.user?.email,
  }).exec();

  // try {
  //     const apiKey = '5B04AC9E-E22C-4666-9036-8CA5D880105A';
  //     const baseUrl = 'https://rest.coinapi.io/v1/';
  //     const endpointPath = 'assets';
  //     const limit = 1
  //     const headers = {
  //         'X-CoinAPI-Key': apiKey
  //     };
  //     const responce = await axios.get(`${baseUrl}${endpointPath}?filter_asset_id=${params.short}&limit=${limit}`, {
  //         headers
  //     })
  //     price = responce.data[0].price_usd
  // } catch (err: any) {
  //     console.log(err)
  // }
  return (
    <div>
      <div className="bg-gray-800 flex-col justify-center items-center pb-32">
        <div className="h-32 w-full">
          <Link className="text-white flex pt-4 pl-2" href={"/main/assetpage"}>
            <BiChevronLeft />{" "}
            <div className="text-xs">
              {params.short}

              <div className="">$ {parseFloat(price.toFixed(10))}</div>
            </div>
          </Link>
        </div>
        <div className="w-full">
          <div className="text-center text-white">
            <div className="w-20 h-20 mx-auto  rounded-full flex justify-center items-center">
              <Image
                src={`/${params.short.toLocaleLowerCase()}.png`}
                alt={`${params.short} Icon`}
                width={90}
                height={90}
                className="rounded-full"
              />
            </div>
            <div className="mt-1">
              {userInfo.balance[`${params.short}`]} {params.short}
            </div>
            <div className="mt-1">
              $
              {Math.floor(
                (price * userInfo.balance[`${params.short}`] + Number.EPSILON) *
                  100
              ) / 100}
            </div>
          </div>
          <div className="md:w-1/5 w-4/5 mx-auto flex justify-between mt-5">
            <Link
              href={`${params.short}/deposit`}
              className="text-white cursor-pointer"
            >
              <div className="md:w-10 md:h-10 w-8 h-8 mx-auto rounded-full shadow-md shadow-black flex items-center justify-center">
                <RiLuggageDepositLine className="text-[12px] md:text-base" />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 text-center">
                Deposit
              </p>
            </Link>
            <Link
              href={`${params.short}/withdraw`}
              className="text-white cursor-pointer"
            >
              <div className="md:w-10 md:h-10 w-8 h-8 mx-auto rounded-full shadow-md shadow-black flex items-center justify-center">
                <BiMoneyWithdraw className="text-[12px] md:text-base" />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 text-center">
                Withdraw
              </p>
            </Link>
            <a
              href={"https://www.moonpay.com/"}
              className="text-white cursor-pointer"
            >
              <div className="md:w-10 md:h-10 w-8 h-8 mx-auto rounded-full shadow-md shadow-black flex items-center justify-center">
                <BsMoonStars className="text-[12px] md:text-base" />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 text-center">Buy</p>
            </a>

            <Link
              href={`${params.short}/stake`}
              className="text-white cursor-pointer"
            >
              <div className="md:w-10 md:h-10 w-8 h-8 mx-auto rounded-full shadow-md shadow-black flex items-center justify-center text-white">
                <GrGrow  className="text-[12px] md:text-base text-white" />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 text-center">
                Stake
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <BigIcon />
      </div>
    </div>
  );
}
