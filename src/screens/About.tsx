import React from 'react'
import { FaLinkedin, FaGlobe, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const About: React.FC = () => {
    return (
        <section className="pt-14 h-screen w-screen overflow-x-hidden">
            <div className="p-4 flex flex-col gap-10 h-full justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-800 mb-4">Tentang Aplikasi</h1>
                    <p className="text-gray-700 mb-4">
                        Aplikasi ini merupakan hasil dari tes yang diberikan oleh <strong>PT Wide Technologies Indonesia</strong>. Harapannya, aplikasi ini dapat memberikan gambaran mengenai kemampuan teknis, kreativitas, dan komitmen dalam menyelesaikan sebuah tugas secara profesional.
                    </p>

                    <p className="text-gray-700 mb-6">
                        Aplikasi ini dibangun dengan menggunakan <strong className="font-semibold">React JS</strong> dan
                        <strong className="font-semibold">TypeScript</strong>. Terdapat dua router utama di aplikasi ini, yaitu <strong className="font-semibold">Home</strong> dan <strong className="font-semibold">About</strong>.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Fitur Aplikasi:</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-3">
                        <li>
                            <strong className="font-semibold">Counter Component</strong>
                            <ul className="list-decimal list-inside space-y-1">
                                <li>
                                    Pengguna dapat melakukan <strong>increment</strong> dan <strong>decrement</strong> nilai.
                                </li>
                                <li>Nilai tidak boleh lebih rendah dari 0, dan jika mencoba untuk mengurangi nilai menjadi negatif, aplikasi akan menampilkan pesan kesalahan menggunakan toast notification.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="font-semibold">Form Component</strong>
                            <ul className="list-decimal list-inside space-y-1">
                                <li>
                                    Terdiri dari input untuk <strong>Nama</strong>, <strong>Email</strong>, <strong>Password</strong>, dan <strong>Confirm Password</strong>.
                                </li>
                                <li>
                                    Terdapat validasi untuk memastikan:
                                    <ul className="list-disc list-inside space-y-1 ps-4">
                                        <li>
                                            <strong>Email</strong> yang dimasukkan adalah alamat email yang valid.
                                        </li>
                                        <li>
                                            <strong>Nama</strong> tidak boleh kosong.
                                        </li>
                                        <li>
                                            <strong>Password</strong> harus memiliki minimal 8 karakter.
                                        </li>
                                        <li>
                                            <strong>Confirm Password</strong> harus sama dengan <strong>Password</strong>.
                                        </li>
                                    </ul>
                                </li>
                                <li>Setelah validasi berhasil, data akan dikirim dan form akan mereset nilai-nilai input.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="font-semibold">API Integration Component</strong>
                            <ul className="list-decimal list-inside space-y-1">
                                <li>
                                    Mengambil data dari API endpoint <code className="bg-gray-200 p-1 rounded text-sm md:text-base">https://jsonplaceholder.typicode.com/todos/1</code>.
                                </li>
                                <li>
                                    Data yang ditampilkan meliputi <strong>ID</strong> dan <strong>Title</strong> dari todo item yang berhasil diambil.
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Responsif</h2>
                    <p className="text-gray-700">
                        Aplikasi ini telah dirancang untuk <strong className="font-semibold">responsif</strong>, sehingga dapat digunakan dengan baik di berbagai perangkat, baik desktop maupun mobile.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-2 pb-10 mt-6">
                    <p className="text-2xl font-semibold text-gray-800">Created By</p>
                    <p className="text-lg text-gray-700">Harold Leonardo Panjaitan</p>
                    <div className="flex space-x-6">
                        <a href="https://linkedin.com/in/panjaitanharold" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
                            <FaLinkedin className="text-3xl" />
                        </a>
                        <a href="https://roldleo.github.io" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-700 transition duration-300">
                            <FaGlobe className="text-3xl" />
                        </a>
                        <a href="mailto:haroldleopanja@gmail.com" className="text-yellow-500 hover:text-yellow-700 transition duration-300">
                            <FaEnvelope className="text-3xl" />
                        </a>
                        <a href="https://wa.me/6282385075340" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition duration-300">
                            <FaWhatsapp className="text-3xl" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
