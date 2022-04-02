import axios from "axios";
import chalk from "chalk";
const log = console.log;

const API_URL = "https://gorest.co.in/public/v2/users";

/**
 * This will fetch the conversion details from an external api
 * @returns Promise
 */
const getDetails = async () => {
    try {
        let res = await axios.get(API_URL);

        if (res.status !== 200) {
            log(chalk.red(`unable to get conversion details response status: ${res.status}`));
            throw new Error(`unable to get conversion details response status: ${res.status}`);
        } else {
            log(chalk.blue(`Fetched ${res.data.length} conversion  rates from external API`));
            return res.data;
        }
    } catch (e) {
        throw new Error(`unable to get conversion details from external API: ${CONVERSION_API_URL}`, e);
    }

};

module.exports = getConversionDetails;