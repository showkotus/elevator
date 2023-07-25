import './ShowProjects.css'
// eslint-disable-next-line react/prop-types
const ShowProjects = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { projects, title } = data
    return (
        <div>
            <h3 className="text-center font-bold text-2xl mb-4 mt-2 text-red-500 my-8">{title}</h3>
            <div className='my-12'>
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
                                projects.map((project, index) => <tr key={index} className='text-center hover'>
                                    <td className={`text-lg md:text-xl py-2 md:py-8 ${index % 2 == 0 ? "bg-[#8fc0e1]":""}`}>{project.name}</td>
                                    <td className='text-lg md:text-xl py-2 md:py-8 bg-[#8fc0e1]'>{project.number}</td>
                                    <td className={`text-lg md:text-xl py-2 md:py-8 ${index % 2 == 0 ? "bg-[#8fc0e1]":""}`}>{project.capacity}</td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShowProjects;