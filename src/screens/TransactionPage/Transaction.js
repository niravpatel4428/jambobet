import React from 'react'

const Transaction = () => {

    const data = [
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
            <div className="px-[30px] w-full max-w-[1780px] mx-auto bg-doubleextralightwhite rounded-[25px] border border-solid border-[#0C3D8C]">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">From:</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">To:</label>
                            <input
                                type="date"
                                className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-600 mb-1">Type:</label>
                        <select className="border border-gray-300 rounded px-2 py-1 text-sm w-full">
                            <option>All</option>
                            <option>Type 1</option>
                            <option>Type 2</option>
                        </select>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white overflow-auto">
                    <table className="table-auto w-full text-sm text-left">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600">
                                <th className="px-4 py-2">Reference ID</th>
                                <th className="px-4 py-2">Date/Time</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Amount</th>
                                <th className="px-4 py-2">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-gray-50" : "bg-blue-50"
                                        } text-gray-800`}
                                >
                                    <td className="px-4 py-2">{item.referenceId}</td>
                                    <td className="px-4 py-2">{item.dateTime}</td>
                                    <td className="px-4 py-2">{item.description}</td>
                                    <td className="px-4 py-2 text-red-500">{item.amount}</td>
                                    <td className="px-4 py-2">{item.balance}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Transaction
