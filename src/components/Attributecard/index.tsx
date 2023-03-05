import { Rainbow } from "../SvgIcons"
export default function Attributecard(props: { body: number, brave: number }) {
    return (
        <div className="m-[5px] flex flex-col w-[220px] bg-white-100 rounded-[8px] p-[14px]">
            <div className="flex justify-between">
                <p className="text-[12px] text-black-60">Body</p>
                <p className="text-[12px] text-[#008F5C] pt-[2px] pb-[2px] pl-1 pr-1 rounded-[6px] bg-[#008F5C1A] text-center">{props.body}%</p>
            </div>
            <div className="flex justify-between">
                <div className="text-[12px] text-black-100 font-bold">Brave</div>
                <div className="flex items-center">
                    <Rainbow />
                    <p className="text-[12px] text-black-100 text-center font-bold">&nbsp;{props.brave}</p>
                </div>
            </div>
        </div>

    )
}