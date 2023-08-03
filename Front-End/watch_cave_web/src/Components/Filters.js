import React from 'react'
import { useState } from 'react'
import { CategoriesData } from '../Screens/Data/CategoriesData'
import { Listbox, Transition } from '@headlessui/react'
import {CgSelect} from 'react-icons/cg'
import { Fragment } from 'react'

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
    const [times,setTimes] = useState(TimesData[0]);
    const [rates,setRates] = useState(RatesData[0]);

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
            {
                Filter.map((item,index) => (
                    <Listbox key={item} value={item.value} onChange={item.onChange}>
                        <div className="relative">
                            <Listbox.Button className="relative border border-gray-800 w-full text-white py-4 pl-6 pr-10 text-left text-xs">
                                <span className="block trucate">{item.value.title}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                                    <CgSelect className="w-5 h-5" area-hidden="true"/>
                                </span>
                            </Listbox.Button>
                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {
                                        item.items.map((iterm,i) => (
                                            <Listbox.Option key={i} className={({active}) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-subMain text-white" : "text-main"}`
                                            } value={iterm}>
                                                {
                                                    ({selected}) => (
                                                        <>
                                                        <span className={`block truncated ${selected ? 'font-semibold':'font-normal'}`}> 
                                                            {iterm.title}
                                                        </span>
                                                        {
                                                            // selected ? (
                                                            //     <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                                                            //         <p>e</p>
                                                            //     </span>
                                                            // )
                                                        }
                                                        </>
                                                    )
                                                }
                                            </Listbox.Option>
                                        ))
                                    }
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                ))
            }
        </div>
  )
}

export default Filters