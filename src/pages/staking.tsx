/* eslint-disable @next/next/no-img-element */
function Staking() {
    return (
        <>
            <div className="ml-4 flex justify-between pb-3">
                <h4 className="text-[14px] text-black-100 pt-3 font-bold">Staking</h4>
            </div>
            <div className="ml-3 mr-3 mb-4 flex flex-col justify-center items-center pt-[115px]">
                <p className=" font-bold text-black-100 text-[20px]">You don&#39;t have any breadheads</p>
                <button className="mt-3 rounded-[8px] w-[300px] flex border-[1px] border-[#0000001A] justify-between items-center pt-2 pb-2">
                    <img className="w-[20px] h-[20px] ml-[7px]" src="/img/ME.png" alt="" />
                    <p className="font-medium text-black-100 text-[14px] mr-[80px]">Buy on Magic Eden</p>
                </button>
            </div>
        </>
    );
}

export default Staking;