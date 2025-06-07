import client1 from '../../assets/images/companies/client-1.png';
import client2 from '../../assets/images/companies/client-2.png';
import client3 from '../../assets/images/companies/client-3.png';
import client4 from '../../assets/images/companies/client-4.png';
import client5 from '../../assets/images/companies/client-5.png';
import client6 from '../../assets/images/companies/client-6.png';
const arr = [client1, client2, client3, client4, client5, client6];
function Companies() {
    return (
        <>
            <section className=" bg-gray-50">
                <article className='container-style flex flex-wrap'>
                    {
                        arr.map((item, index) => (
                            <div key={index} className='w-1/2 md:w-1/6 p-5'>
                                <img className='p-5 filter grayscale contrast-0 hover:filter-none duration-300' src={item} alt="client" />
                            </div>
                        ))
                    }
                </article>
            </section>
        </>
    );
}

export default Companies