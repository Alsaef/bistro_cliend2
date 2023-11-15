import { useQuery } from "@tanstack/react-query";
import UseSecureAxios from "./UseSecureAxios";

const SetManage = () => {
    const [axiosSecure]=UseSecureAxios()
     const {data:manage=[],refetch}=useQuery({
        queryKey:['manage'],
        queryFn: async()=>{
          const res = await axiosSecure('/manage-booking')
          return res.data;
        }
     })
     return [manage,refetch]
};

export default SetManage;