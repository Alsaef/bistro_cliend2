import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseSecureAxios from "./UseSecureAxios";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
  const {user,loading}=useContext(AuthContext)
   
  const[axiosSecure]=UseSecureAxios()

  const {data:isAdmin ,isLoading: isAdminLoading}=useQuery({
    queryKey:['isAdmin',user?.email],
    enabled: !loading,
    queryFn: async()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        return res.data.admin
    }
  })
     return[ isAdmin, isAdmin];
};

export default useAdmin;