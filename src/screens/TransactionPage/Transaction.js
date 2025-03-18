import React from 'react'
import greater from "../../images/greater.svg";

const Transaction = () => {

    const data = [
        {
            referenceId: "14103001633",
            dateTime: "13/01/25 10:32",
            description: "Excise Tax for bet id: 7885",
            amount: "-3.91",
            balance: "70.00",
        },
        {
            referenceId: "14103001633",
            dateTime: "13/01/25 10:32",
            description: "Excise Tax for bet id: 7885",
            amount: "-3.91",
            balance: "70.00",
        },
        {
            referenceId: "14103001633",
            dateTime: "13/01/25 10:32",
            description: "Excise Tax for bet id: 7885",
            amount: "-3.91",
            balance: "70.00",
        },
        {
            referenceId: "14103001633",
            dateTime: "13/01/25 10:32",
            description: "Excise Tax for bet id: 7885",
            amount: "-3.91",
            balance: "70.00",
        },
        {
            referenceId: "14103001633",
            dateTime: "13/01/25 10:32",
            description: "Excise Tax for bet id: 7885",
            amount: "-3.91",
            balance: "70.00",
        },
        {
            referenceId: "14103001633",
            dateTime: "13/01/25 10:32",
            description: "Excise Tax for bet id: 7885",
            amount: "-3.91",
            balance: "70.00",
        }, 
        {
            referenceId: "14103001633",
            dateTime: "13/01/25 10:32",
            description: "Excise Tax for bet id: 7885",
            amount: "-3.91",
            balance: "70.00",
        },
        {
            referenceId: "14103001633",
            dateTime: "13/01/25 10:32",
            description: "Excise Tax for bet id: 7885",
            amount: "-3.91",
            balance: "70.00",
        },
        // Repeat or map similar objects for rows
    ];

    return (
        <>
            <div className='p-[10px_15px_40px] md:p-[10px_20px_40px] s16:p-[15px_30px_60px] s18:p-[20px_30px_100px]'>
                <div className="overflow-hidden shadow-dashboardshadow w-full max-w-[1780px] mx-auto bg-doubleextralightwhite rounded-[18px] md:rounded-[25px] border border-solid border-lightblueborder dark:border-[#0C3D8C] dark:bg-[#243853]">
                    <div className='overflow-auto'>
                        <div className="min-w-[900px] flex flex-wrap items-center justify-between p-[20px_20px] md:p-[10px_37px] s16:p-[16px_37px] s18:p-[20px_37px] bg-lightbluebg rounded-[18px_18px_0px_0px] md:rounded-[25px_25px_0px_0px] border border-solid border-b-extrathinblack dark:bg-[#667487] dark:border-[#667487]">
                            <div className="flex items-center gap-[30px] xl:gap-[75px]">
                                <div className='flex items-center gap-[13px]'>
                                    <label className="text-sm xl:text-base s15:text-xl s18:text-[22px] text-mutedblue font-bold  !leading-tight s18:!leading-[160%] dark:text-white">From:</label>
                                    <input
                                        type="date"
                                        className="text-mutedblue text-sm s16:text-lg s18:text-[22px] font-bold  !leading-none s18:!leading-[160%] shadow-dashboardshadow border border-solid bg-white rounded-md min-w-[180px] xl:min-w-[227px] py-2 px-2 md:px-3 s18:px-4 md:py-2 s18:py-4 w-full"
                                    />
                                </div>
                                <div className='flex items-center gap-[13px]'>
                                    <label className="text-sm xl:text-base s15:text-xl s18:text-[22px] text-mutedblue font-bold  !leading-tight s18:!leading-[160%] dark:text-white">To:</label>
                                    <input
                                        type="date"
                                        className="text-mutedblue text-sm s16:text-lg s18:text-[22px] font-bold  !leading-none s18:!leading-[160%] shadow-dashboardshadow border border-solid bg-white min-w-[180px] xl:min-w-[227px] rounded-md py-2 px-2 md:px-3 s18:px-4 md:py-2 s18:py-4 w-full"
                                    />
                                </div>
                            </div>
                            <div className='flex items-center gap-[13px]'>
                                <label className="text-sm xl:text-base s15:text-xl s18:text-[22px] text-mutedblue font-bold leading-[160%] dark:text-white">Type:</label>
                                <select className="select text-mutedblue text-sm s16:text-lg s18:text-[22px] py-2 px-2 font-bold !leading-none s18:!leading-[160%] shadow-dashboardshadow border border-solid bg-white min-w-[190px] rounded-md md:px-3 s18:px-4 md:py-2 s18:py-4 w-full appearance-none outline-none">
                                    <option>All</option>
                                    <option>Type 1</option>
                                    <option>Type 2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="overflow-auto p-[15px] md:p-[10px_25px] xl:p-[12px_35px] s18:p-[15px_35px]">
                        <table className="table-auto w-full min-w-[900px] text-sm text-left">
                            <thead>
                                <tr className="">
                                    <th className="px-[15px] py-[10px] s15:py-3 s18:px-[23px] text-black text-sm s15:text-base s18:text-[22px] font-bold !leading-snug s18:leading-[159%] dark:text-white">Reference ID</th>
                                    <th className="px-[15px] py-[10px] s15:py-3 s18:px-[23px] text-black text-sm s15:text-base s18:text-[22px] font-bold !leading-snug s18:leading-[159%] dark:text-white">Date/Time</th>
                                    <th className="px-[15px] py-[10px] s15:py-3 s18:px-[23px] text-black text-sm s15:text-base s18:text-[22px] font-bold !leading-snug s18:leading-[159%] dark:text-white">Description</th>
                                    <th className="px-[15px] py-[10px] s15:py-3 s18:px-[23px] text-black text-sm s15:text-base s18:text-[22px] font-bold !leading-snug s18:leading-[159%] dark:text-white">Amount</th>
                                    <th className="px-[15px] py-[10px] s15:py-3 s18:px-[23px] text-black text-sm s15:text-base s18:text-[22px] font-bold !leading-snug s18:leading-[159%] dark:text-white">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? "bg-tableblue dark:bg-[#2F425C]" : "bg-transparent"
                                            } text-[#0C3D8C] dark:text-white text-sm s15:text-base s18:text-2xl font-light s18:leading-[141%] !leading-tight rounded-[12px] font-poppins`}
                                    >
                                        <td className="py-[10px] s18:py-[25px] px-[15px] s18:px-[23px] font-medium rounded-[12px_0px_0px_12px]">{item.referenceId}</td>
                                        <td className="py-[10px] s18:py-[25px] px-[15px] s18:px-[23px]">{item.dateTime}</td>
                                        <td className="py-[10px] s18:py-[25px] px-[15px] s18:px-[23px]">{item.description}</td>
                                        <td className="py-[10px] s18:py-[25px] px-[15px] s18:px-[23px] font-normal">{item.amount}</td>
                                        <td className="py-[10px] s18:py-[25px] px-[15px] s18:px-[23px] rounded-[0px_12px_12px_0px] font-normal">{item.balance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="flex gap-2 xl:gap-[13px] justify-center items-center">
                        <div>
                            <img
                                src={greater}
                                alt="greater"
                                className="object-contain cursor-pointer rotate-180  dark:brightness-[100] dark:hover:brightness-50"
                            />
                        </div>
                        <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                            1
                        </div>
                        <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                            2
                        </div>
                        <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                            3
                        </div>
                        <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                            4
                        </div>
                        <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                            5
                        </div>
                        <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold  dark:hover:text-white dark:text-white hover:text-white transition-all duration-300 flex justify-center items-center">
                            ...
                        </div>
                        <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-[#555752] text-xs xl:text-sm font-semibold dark:bg-white/30 dark:hover:bg-white bg-darkblue/10 dark:hover:text-darkblue dark:text-white hover:text-white hover:bg-darkblue transition-all duration-300 flex justify-center items-center">
                            50
                        </div>
                        <div>
                            <img
                                src={greater}
                                alt="greater"
                                className="object-contain cursor-pointer  dark:brightness-[100] dark:hover:brightness-50"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction
