const express = require("express");
const ethers = require("ethers");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const infuraID = "a65921eb8d6e44f69f1d879bbfc12f81"

const provider = new ethers.providers.JsonRpcProvider(
    `https://eth-sepolia.g.alchemy.com/v2/8q4zZPvIn4n4dlk4HykO0w8wZz62l1hv`
);

const CONTRACT_ADDRESS = "0xD0deD40b5416cc464D132623Ab5886781C1B5967";
const CONTRACT_ABI = [
    "function addOrUpdatePatient(string memory _name,uint256 _age,string memory _gender,string memory _medicalHistory)",
    "function getPatient(address) view returns (string memory _name,uint256 _age,string memory _gender,string memory _medicalHistory)",
    "function getAllPatients() view returns (address[])"
];

const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
const wallet = new ethers.Wallet(
    "f9420ec8d3d2b21b7e210c6125c7d5026c0641dd3e52bd0fddae212f2a0770e1",
    provider
);

async function initializeAndUse(){
    contract.connect(wallet);
    const data = await contract
         .connect(wallet)
         .addOrUpdatePatient(
            "Harish",
            2005,
            "Apollo",
            "Asthma",
         );
    console.log("Data:",data);
}
initializeAndUse();

async function getData(){
    const data = await contract.getPatient(
           "0xD0deD40b5416cc464D132623Ab5886781C1B5967"
    );
    console.log("Data:",data.toString());
}
getData();

app.get("/getPatient/:addrs", async (req, res) => {
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Connection", "keep-alive");
    const { addrs } = req.params;
    async function getData() {
      try {
        const data = await contract.getPatient(addrs);
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

app.post("/postPatients/:address", (req, res) => {
    /* 
    string memory title, string memory description, string memory name, string memory physicalAddress, string memory petitionType, string memory userAddressString
     */
    console.log("Request:", req.body);
    console.log(req.params.address);
    async function updateData() {
      contract.connect(wallet);
      const data = await contract
        .connect(wallet)
        .addOrUpdatePatient(
          req.body._name,
          req.body._age,
          req.body._gender,
          req.body._medicalHistory
        );
      console.log("Data:", data);
    }
    updateData();
  
    // async function getData() {
    //   const { addrs } = req.params;
    //   const data = await contract.getPatient(addrs);
    //   return data?.toString();
    // }
    // res.json(getData());
    res.send("success");
  });

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
