const axios = require('axios').default;

const SECRET = process.env.RECAPTCHA_SECRET;
const RECAPTCHA_VERIFY_URL = process.env.RECAPTCHA_VERIFY_URL;
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== `POST` || !event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          msg: { isHuman: false, error: true },
          status: `Bad Request`,
        }),
      };
    }
    const token = JSON.parse(event.body);

    const isHuman = await axios
      .post(`${RECAPTCHA_VERIFY_URL}?response=${token}&secret=${SECRET}`)
      .then(({ data }) => data.score > RECAPTCHA_SCORE_THRESHOLD);

    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: { isHuman, error: false },
        status: 'success',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: { isHuman: false, error }, status: `error` }),
    };
  }
};
