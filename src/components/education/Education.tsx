import Card from "./Card";


interface EducationProps {

}

const Education: React.FC<EducationProps> = () => {
    return (
        <section className="bg-[#0c0c0c]  w-full pt-2 px-1 flex justify-center  " >
            <div className="w-full   max-w-3xl ">
                <div className="bg-[#0c0c0c] mt-10 ">
                    <h1 className="text-3xl text-[#EFAE02] font-bold py-3 text-center">Education</h1>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Card
                            date="2022 - 2024"
                            type="Post Graduation"
                            degreetype="Master&apos;s Degree"
                            branch="MCA"
                            branchFull="Masters of Computer Application"
                            university="Jabalpur Enginerring College"
                            location="Jabalpur, Madhya Pradesh, India"
                        />
                        <Card
                            date="2019 - 2021"
                            type="Graduation"
                            degreetype="Bachelor&apos;s Degree"
                            branch="BA"
                            branchFull="Bachelor of Arts"
                            university="Vikram University"
                            location="Ujjain, Madhya Pradesh, India"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;