const Contact = () => {
    return (
        <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-up" className="text-[52px] text-center font-semibold mb-15 leading-normal uppercase text-red-500">Contact with Me!</h1>

            <form 
                action=""
                data-aos="fade-up"
                className="flex flex-col gap-2 lg:w-1/2"
            >
                <div className="lg:flex gap-9">
                    <input 
                        type="text" 
                        placeholder="Enter Your Name" 
                        className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-red-800 b_glow text-xl text-slate-500"
                    />
                    <input 
                        type="email" 
                        placeholder="Enter Your E-mail" 
                        className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-red-800 b_glow text-xl text-slate-500"
                    />
                </div>

                <textarea 
                    name="" 
                    id="" 
                    cols={20} rows={10} 
                    placeholder="Write Your Message..." 
                    className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-red-800 b_glow text-xl text-slate-500"
                ></textarea>

                <button 
                    type="submit"
                    className="neno-button shadow-xl hover:shadow-red-800/50 text-white border-2 border-red-800 bg-red-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl font-bold mb-10"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;