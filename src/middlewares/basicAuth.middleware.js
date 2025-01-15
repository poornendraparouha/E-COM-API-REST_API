import UserModel from "../features/user/user.model.js";

const basicAuthorizer = (req, res, next)=>{

    // 1. check if authorization header is empty
    const authHeader = req.headers["authorization"];
    if(!authHeader){
        return res.status(401).send("No authorization details found");
    }
    console.log(authHeader);

    // 2. extract the credentials.
    const base64Credentials = authHeader.split(' ')[1];
    console.log(base64Credentials);

    // 4. decoede the credentials
    const decodedCreds = Buffer.from(base64Credentials, 'base64').toString("utf-8")
    console.log(decodedCreds); //[username:password]
    const creds = decodedCreds.split(':');

    const user = UserModel.getAll().find((u)=> u.email == creds[0] && u.password == creds[1]);
    if(user){
        next();
    }else{
        return res.status(401).send("Incorrect Credentials")
    }
}

export default basicAuthorizer;