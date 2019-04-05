let SLPSDK = require("slp-sdk");
let SLP = new SLPSDK();
(async () => {
  try {
    let list = await SLP.Utils.list();
    console.log(list);
  } catch (error) {
    console.error(error);
  }
})();
