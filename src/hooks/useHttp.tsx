import { AxiosResponse } from "axios";
import { useRoute } from "src/hooks";
import { API } from "src/constants";
import { IRes, TypeResult } from "src/types/http";
import { http } from "src/utils";

interface IRequestObject<Payload> {
  path: string;
  payload?: Payload;
  updatedQueryParams?: boolean;
  method: "get" | "post" | "patch";
}

export const useHttp = () => {
  //store & other dependencies
  const { updateQueryParams } = useRoute();

  const request = async <Return, Payload extends object>(
    params: IRequestObject<Payload>
  ): Promise<Return | null> => {
    const {
      path,
      method,
      payload,
      updatedQueryParams: _updateQueryParams,
    } = params;

    // let notificationOpts: INotifications = {
    //   title: notificationTitle,
    //   position: "bc",
    // };

    try {
      if (!!payload && !!_updateQueryParams) updateQueryParams(payload);

      const _payload = method == "get" ? { params: payload } : payload;
      // const _http = !!auth ? http : axios;

      // let _baseUrl = API === 'DEFAULT' ? BASE_URL : ENRICHMENT_BASE_URL;
      // let _baseUrl = "DEFAULT";

      // if (API === "DEFAULT") {
      //   _baseUrl = BASE_URL;
      // } else if (API === "CLIENT") {
      //   _baseUrl = ENRICHMENT_BASE_URL;
      // } else if (API === "NONE") {
      //   _baseUrl = "";
      // }

      const {
        data: { content, typeResult, message },
      }: AxiosResponse<IRes<Return>> = await http[method](path, _payload);

      if (typeResult === TypeResult.Success) {
        // if (!!showSuccessMsg)
        //   dispatch(notification.success({ ...notificationOpts, message }));
        return content;
      } else {
        // if (!!showWarningMsg)
        //   dispatch(notification.warning({ ...notificationOpts, message }));
        return content ? content : null;
      }
    } catch (error) {
      // const e = error;
      console.error(error);
      // dispatch(notification.error({ ...notificationOpts, message: e.message }));
      return null;
    }
  };
  return { request };
};
