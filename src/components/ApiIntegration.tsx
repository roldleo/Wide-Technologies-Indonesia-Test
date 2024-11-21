import { useState, useEffect } from 'react'
import axios from 'axios'

const ApiIntegration = () => {
    const [data, setData] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
                setData(response.data)
            } catch (err: any) {
                setError('Failed to fetch data')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    // Loading
    if (loading) {
        return (
            <section className="p-4 md:w-1/3 bg-gray-100 flex flex-col">
                <h1 className="text-2xl font-semibold mb-4">Task 3: API Integration</h1>
                <div className="flex-1 flex items-center">
                    <div className="animate-pulse space-y-2 w-full">
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                        <div className="h-4 bg-gray-300 rounded w-2/4"></div>
                    </div>
                </div>
            </section>
        )
    }

    // Error
    if (error) {
        return (
            <section className="p-4 md:w-1/3 bg-gray-100 flex flex-col">
                <h1 className="text-2xl font-semibold">Task 3: API Integration</h1>
                <div className="flex-1 flex items-center">{error}</div>
            </section>
        )
    }

    // Success
    return (
        <div className="p-4 md:w-1/3 bg-gray-100 flex flex-col">
            <h1 className="text-2xl font-semibold">Task 3: API Integration</h1>
            <div className="flex-1 flex items-center">
                <div>
                    <p className="text-lg">
                        User Id: <span>{data.userId}</span>
                    </p>
                    <p className="text-lg">
                        Title: <span>{data.title}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ApiIntegration
