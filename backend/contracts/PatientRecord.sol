// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientRecord {
    struct Patient {
        string name;
        uint256 age;
        string gender;
        string medicalHistory;
    }

    mapping(address => Patient) private patients;
    address[] private patientAddresses;

    // Add or update a patient record
    function addOrUpdatePatient(
        string memory _name,
        uint256 _age,
        string memory _gender,
        string memory _medicalHistory
    ) public {
        patients[msg.sender] = Patient(_name, _age, _gender, _medicalHistory);
        patientAddresses.push(msg.sender);
    }

    // Get a patient record
    function getPatient(address _patientAddress)
        public
        view
        returns (
            string memory name,
            uint256 age,
            string memory gender,
            string memory medicalHistory
        )
    {
        Patient memory patient = patients[_patientAddress];
        return (
            patient.name,
            patient.age,
            patient.gender,
            patient.medicalHistory
        );
    }

    // Get all patients
    function getAllPatients() public view returns (address[] memory) {
        return patientAddresses;
    }
}
