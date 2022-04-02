     import React from 'react';
import { Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

     const Dashboard = () => {
         const data = [
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        ]
         return (
             <div>
               <LineChart width={200} height={400} data={data}>
               <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#FF0000" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#00FF00" />
                    <Line type="monotone" dataKey="sell" stroke="#0000FF" />
               </LineChart>

               <PieChart width={400} height={400}>
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label={true} />
                </PieChart>
             </div>
         );
     };
     
     export default Dashboard;