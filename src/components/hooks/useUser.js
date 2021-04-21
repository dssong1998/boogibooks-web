import { useQuery, useReactiveVar } from "@apollo/client";
import { useEffect } from "react";
import { isLoggedInVar, logUserOut } from "../../apollo";
import ME_QUERY from "../queries/MeQuery";

const useUser = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const { data } = useQuery(ME_QUERY, {
    skip: !isLoggedIn,
  });
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);
  return { ...data };
};
export default useUser;
