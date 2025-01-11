async function main() {
    // Get the contract factory for the PatientRecord contract
    const PatientRecord = await ethers.getContractFactory("PatientRecord");
    
    // Deploy the contract
    const patientRecord = await PatientRecord.deploy();
    
    // Log the deployed contract address
    console.log("Contract Deployed to Address:", patientRecord.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  