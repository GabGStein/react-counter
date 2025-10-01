"use client"

import { useState } from "react"

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(count +1)
    }

    const decrement = () => {
        setCount(count -1)
    }

    const reset = () => {
        setCount(0)
    }



    return (
        <div className="bg-sky-100 h-screen w-screen flex justify-center items-center flex-col">
            <div className="flex gap-4 text-7xl">
                <button
                className="text-blue-300 hover:text-blue-500 cursor-pointer w-10"
                onClick={decrement}
                >
                    -
                </button>

                <div className="min-w-28 min-h-28 bg-blue-600 rounded-xl flex justify-center items-center shadow-xl/30">
                    <h1 className="font-bold text-white p-2">{count}</h1>
                </div>

                <button
                className="text-blue-300 hover:text-blue-500 cursor-pointer w-10"
                onClick={increment}
                >
                    +
                </button>
            </div>

            <button
            className="mt-4 cursor-pointer bg-blue-400 text-white px-3 py-2 rounded-full hover:bg-blue-500"
            onClick={reset}
            >
                Reset
            </button>
        </div>
    )

}