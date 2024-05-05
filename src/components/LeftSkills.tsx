import SkillBox from "./SkillBox";


interface LeftSkillsProps {
}

const LeftSkills: React.FC<LeftSkillsProps> = ({ }) => {
    return (
        <div className={`absolute  top-4 flex flex-col gap-7 w-full -left-[120px]`}>

            <SkillBox logo="js_logo" title="JavaScript" side="left" index={0} />
            <SkillBox logo="react_logo" title="ReactJs" side="left" index={1} />
            <SkillBox logo="tailwind_logo" side="left" index={2} title="Tailwind"/>
            <SkillBox logo="express_logo" side="left" title="ExpressJs" index={3} />


        </div>
    );
}

export default LeftSkills;