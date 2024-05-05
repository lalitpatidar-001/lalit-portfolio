import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import garaduationCapSvg from "@/assets/graduation-cap.svg"
import Image from 'next/image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';

interface CardProps {
    date: string,
    type: string,
    degreetype: string,
    branch: string,
    branchFull: string,
    university: string,
    location: string,
}

const Card: React.FC<CardProps> = ({
    date,
    type,
    degreetype,
    branch,
    branchFull,
    university,
    location
}) => {
    return (
        <div className="bg-[#F5F5F5] flex flex-col gap-2 p-2  flex-1 rounded-2xl">
            <div className="flex justify-between items-center">
                <div className="bg-[#0C0C0C] text-[#EFAE02] p-1 px-2 rounded-2xl text-sm font-semibold flex gap-1 items-center"><CalendarMonthIcon style={{ fontSize: 16 }} /><span>{date}</span> </div>

                <div className="bg-[#FCEFCC] text-black font-semibold p-1 px-2 rounded-2xl text-sm flex items-center gap-1 ">
                    <Image src={garaduationCapSvg} className='h-5 w-5' alt='graduation-cap-svg' /><span>{type}</span></div>

            </div>

            <div className="flex gap-2">
                <span className="bg-[#E7E7E7] p-1 px-2 rounded-2xl font-semibold text-sm">{degreetype}</span>
                <span className="bg-[#E7E7E7] p-1 px-2 rounded-2xl font-semibold text-sm">{branch}</span>
            </div>

            <h1 className="font-bold">{branchFull}</h1>

            <div className="flex flex-col gap-1">
                <div className="flex gap-1 text-sm">
                <div className='bg-[#eee6cf] rounded-full h-5 w-5 flex items-center justify-center'>
                    <LocationCityIcon
                        style={{ fontSize: 16, color: "#EFAE02" }}
                    />
                </div>
                    <span >{university}</span>
                </div>
                <div className="flex text-sm items-center gap-1">
                    <div className='bg-[#eee6cf] rounded-full h-5 w-5 flex items-center justify-center'>
                        <LocationOnIcon style={{ fontSize: 16, color: "#EFAE02" }} />
                    </div>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;