import React from 'react'
import { useState } from 'react'
import { CategoriesData } from '../Screens/Data/CategoriesData'

const YearData = [
    {title: "Sort By Year"},
    {title: "1700 - 1800"},
    {title: "1800 - 1900"},
    {title: "1900 - 2000"},
    {title: "2000 - 2010"},
    {title: "2010 - 2030"},
    ]
const TimesData = [
    {title: "Sort By Hours"},
    {title: "1 - 5 Hours"},
    {title: "5 - 10 Hours"},
    {title: "10 - 15 Hours"},
    {title: "15 - 20 Hours"},
    ]

const RatesData = [
    {title: "Sort By Rates"},
    {title: "1 Star"},
    {title: "2 Star"},
    {title: "3 Star"},
    {title: "4 Star"},
    {title: "5 Star"},
    ]

function Filters() {
    const [category,setCatergory] = useState({title:"category"})
    const [year,setYear] = useState(YearData[0]);
    const [times,setTimes] = useState(YearData[0]);
    const [rates,setRates] = useState(YearData[0]);

    const Filter = [
        {
            value:category,
            onChange:setCatergory,
            items:CategoriesData
        },
        {
            value: year,
            onChange:setYear,
            items: YearData
        },
        {
            value:times,
            onChange: setTimes,
            items: TimesData
        },
        {
            value: rates,
            onChange:setRates,
            items: RatesData
        }  
    ]
  return (
        <div className="my-6 bg-dry text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
            
        </div>
  )
}

export default Filters