// import { registerUserOrg1 } from "./registerUser-org1";
// import { registerUserOrg2 }  from "./registerUser-org2";


const { registerUserOrg1 } = require('./registerUser-org1.js')
const { registerUserOrg2 } = require('./registerUser-org2.js')

user = process.argv[2].toString();
org = process.argv[3].toString();


if(org.toLowerCase() == "org1"){
    console.log(org);
    registerUserOrg1(user);
}

if(org.toLowerCase() == "org2"){
    registerUserOrg2(user);
}
