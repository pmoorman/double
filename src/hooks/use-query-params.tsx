import { navigate } from "gatsby";
import { useLocation, WindowLocation } from "@reach/router";
import qs from "query-string";

export const updateQueryParams = (
  location: WindowLocation,
  value: Record<string, string>
) => {
  const query = qs.parse(location?.search?.replace("?", ""));
  const newQueries = { ...query, ...value };
  navigate(`?${qs.stringify(newQueries)}`, { replace: true });
};

export const useQueryParams = <T,>() => {
  const location = useLocation();
  const parsed = qs.parse(location?.search?.replace("?", ""));
  const query = Object.keys(parsed).reduce((prev, key) => {
    const value = parsed[key] as string;
    prev[key] = decodeURIComponent(value);
    return prev;
  }, {});

  const handleUpdate = (params: Record<string, string>) => {
    updateQueryParams(location, params);
  };

  return {
    queryParams: query as unknown as T,
    update: handleUpdate,
  };
};
