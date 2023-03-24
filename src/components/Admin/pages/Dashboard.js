import {React , useState}  from 'react';
import { useEffect } from 'react';
import Card from '../shared/Card';
import { Chart } from "react-google-charts";
import { useTotalUserCountQuery , useApproveUserCountQuery , useCategoryCountQuery ,useProfessionCountQuery } from '../../../redux/registerApi';
function Dashboard(title, count) {
  const [usercountNo , setUserCount] = useState('0')
  const [approveusercountNo , setApproveUserCount] = useState('0')
  const [categorycountNo , secategoryCount] = useState('0')
  const [professionNo , seprfessionCount] = useState('0')
  const {data:usercount} = useTotalUserCountQuery();
  const {data:approveusercount} = useApproveUserCountQuery();
  const {data:categorycount} = useCategoryCountQuery();
  const {data:professioncount} = useProfessionCountQuery();
  useEffect(() => {
    setUserCount(usercount)
    setApproveUserCount(approveusercount)
    secategoryCount(categorycount)
    seprfessionCount(professioncount)
  }, [usercount , approveusercount , categorycount ,professioncount])
  
  var data = [
    [
      "Day",
      "Guardians of the Galaxy",
      "The Avengers",
      "Transformers: Age of Extinction",
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ];

  return (
    <div>
      <div className='container padding-mob pt-5'>
        {/* Dashboard cards Start */}
        <div className='row'>
            <div className='col-lg-3 col-sm-6 col-md-6 col-12 mb-3'>
              <Card title={"Total User"} count={usercountNo}/>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6 col-12 mb-3'>
              <Card title={"Approved User"} count={approveusercountNo}/>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6 col-12 mb-3'>
              <Card title={"Total Category"} count={categorycountNo}/>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6 col-12 mb-3'>
              <Card title={"Total Profession"} count={professionNo}/>
            </div>
          </div>
        {/* </div> */}
        {/* Dashboard cards Ends */}
        {/* <Chart
          chartType="ScatterChart"
          data={data}
          width="100%"
          height="400px"
          options={{backgroundColor: "#1a2039" , color:"white" }}
          legendToggle
        /> */}
      </div>
    </div>
  )
}

export default Dashboard



