import { create } from "apisauce";

const CURRENT_IP_ADDRESS = "192.168.59.137";
// const CURRENT_IP_ADDRESS = "192.168.5.137";

const baseURL = `http://${CURRENT_IP_ADDRESS}:1209/api`;

export const client = create({
  baseURL,
});

// client.addAsyncRequestTransform(async (request) => {

//   // console.log(
//   //   "Request : addAsyncReqTransform",
//   //   JSON.stringify(request, undefined, 3)
//   // );
//   // let token = APP_TOKEN;
//   // const userStore = userPersistStorage.getString(userPersistStoreName);
//   // if (!userStore) return;
//   // const userDetails: UserPersistStoreStateType = JSON.parse(userStore);
//   // const userToken = userDetails?.state?.userDetails?.data?.token;
//   // if (userToken) {
//   //   token = userToken;
//   // }
//   // if (request.headers && !request.headers['authorization'])
//   //   request.headers['authorization'] = `Bearer ${token}`;
// });
// client.addAsyncResponseTransform(async (response) => {
//   // console.log(
//   //   "Request : addAsyncReqTransform",
//   //   JSON.stringify(response.originalError, undefined, 3)
//   // );
//   // let token = APP_TOKEN;
//   // const userStore = userPersistStorage.getString(userPersistStoreName);
//   // if (!userStore) return;
//   // const userDetails: UserPersistStoreStateType = JSON.parse(userStore);
//   // const userToken = userDetails?.state?.userDetails?.data?.token;
//   // if (userToken) {
//   //   token = userToken;
//   // }
//   // if (request.headers && !request.headers['authorization'])
//   //   request.headers['authorization'] = `Bearer ${token}`;
// });
