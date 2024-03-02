
export default function CreateCookieStandForm(props) {

    function onSubmit(event) {
        event.preventDefault();
        props.onCreate({
            location: event.target.location.value,
            minCustomers: parseInt(event.target.minCustomers.value),
            maxCustomers: parseInt(event.target.maxCustomers.value),
            aveCookies: parseInt(event.target.aveCookies.value),
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],            
        });
        event.target.reset();
    }



return (
    <form onSubmit={onSubmit} className=" flex flex-col w-3/4 gap-2 p-8 mx-auto my-4 bg-green-300 rounded-lg">
        <legend className="text-4xl justify-center text-center p-6">Create Cookie Stand</legend>

        <div className='flex py-4'>
            <label className="text-2xl">Location</label>
            <input name="location" type="text" className=" flex-auto pl-2" />
        </div>

        <div className='flex gap-2 text-center '>

            <div className='flex flex-col flex-1 min-w-0 p-2'>
                <label className="text-2xl">Minimum Customers per Hour</label>
                <input name="minCustomers" type="number" className="flex flex-col flex-1 gap-2 min-w-0 p-2" />
            </div>

            <div className='flex flex-col flex-1 min-w-0 p-2'>
                <label className="text-2xl">Maximum Customers per Hour</label>
                <input name="maxCustomers" type="number" className="" />
            </div>

            <div className='flex flex-col flex-1 min-w-0 p-2'>
                <label className="text-2xl">Average Cookies per Sale</label>
                <input name="aveCookies" type="number" className="" />
            </div>

            <button type="submit" className="bg-green-500 hover:bg-green-650 transition-colors text-3xl py-10 px-12">Create</button>

        </div>

    </form>
);
}