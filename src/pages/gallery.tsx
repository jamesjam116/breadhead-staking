import Nft from '../components/Nft';
import { Galleryic } from "../components/SvgIcons";
import { LeftArrow } from "../components/SvgIcons";
import Dropdown from '../components/Dropdown';
import { DownArrow } from "../components/SvgIcons";
function Gallery() {
    return (
        <div className='bg-white-60 rounded-[10px]'>
            <section className="mx-3 flex justify-between flex-col w-[full] mb-6 rounded-[10px] ">
                <div className="flex justify-between">
                    <h4 className="text-[14px] text-black-100 pt-3 font-bold">Gallery</h4>
                    <div className="flex items-center mt-2 mr-7 justify-center">
                        <p className="text-[12px] text-[#00000040] font-semibold pt-[5px] pb-[7px] pr-[6px]">
                            <span>Filter by:</span>

                        </p>
                        <button className=" group relative w-[71px] text-[12px] flex border-[1px] rounded-[6px] border-[#0000001A] text-neutral-8 font-semibold pt-[5px] pl-[10px] pb-[5px] pr-[5px]">Rank&nbsp;
                            <DownArrow />
                            <div className=' shadow-drop-shadow shadow-[#00000040] group-hover:flex rounded-[6px] hidden absolute top-[30px] right-[0px] flex-col w-full bg-[#F2F2F3] text-[13px] text-[#F2F2F3]'>
                                <a href="#" className=' pt-1 pl-[3px] pb-[5px] '><span className='hover:bg-[#D9D9D9] pt-[4px] pl-[10px] pr-[10px] pb-[6px] text-[#686969] rounded-[4px]'>option</span></a>
                                <a href="#" className=' pt-1 pl-[3px] pb-[5px] '><span className='hover:bg-[#D9D9D9] pt-[4px] pl-[10px] pr-[10px] pb-[6px] text-[#686969] rounded-[4px]'>option</span></a>
                                <a href="#" className=' pt-1 pl-[3px] pb-[5px] '><span className='hover:bg-[#D9D9D9] pt-[4px] pl-[10px] pr-[10px] pb-[6px] text-[#686969] rounded-[4px]'>option</span></a>
                                <a href="#" className=' pt-1 pl-[3px] pb-[5px] '><span className='hover:bg-[#D9D9D9] pt-[4px] pl-[10px] pr-[10px] pb-[6px] text-[#686969] rounded-[4px]'>option</span></a>
                                <a href="#" className=' pt-1 pl-[3px] pb-[5px] '><span className='hover:bg-[#D9D9D9] pt-[4px] pl-[10px] pr-[10px] pb-[6px] text-[#686969] rounded-[4px]'>option</span></a>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="mt-2 overflow-y-auto max-h-[516px] rounded-[10px]">


                    <section className="justify-between flex flex-col w-full bg-white-60 rounded-[10px]">
                        <div className="mb-4 flex flex-col justify-center items-center">
                            <div className="w-full mb-4 flex">
                                <nav className="w-[152px]">
                                    <div className="bg-white-100 rounded-[6px] h-[250px]">
                                        <p className=" pt-3 pb-3 border-b-[1px] pr-4 border-[#0000001A] flex justify-between pl-3">
                                            <Galleryic />
                                            <LeftArrow />
                                        </p>
                                        <div className="flex justify-between items-center pt-7 pb-3">
                                            <p className=" text-black-100 text-[13px] font-bold pl-3 ">Show 1/1s only</p>
                                            <input type={'checkbox'} className=" w-[14px] h-[14px] border-[1px] border-[rgba(0,0,0,0.2)] mr-3 rounded-[4px]"></input>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 pb-2">
                                            <p className=" text-black-100 text-[13px] font-bold pl-3 ">Always visible</p>
                                            <input type={'checkbox'} className=" w-[14px] h-[14px] border-[1px] border-[rgba(0,0,0,0.2)] mr-3 rounded-[4px]"></input>
                                        </div>
                                        <div className="flex justify-between items-center pt-8 pb-2">
                                            <p className=" text-black-60 text-[13px] font-bold pl-3 ">Attributes filter</p>
                                        </div>
                                        <div className=" group relative flex justify-between items-center pt-2 pb-2 pr-3  rounded-[6px] ml-[10px] mr-[10px] bg-[#F1F2F3]">
                                            <p className=" text-black-60 text-[13px] pl-3">Speciality</p>
                                            <DownArrow />

                                            <div className=' shadow-drop-shadow shadow-[#00000040] group-hover:flex rounded-[6px] hidden absolute top-[30px] right-[0px] flex-col w-full bg-[#F2F2F3] text-[13px] text-[#F2F2F3]'>
                                                <Dropdown name='qwe' pr={90} />
                                                <Dropdown name='qwe' pr={90} />
                                                <Dropdown name='qwe' pr={90} />
                                                <Dropdown name='qwe' pr={90} />
                                                <Dropdown name='qwe' pr={90} />
                                            </div>

                                        </div>
                                    </div>
                                </nav>
                                <main className="ml-4 w-4/5 gap-2 grid grid-cols-4 place-items-start">
                                    <Nft imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/592.png" name="#435"></Nft>
                                    <Nft imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/869.png" name="#435"></Nft>
                                    <Nft imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/1176.png" name="#435"></Nft>
                                    <Nft imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/2733.png" name="#435"></Nft>
                                    <Nft imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/1185.png" name="#435"></Nft>
                                    <Nft imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/1941.png" name="#435"></Nft>
                                    <Nft imgUrl="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://nftstorage.link/ipfs/bafybeicue33bcjgcu6mksfy4i5ova3igaw6va3qhvhau6w7kfazl2cif2q/773.png" name="#435"></Nft>
                                </main>
                            </div>
                        </div>
                    </section>



                </div>
            </section>
        </div>
    );
}

export default Gallery;