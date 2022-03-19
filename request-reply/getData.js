const axios = require("axios")

const getDetails = async () => {
    let res = await axios.get("http://localhost:8080/user");

    if(res.status !== 200){
        console.log("error")
    }else{
        return res.data;
    }

}

module.exports = getDetails;