import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Image from 'next/image';
import avatar from "@/assets/img-avatar.jpeg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

interface CardProps {
    companyDetails: {
        name: string,
        worktype: string,
        duration: string,
        designation: string
    },
    workDetails: string[]
}

const Card: React.FC<CardProps> = ({ companyDetails, workDetails }) => {
    return (
        <div className="flex flex-col gap-2 bg-[#F5F5F5]
        rounded-2xl p-2 w-full
        ">
            <div className='flex flex-col gap-2 w-full'>
                {/* detail */}
                <div className='flex justify-between'>
                    {/* company details */}
                    <div className='flex'>
                        <div className='flex flex-col bg-[#0c0c0c] p-1 px-2 rounded-2xl'>
                            {/* TODO  add company logo */}
                            <h1 className='text-[#EFAE02] font-semibold'>{companyDetails.name}</h1>
                            <div className='text-sm flex items-center font-semibold'>
                                <LocationOnIcon style={{ color: "#EFAE02", fontSize: 14 }} />
                                <span className='text-white'>{companyDetails.worktype}</span>
                            </div>
                        </div>
                    </div>
                    {/* time duration */}
                    <div className='flex gap-1 bg-[#FCEFCC]
                    rounded-2xl h-8  px-2 items-center'>
                        <CalendarMonthIcon
                            style={{ fontSize: 14 }} />
                        <span className='text-sm font-semibold'>{companyDetails.duration}</span>
                    </div>
                </div>

                {/* designation */}
                <div className="font-bold text-2xl flex items-center gap-2">
                    <Image src={avatar} alt="avatar" className="h-[40px]  w-[40px] rounded-full" />
                    <h1>{companyDetails.designation}</h1>
                </div>

                {/* work detail */}

                <div className='flex flex-col gap-1 w-full'>
                    {
                        workDetails.map((desc,index) => (
                            <div className="flex" key={index}>
                                <KeyboardDoubleArrowRightOutlinedIcon style={{ color: "#767676" }} />
                                <p>{desc}</p>
                            </div>
                        ))
                    }


                </div>


            </div>
        </div>);
}

export default Card;