
export default (() => {
  return {
   USER_LOGIN : "/ui/api/auth/login",
   CREATE_SCHEMA : "/ui/api/setting/createSchema",
   CHECK_SCHEMA : "/ui/api/setting/checkSchema",
   INSERT_RECORD : "/ui/api/setting/insertRecord",
   FETCH_TRANSACTION_SIGNATURE : "/ui/api/solana/fetch-transaction/:signature",
   SEARCH_MEMO_TRANSACTION: "/ui/api/solana/search/memo-transaction"
  };
})();
