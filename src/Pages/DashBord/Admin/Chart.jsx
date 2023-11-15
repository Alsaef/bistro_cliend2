import React from 'react';
import setMenu from '../../Hook/SetMenu';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const [menu]=setMenu()

 

    return (
        <div className='mt-3'>
        
        <>
        <LineChart
          width={400}
          height={300}
          data={menu}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="name" stroke="#82ca9d" />
        </LineChart>
      </>
     
        </div>
    );
};

export default Chart;