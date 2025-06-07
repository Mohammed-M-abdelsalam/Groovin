import CountUp from 'react-countup';

const arr = [
    {number: '230', text: 'Happy Clients'},
    {number: '521', text: 'Projects Completed'},
    {number: '1450', text: 'Hours Of Support'},
    {number: '32', text: 'Hard Workers'},
]
function InformationSection(){
    return(
        <>
            <section className="container-style py-10">
                <article className="flex flex-wrap">
                    {
                        arr.map((item, index) => (
                            <div key={index} className="w-1/1 sm:w-1/2 md:w-1/4 p-5">
                                <div className="mx-auto w-fit">
                                    <h2 className="text-5xl font-bold">
                                        <CountUp end={item.number} duration={0.8} separator="," enableScrollSpy scrollSpyOnce />
                                    </h2>
                                    <p className="text-sm font-semibold text-gray-500">{item.text}</p>
                                </div>
                            </div>
                        ))
                    }
                </article>
            </section>
        </>
    )
}

export default InformationSection