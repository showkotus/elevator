import { useState } from 'react';
import './ShowProjects.css'
// eslint-disable-next-line react/prop-types
const ShowProjects = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { projects, title } = data
    const [page, setPage] = useState(0)
    // const [currentPage, setCurrentPage] = useState(1)
    // eslint-disable-next-line react/prop-types
    const pages = Math.ceil(projects.length / 10)
    let lastpage = page * 10 + 10
    // eslint-disable-next-line react/prop-types
    if (lastpage >= projects.length) {
        // eslint-disable-next-line react/prop-types
        lastpage = projects.length
    }
    // if(lastpage >= products.length){
    //     lastpage = products.length
    // }
    const getNextNum = () =>{
        if(page >=(pages - 1)){
            setPage(pages - 1)
        }
        else{
            setPage(page + 1)
        }
    }
    const getPrevNum = () =>{
        if(page <= 0){
            setPage(0)
        }
        else{
            setPage(page - 1)
        }
    }
    return (
        <div>
            <h3 className="text-center font-bold text-2xl mb-4 mt-2 text-red-500 my-8">{title}</h3>
            <div className='my-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className='bg-[#1c3c6b] text-white'>
                                <th className='text-xl md:text-2xl text-center'>CLIENT</th>
                                <th className='text-xl md:text-2xl text-center'>NO. OF <br /> ELEVATOR/ <br />ESCALATOR</th>
                                <th className='text-xl md:text-2xl text-center'>CAPACITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projects &&
                                // eslint-disable-next-line react/prop-types
                                projects.slice(page * 10, page * 10 + 10).map((project, index) => <tr key={index} className='text-center hover'>
                                    <td className={`text-lg md:text-xl py-2 md:py-8 ${index % 2 == 0 ? "bg-[#8fc0e1]":""}`}>{project.name}</td>
                                    <td className='text-lg md:text-xl py-2 md:py-8 bg-[#8fc0e1]'>{project.number}</td>
                                    <td className={`text-lg md:text-xl py-2 md:py-8 ${index % 2 == 0 ? "bg-[#8fc0e1]":""}`}>{project.capacity}</td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                <div className='flex items-center justify-center my-4'>
                    <button className='uppercase bg-red-500 text-white hover:bg-black px-4 py-2 rounded-lg' onClick={() => getPrevNum()}>PREV</button>
                    <p className='font-bold text-gray-600 mx-4'>{page + 1} of {pages}</p>
                    <button className='uppercase bg-red-500 text-white hover:bg-black px-4 py-2 rounded-lg' onClick={() => getNextNum()}>NEXT</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProjects;