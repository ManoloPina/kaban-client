import { useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import _ from "lodash";

export const useRoute = <QueryParams extends object>() => {
  const location = useLocation();
  const navigate = useNavigate();
  //state
  const [searchParams, _setSearchParams] = useSearchParams();

  const queryParams: QueryParams = useMemo(() => {
    return _.mapKeys(Object.fromEntries([...searchParams]), (_v, k) =>
      k.toLowerCase()
    ) as QueryParams;
  }, [searchParams]);

  const updateQueryParams = <T extends object>(
    query: T,
    navigateTo?: string
  ): void => {
    const pathname = navigateTo ? navigateTo : location.pathname;
    if (query) {
      const obj = _.mapKeys(query, (_v, k) => _.camelCase(k));

      Object.keys(obj).forEach((k: string) => obj[k] == null && delete obj[k]);

      navigate(
        {
          pathname,
          search: queryString.stringify(query),
        },
        { replace: !!navigate }
      );
    }
  };

  return {
    queryParams,
    updateQueryParams,
  };
};
