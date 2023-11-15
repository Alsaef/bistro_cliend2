import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const SetMenu = () => {
    const {data:menu=[],isLoading:loading,refetch}=useQuery({
        queryKey:['menu'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:3000/menu')
            return res.json()
        }
    })
    return [menu,loading,refetch]
};

export default SetMenu;