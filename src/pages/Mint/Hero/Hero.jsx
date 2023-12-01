import React, { useState } from "react";
import useBullsLodge from "../../../hooks/useBullsLodge";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import Web3 from "web3";

const Hero = () => {
  const [quantity, setQuantity] = useState(0);
  const { nftData, getWeb3, getBullsLodge } = useBullsLodge();
  const { address } = useAccount();

  useEffect(() => {
    const getData = async () => {
      const _web3 = await getWeb3();
      const _bullsLodge = await getBullsLodge(_web3);
      const _nftDat = await nftData(_bullsLodge);
      console.log(_nftDat);
    };
    getData();
  }, [nftData]);

  const mint = async () => {
    const _web3 = await getWeb3();
    const _bullsLodge = await getBullsLodge(_web3);
    const _nftDat = await nftData(_bullsLodge);
    console.log(_nftDat.price);
    console.log(Number(quantity).toFixed(0));
    const _mint = await _bullsLodge.methods
      .mint(Number(quantity).toFixed(0))
      .send({
        from: address,
        value: Web3.utils.toWei((_nftDat.price * quantity).toString(), "ether"),
      });
    console.log(_mint);
    console.log("minted");
  };
  return (
    <>
      <section className="bg-[url('/assets/bg.svg')] md:bg-none">
        <div className="pt-32 md:pt-44 justify-center gap-4 items-center 2xl:py-36 2xl:scale-100 md:scale-[0.8]  md:py-16 flex">
          <div>
            <img src="/assets/images/mintLeft.png" alt="" />
          </div>
          <div className="w-[50%] md:w-1/4 text-center">
            <div className="flex justify-center mb-2">
              <w3m-button />
            </div>
            <div className="flex items-center justify-center py-6 text-sm gap-4 pt-10">
              <span>Quantity</span>
              <div className="flex gap-2 items-center w-[60%] md:w-[25%]">
                <button
                  className="text-3xl transition hover:text-[#db00ff]"
                  onClick={() =>
                    quantity > 1 && setQuantity(Number(quantity) - 1)
                  }
                  disabled={quantity === 1}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-full bg-black rounded-xl py-2 focus:border-none focus:outline-none focus:outline-[#db00ff] text-center"
                  value={quantity}
                  onChange={(e) => {
                    e.target.value > -1 &&
                      setQuantity(parseInt(e.target.value));
                  }}
                />
                <button
                  className="text-xl transition hover:text-[#db00ff]"
                  onClick={() => setQuantity(Number(quantity) + 1)}
                >
                  +
                </button>
              </div>
            </div>
            {/* <input className="border-8 border-[#DB00FF] p-4 md:p-2" /> */}
            <button
              className=" md:border-[20px] border-8 border-[#DB00FF] px-8 py-6 md:p-24 text-2xl md:text-6xl font-Oswald font-bold uppercase"
              onClick={mint}
            >
              Mint
              <br /> Now
            </button>

            <p className="text-xs md:text-2xl mt-6 md:mt-8">
              Mint and Become a Bull Now!
            </p>
            <p className="text-xs md:text-2xl md:mt-8">
              By minting you accept our <a href="#">"Terms and Conditions"</a>{" "}
              and <a href="">"Privacy Policy"</a>
            </p>
          </div>
          <div>
            <img src="/assets/images/mintRight.png" alt="" />
          </div>
        </div>
        <p className="text-xl md:text-6xl text-center md:px-32 px-8 pb-64 mt-8">
          Get Bullish now! Connect with us through <a href="#">Discord</a>!
        </p>
      </section>
    </>
  );
};

export default Hero;
