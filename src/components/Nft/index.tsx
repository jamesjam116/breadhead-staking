/* eslint-disable @next/next/no-img-element */
export default function Nft(props: { imgUrl: string, name: string }) {
    return (
        <div className="">
            <img className="w-[130px] h-[136px] rounded-t-[8px]" src={props.imgUrl} alt="" />
            <p className=" text-black-100 bg-white-100 font-bold text-center p-2 rounded-b-[8px]">{props.name}</p>
        </div>
    )
}