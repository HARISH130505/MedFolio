const hre = require("hardhat");

async function main() {
  const PatientRecord = await hre.ethers.getContractFactory("PatientRecord");
  const patientRecord = await PatientRecord.deploy();

  await patientRecord.deployed();
  console.log("PatientRecord deployed to:", patientRecord.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
