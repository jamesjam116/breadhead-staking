import Tableline from "../components/Tableline";
export default function Leaderboard() {
    return (
        <>
            <section className="mx-3 flex justify-between flex-col w-[full] mb-6 rounded-[10px] ">
                <h4 className="pt-3 pb-2 text-[14px] text-black-100 font-bold">Leaderboard</h4>
                <div className="mt-2 overflow-y-auto max-h-[516px] rounded-[10px]">
                    <table className="table-fixed w-full bg-white-100  rounded-[10px]">
                        <thead className="">
                            <tr>
                                <th className="text-black-60 text-[12px] leading-5 font-medium uppercase pt-2.5 pb-2.5">name</th>
                                <th className="text-black-60 text-[12px] leading-5 font-medium uppercase pt-2.5 pb-2.5">item number</th>
                                <th className="text-black-60 text-[12px] leading-5 font-medium uppercase pt-2.5 pb-2.5">time staked</th>
                                <th className="text-black-60 text-[12px] leading-5 font-medium uppercase pt-2.5 pb-2.5">xp gained</th>
                                <th className="text-black-60 text-[12px] leading-5 font-medium uppercase pt-2.5 pb-2.5">multiplier</th>
                            </tr>
                        </thead>
                        <tbody className="text-black-100 text-14px font-medium">
                            <Tableline rank={1} point={1}></Tableline>
                            <Tableline rank={1} point={2}></Tableline>
                            <Tableline rank={2} point={3}></Tableline>
                            <Tableline rank={2} point={4}></Tableline>
                            <Tableline rank={3} point={5}></Tableline>
                            <Tableline rank={3} point={6}></Tableline>
                            <Tableline rank={3} point={7}></Tableline>
                            <Tableline rank={3} point={8}></Tableline>
                            <Tableline rank={3} point={9}></Tableline>
                            <Tableline rank={1} point={1}></Tableline>
                            <Tableline rank={1} point={2}></Tableline>
                            <Tableline rank={2} point={3}></Tableline>
                            <Tableline rank={2} point={4}></Tableline>
                            <Tableline rank={3} point={5}></Tableline>
                            <Tableline rank={3} point={6}></Tableline>
                            <Tableline rank={3} point={7}></Tableline>
                            <Tableline rank={3} point={8}></Tableline>
                            <Tableline rank={3} point={9}></Tableline>
                            <Tableline rank={1} point={1}></Tableline>
                            <Tableline rank={1} point={2}></Tableline>
                            <Tableline rank={2} point={3}></Tableline>
                            <Tableline rank={2} point={4}></Tableline>
                            <Tableline rank={3} point={5}></Tableline>
                            <Tableline rank={3} point={6}></Tableline>
                            <Tableline rank={3} point={7}></Tableline>
                            <Tableline rank={3} point={8}></Tableline>
                            <Tableline rank={3} point={9}></Tableline>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}
