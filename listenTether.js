const ethers = require("ethers");
const usdtABI = require("./usdt.json")
require("dotenv").config();

async function main(){
    const usdtAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    const provider  =new ethers.providers.WebSocketProvider(
        `wss://eth-mainnet.g.alchemy.com/v2/${process.env.Alchemy_Websocket}`);

    const contract  = new ethers.Contract(usdtAddress, usdtABI, provider);

    const filter = contract.filters.Transfer();

    // const result = await contract.queryFilter(filter, 16218612, 16218614)
    const result = await contract.queryFilter("*", -10, "latest")


    // console.log(result)

        console.log(JSON.stringify(result, null, 4));

    }
main()