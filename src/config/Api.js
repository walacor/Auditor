import settings from "../settings";
const {BASE_URL} = settings;
export default (() => {
  return {
   USER_LOGIN : `${BASE_URL}/api/auth/login`,
   CREATE_SCHEMA : "/api/setting/createSchema",
   CHECK_SCHEMA : "/api/setting/checkSchema",
   INSERT_RECORD : "/api/setting/insertRecord",
   FETCH_TRANSACTION_SIGNATURE : "/api/solana/fetch-transaction/:signature",
   SEARCH_MEMO_TRANSACTION: "/api/solana/search/memo-transaction"
  };
})();
