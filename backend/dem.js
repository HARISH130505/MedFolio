// Only view functions are applicable to this code.

const ethers = require("ethers");
const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const infuraID = "ad744f9ffe7a45dda9d263214dbe199c";

const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-sepolia.g.alchemy.com/v2/qh8aCOJJ6h_rtDhNXOEj4-qU_1Wa2naM`
);

const ERC20_ABI = [
  "function createPetition(string memory title, string memory description, string memory name, string memory physicalAddress, string memory petitionType, string memory userAddressString) public ",
  "function signPetition(uint256 petitionId, string memory userAddressString) public",
  "function updatePetitionStatus(uint256 petitionId, bool isOpen) public onlyOwner",
  "function getAllPetitions() public view returns (tuple(string memory title, string memory description, string memory name, string physicalAddress, address creator, uint256 signCount, string memory petitionType, bool isOpen)[] memory)",
  "function getPetitionsByAddress(string memory userAddressString) public view returns (tuple(string memory title, string memory description, string memory name, string physicalAddress, address creator, uint256 signCount, string memory petitionType, bool isOpen)[] memory)", //tuple(string memory title, string memory description, string memory username, address creator, uint256 signCount, string memory petitionType, tuple(bool isOpen, string memory reason)[])[] memory
];
const addrs = "0x9c1d42D3662776700341C3BD81b31F5b40D197A8"; // addrs of the contract.

const contract = new ethers.Contract(addrs, ERC20_ABI, provider);
const wallet = new ethers.Wallet(
  "d64010ad53281a8399370226310f2594679e2bf1bd69afdf6761e53bc47bbb56",
  provider
);

// async function main() {
//   contract.connect(wallet);
//   const res = await contract.connect(wallet).setSomeVar(5);
//   console.log(res.toString());
// }

async function updateData() {
  contract.connect(wallet);
  const data = await contract
    .connect(wallet)
    .createPetition(
      "smth",
      "road not ryt",
      "vatzza",
      "General",
      "0x4Fa558486d2185cA34DD4708E198d9f3fE6663f8"
    );
  console.log("Data:", data);
}

async function getData() {
  const data = await contract.getPetitionsByAddress(
    "0x4Fa558486d2185cA34DD4708E198d9f3fE6663f8"
  );
  console.log("Data:", data.toString());
}

// getData();
// updateData();
// getData();
// main();

app.get("/getPetitions/:addrs", async (req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  const { addrs } = req.params;
  async function getData() {
    try {
      const data = await contract.getPetitionsByAddress(addrs);
      console.log("Data:", data.toString());
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    } catch (e) {
      console.error(e);
    }
  }
  const interval = setInterval(getData, 5000);
  res.on("close", () => {
    clearInterval(interval);
  });
});

app.get("/getPetitions", async (req, res) => {
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  async function getData() {
    try {
      const data = await contract.getAllPetitions();
      console.log("Data:", data.toString());
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    } catch (e) {
      console.error(e);
    }
  }
  const interval = setInterval(getData, 5000);
  res.on("close", () => {
    clearInterval(interval);
  });
});

app.post("/postPetition/:address", (req, res) => {
  /* 
  string memory title, string memory description, string memory name, string memory physicalAddress, string memory petitionType, string memory userAddressString
   */
  console.log("Request:", req.body);
  console.log(req.params.address);
  async function updateData() {
    contract.connect(wallet);
    const data = await contract
      .connect(wallet)
      .createPetition(
        req.body.title,
        req.body.description,
        req.body.name,
        req.body.physicalAddress,
        req.body.petitionType,
        req.params.address
      );
    console.log("Data:", data);
  }
  updateData();

  // async function getData() {
  //   const { addrs } = req.params;
  //   const data = await contract.getPetitionsByAddress(addrs);
  //   return data?.toString();
  // }
  // res.json(getData());
  res.send("Fcking success");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});