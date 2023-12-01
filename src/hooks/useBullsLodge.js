import Web3 from "web3";
import { BULLS_LODGE, BULLS_LODGE_ABI } from "../contract/contract";

function useBullsLodge() {
  const getWeb3 = async () => {
    const web3 = new Web3(window.ethereum);
    return web3;
  };

  const getBullsLodge = async (web3) => {
    const bullsLodge = new web3.eth.Contract(BULLS_LODGE_ABI, BULLS_LODGE);

    return bullsLodge;
  };

  const nftData = async (bullsLodge) => {
    try {
      const name = await bullsLodge.methods.name().call();

      let price = await bullsLodge.methods.cost().call();

      price = Web3.utils.fromWei(price, "ether");

      return {
        name,
        price,
      };
    } catch (e) {
      console.log("e", e);
    }
  };

  return {
    getWeb3,
    getBullsLodge,
    nftData,
  };
}

export default useBullsLodge;
