import { useState } from 'react'
import { toast } from 'react-toastify'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }

        if (!formData.name) {
            newErrors.name = 'Name is required.'
        }

        const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailValidation.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.'
        }

        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long.'
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.'
        }

        setErrors(newErrors)

        return Object.values(newErrors).every((error) => error === '')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (validateForm()) {
            toast.success('Form submitted successfully!', {
                position: 'top-right',
            })
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        }
    }

    return (
        <section className="p-4 md:w-1/3 flex flex-col">
            <h1 className="text-2xl font-semibold">Task 2: Form Handling and Validation</h1>
            <div className="flex-1 flex items-center">
                <div className="max-w-md mx-auto w-full bg-white p-6 rounded-md shadow-md">
                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className=" p-2 h-10 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="p-2 h-10 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="p-2 h-10 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="p-2 h-10 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default RegistrationForm
