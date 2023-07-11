
const ContactForm = ({property}) => {
    const {cap,cap2, type} = property
    console.log(cap, type)
    return (
        <>
            {cap2 && <h2 className="text-start text-[1.5rem] md:text-[2rem] font-bold my-6">{cap2}</h2>}
            <div className='rounded drop-shadow-lg border p-0 m-0'>
                {cap && <p className='p-3 mt-0 bg-[#f1f1f2] rounded-t-lg'>{cap}</p>}
                <form className='p-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {type.name && <input type="text" placeholder={type.name} required />}
                        {type.country && <input type="text" placeholder={type.country} required />}
                        {type.email && <input type="text" placeholder={type.email} required />}
                        {type.company && <input type="text" placeholder={type.company} />}
                        {type.telephone && <input type="text" placeholder={type.telephone} />}
                        {type.indus && <input type="text" placeholder={type.indus} />}
                        {type.address && <input type="text" placeholder={type.address} />}
                        {type.post && <input type="text" placeholder={type.post} />}
                        {type.fax && <input type="text" placeholder={type.fax} />}
                        {type.prod && <input type="text" placeholder={type.prod} />}
                        {type.annReq && <input type="text" placeholder={type.annReq} />}
                        
                    </div>
                    {type.product && <input type="text" placeholder='Products you want:' />}
                    {type.textArea && <textarea name="" id="" placeholder={type.textArea}></textarea>}
                    {/* <input type="text" placeholder='Code' className='code'/> */}
                    <div className='flex gap-x-5 justify-center items-center'>
                        <button className='bg-red-600 py-2 px-6 rounded-2xl'>Submit</button>
                        <button className='bg-gray-600 py-2 px-6 rounded-2xl'>Refill</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ContactForm;