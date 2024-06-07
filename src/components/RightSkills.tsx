import SkillBox from "./SkillBox";


interface RightSkillsProps {
}

const RightSkills: React.FC<RightSkillsProps> = ({}) => {
    return (
        <div className={`absolute  top-4 flex flex-col gap-7 w-full right-[10px]   sm:-right-[110px]`}>
            
                    <SkillBox side="right" index={0} logo="ts_logo" title="TypeScript"/>
                    <SkillBox side="right" index={1} logo="next_logo" title="NextJs"/>
                    <SkillBox side="right" index={2} logo="nodejs_logo" title="NodeJs"/>
                    <SkillBox side="right" index={0} logo="mongodb_logo" title="MongoDB"/>
                
        </div>
    );
}

export default RightSkills;