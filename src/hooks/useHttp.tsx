import { AxiosError, AxiosResponse } from "axios";
import { useNavigate } from "react-router";
import { ROUTES } from "src/constants";
import { useRoute, useAlert } from "src/hooks";
import { IRes, TypeResult } from "src/types/http";
import { http } from "src/utils";

interface IRequestObject<Payload> {
  path: string;
  payload?: Payload;
  showSuccessMsg?: boolean;
  showWarningMsg?: boolean;
  updatedQueryParams?: boolean;
  method: "get" | "post" | "patch";
}

export const useHttp = () => {
  //store & other dependencies
  const { showAlert } = useAlert();
  const { updateQueryParams } = useRoute();
  const navigate = useNavigate();

  const request = async <Return, Payload extends object>(
    params: IRequestObject<Payload>
  ): Promise<Return | null> => {
    const {
      path,
      method,
      payload,
      showSuccessMsg = false,
      showWarningMsg = true,
      updatedQueryParams: _updateQueryParams,
    } = params;

    try {
      if (!!payload && !!_updateQueryParams) updateQueryParams(payload);

      const _payload = method == "get" ? { params: payload } : payload;

      const {
        data: { content, typeResult, message },
      }: AxiosResponse<IRes<Return>> = await http[method](path, _payload);

      if (typeResult === TypeResult.Success && showSuccessMsg) {
        showAlert({
          message,
          type: "success",
          title: "Success",
        });
        return content;
      }

      return content ? content : null;


    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        delete http.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
        navigate(ROUTES.AUTH.LOGIN);
      }
      showAlert({
        type: "error",
        title: "Error",
        message: error.message,
      });
      console.error(error);

      return null;
    }
  };
  return { request };
};
