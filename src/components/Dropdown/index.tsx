export default function Dropdown(props: { name: string, pr: number }) {
    return (
        <a href="#" className=' pt-1 pl-[3px] pb-[5px] '><span className={`hover:bg-[#D9D9D9] pt-[4px] pl-[10px] pr-[90px] pb-[6px] text-[#686969] rounded-[4px]`}>{props.name}</span></a>
    )
}