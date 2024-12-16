import CoinCard from "@/components/coincard";
import { authOptions } from "@/libs/auth";
import dbConnect from "@/libs/dbConnect";
import User from "@/model/user";
import { getServerSession } from "next-auth";
import axios from "axios";
import Logout from "../../../components/logout";
import Hero from "@/components/hero";
import Loader from "@/components/loading";
import outPrices from "../../../libs/prices";

async function AssetPage() {
  const Userresponce = await getServerSession(authOptions);
  await dbConnect();
  const userInfo = await User.findOne({
    email: Userresponce?.user?.email,
  }).exec();

  let prices: any;
  try {
    const apiKey = "96b5b264-bf2b-4187-8ead-667aa375e8e6";
    const baseUrl = "https://rest.coinapi.io/v1/";
    const endpointPath = "assets";
    const filter_symbol_id = "BTC;XLM;XRP;DOGE;SHIB;PEPE;LUNC;SUI;HBAR";
    const limit = 10;
    const headers = {
      "X-CoinAPI-Key": apiKey,
    };
    const responce = await axios.get(
      `${baseUrl}${endpointPath}?filter_asset_id=${filter_symbol_id}&limit=${limit}`,
      {
        headers,
      }
    );
    prices = responce.data;

    // prices = outPrices;
  } catch (err: any) {
    console.log(err);
  }

  function extractPrice(coin: any) {
    let price = 0;
    if (prices.length > 0) {
      prices.map((e: { asset_id: any; price_usd: number }) => {
        if (e.asset_id === coin) {
          price = e.price_usd as number;
        }
      });
    }
    return price || 0;
  }

  function getPriceAmounts(c: number, p: number) {
    if (c) {
      return c * p;
    } else {
      return 0 * p;
    }
  }

  const coinsThem = [
    {
      name: "Bitcon",
      image: "/btc.png",
      short: "BTC",
      price: extractPrice("BTC"),
      changePercent: 0.00089,
      amount: userInfo?.balance.BTC,
      priceAmount: getPriceAmounts(
        userInfo?.balance.BTC as number,
        extractPrice("BTC")
      ),
    },

    {
      name: "XLM",
      short: "XLM",
      image: "/xlm.png",
      price: extractPrice("XLM"),
      changePercent: 0.00089,
      amount: userInfo?.balance.XLM,
      priceAmount: getPriceAmounts(
        userInfo?.balance.XLM as number,
        extractPrice("XLM")
      ),
    },
    {
      name: "Ripple",
      short: "XRP",
      image: "/xrp.png",
      price: extractPrice("XRP"),
      changePercent: 0.00089,
      amount: userInfo?.balance.XRP,
      priceAmount: getPriceAmounts(
        userInfo?.balance.XRP as number,
        extractPrice("XRP")
      ),
    },
    {
      name: "Doge Coin",
      short: "DOGE",
      image: "/doge.png",
      price: extractPrice("DOGE"),
      changePercent: 0.00089,
      amount: userInfo?.balance.DOGE,
      priceAmount: getPriceAmounts(
        userInfo?.balance.DOGE as number,
        extractPrice("DOGE")
      ),
    },
    {
      name: "SHIBA INU (SHIBA)",
      short: "SHIB",
      image: "/shib.png",
      price: extractPrice("SHIB"),
      changePercent: 0.00089,
      amount: userInfo?.balance.SHIB,
      priceAmount: getPriceAmounts(
        userInfo?.balance.SHIB as number,
        extractPrice("SHIB")
      ),
    },
 

    {
      name: "PEPE",
      short: "PEPE",
      image: "/pepe.png",
      price: extractPrice("PEPE"),
      changePercent: 0.00089,
      amount: userInfo?.balance.PEPE,
      priceAmount: getPriceAmounts(
        userInfo?.balance.PEPE as number,
        extractPrice("PEPE")
      ),
    },
   

    {
      name: "LUNC",
      short: "LUNC",
      image: "/lunc.png",
      price: extractPrice("LUNC"),
      changePercent: 0.00089,
      amount: userInfo?.balance.LUNC,
      priceAmount: getPriceAmounts(
        userInfo?.balance.LUNC as number,
        extractPrice("LUNC")
      ),
    },
    {
      name: "SUI",
      short: "SUI",
      image: "/sui.png",
      price: extractPrice("SUI"),
      changePercent: 0.00089,
      amount: userInfo?.balance.SUI,
      priceAmount: getPriceAmounts(
        userInfo?.balance.SUI as number,
        extractPrice("SUI")
      ),
    },
    {
      name: "HBAR",
      short: "HBAR",
      image: "/Hbar.png",
      price: extractPrice("HBAR"),
      changePercent: 0.00089,
      amount: userInfo?.balance.HBAR,
      priceAmount: getPriceAmounts(
        userInfo?.balance.HBAR as number,
        extractPrice("HBAR")
      ),
    },
  ];

  const Total =
    prices.length > 0
      ? coinsThem.reduce((acc, coins) => acc + coins.priceAmount, 0)
      : null;
  return (
    <div className="">
      <div className="h-44 bg-gray-950 w-full text-white float-left mx-auto px-4">
        <Logout />
        <div className="w-full bg-gray-950 mt-12 rounded-lg p-5">
          <div className="text-white font-semibold text-xl">
            <div className="">Total Balance</div>
            <div className="pb-5">
              {Total ? (
                Math.round((Total + Number.EPSILON) * 100) / 100
              ) : (
                <Loader size={"30"} speed={"2"} color={"white"} />
              )}
            </div>
          </div>
          <div className="bg-white w-full h-[0.5px]"></div>

          <Hero coinsThem={coinsThem} />
        </div>
      </div>

      <div className="grid md:grid-cols-4 gird-cols-1 w-11/12 gap-5 mx-auto pb-5 pt-36 clear-both">
        {coinsThem.map((data, index) => {
          return (
            <div key={index}>
              <CoinCard props={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AssetPage;
