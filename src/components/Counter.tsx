import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        } else if (count == 0) {
            toast.error('Number cannot be negative.', { position: 'top-right' })
        }
    }

    return (
        <section className="p-4 md:w-1/3 flex flex-col space-y-2 bg-gray-100">
            <h1 className="text-2xl font-semibold">Task 1: Component Creation and State Management</h1>
            <div className="flex-1 flex items-center">
                <div className="w-full py-4 flex justify-center items-center space-x-4">
                    {/* Decrement */}
                    <button onClick={decrement} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                        <FaMinus />
                    </button>

                    {/* Result */}
                    <div className="text-base text-center">
                        <p>Current Count</p>
                        <span>{count}</span>
                    </div>

                    {/* Increment */}
                    <button onClick={increment} className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                        <FaPlus />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Counter
