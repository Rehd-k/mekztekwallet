import CoinCard from "@/components/coincard";
import { authOptions } from "@/libs/auth";
import dbConnect from "@/libs/dbConnect";
import User from "@/model/user";
import { getServerSession } from "next-auth";
import axios from "axios";
import { writeFileSync, readFile, readFileSync } from "fs";
import Logout from "../../../components/logout";
import Hero from "@/components/hero";
import Loader from "@/components/loading";
import outPrices from "../../../libs/prices";
const path = "src/libs/prices.json";

async function AssetPage() {
  const Userresponce = await getServerSession(authOptions);
  await dbConnect();
  const userInfo = await User.findOne({
    email: Userresponce?.user?.email,
  }).exec();

  let prices: any;
  try {
    // const apiKey = "5B04AC9E-E22C-4666-9036-8CA5D880105A";
    // const baseUrl = "https://rest.coinapi.io/v1/";
    // const endpointPath = "assets";
    // const filter_symbol_id =
    //   "BTC;ETH;XLM;XRP;USDT;BNB;ADA;DOGE;LTC;SHIB;MATIC;FTM;ALGO;XDC;SOL;LUNA;PEPE;LUNC;SUI;HBAR";
    // const limit = 10;
    // const headers = {
    //   "X-CoinAPI-Key": apiKey,
    // };
    // const responce = await axios.get(
    //   `${baseUrl}${endpointPath}?filter_asset_id=${filter_symbol_id}&limit=${limit}`,
    //   {
    //     headers,
    //   }
    // );
    // prices = responce.data;

    const data = readFileSync(path) as any;
    prices = JSON.parse(data);
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
      name: "Etherium",
      short: "ETH",
      image: "/eth.png",
      price: extractPrice("ETH"),
      changePercent: 0.00089,
      amount: userInfo?.balance.ETH,
      priceAmount: getPriceAmounts(
        userInfo?.balance.ETH as number,
        extractPrice("ETH")
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
      name: "USDT",
      short: "TRC",
      image: "/usdt.png",
      price: extractPrice("USDT"),
      changePercent: 0.00089,
      amount: userInfo?.balance.USDT,
      priceAmount: getPriceAmounts(
        userInfo?.balance.USDT as number,
        extractPrice("USDT")
      ),
    },
    {
      name: "Binance Coin",
      short: "BNB",
      image: "/bnb.png",
      price: extractPrice("BNB"),
      changePercent: 0.00089,
      amount: userInfo?.balance.BNB,
      priceAmount: getPriceAmounts(
        userInfo?.balance.BNB as number,
        extractPrice("BNB")
      ),
    },
    {
      name: "Cardano",
      short: "ADA",
      image: "/ada.png",
      price: extractPrice("ADA"),
      changePercent: 0.00089,
      amount: userInfo?.balance.ADA,
      priceAmount: getPriceAmounts(
        userInfo?.balance.ADA as number,
        extractPrice("ADA")
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
      name: "Litecoin",
      short: "LTC",
      image: "/ltc.png",
      price: extractPrice("LTC"),
      changePercent: 0.00089,
      amount: userInfo?.balance.LTC,
      priceAmount: getPriceAmounts(
        userInfo?.balance.LTC as number,
        extractPrice("LTC")
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
      name: "POLYGON",
      short: "MATIC",
      image: "/matic.png",
      price: extractPrice("MATIC"),
      changePercent: 0.00089,
      amount: userInfo?.balance.MATIC,
      priceAmount: getPriceAmounts(
        userInfo?.balance.MATIC as number,
        extractPrice("MATIC")
      ),
    },
    {
      name: "FANTOM",
      short: "FTM",
      image: "/ftm.png",
      price: extractPrice("FTM"),
      changePercent: 0.00089,
      amount: userInfo?.balance.FTM,
      priceAmount: getPriceAmounts(
        userInfo?.balance.FTM as number,
        extractPrice("FTM")
      ),
    },

    {
      name: "ALGORAND",
      short: "ALGO",
      image: "/algo.png",
      price: extractPrice("ALGO"),
      changePercent: 0.00089,
      amount: userInfo?.balance.ALGO,
      priceAmount: getPriceAmounts(
        userInfo?.balance.ALGO as number,
        extractPrice("ALGO")
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
      name: "SOLANA",
      short: "SOL",
      image: "/solena.png",
      price: extractPrice("SOL"),
      changePercent: 0.00089,
      amount: userInfo?.balance.SOL,
      priceAmount: getPriceAmounts(
        userInfo?.balance.SOL as number,
        extractPrice("SOL")
      ),
    },
    {
      name: "XDC",
      short: "XDC",
      image: "/xdc.png",
      price: extractPrice("XDC"),
      changePercent: 0.00089,
      amount: userInfo?.balance.XDC,
      priceAmount: getPriceAmounts(
        userInfo?.balance.XDC as number,
        extractPrice("XDC")
      ),
    },
    {
      name: "LUNA",
      short: "LUNA",
      image: "/Lunc.png",
      price: extractPrice("LUNA"),
      changePercent: 0.00089,
      amount: userInfo?.balance.LUNA,
      priceAmount: getPriceAmounts(
        userInfo?.balance.LUNA as number,
        extractPrice("LUNA")
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
