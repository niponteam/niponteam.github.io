export default function SkillBar({ skillName, level, maxLevel = 10 }) {
    const rawPercentage = (level / maxLevel) * 100;
    const percentage = Math.min(100, Math.max(0, rawPercentage));

    return (
        <div className="skill-bar">
            <div className="skill-bar__name">
                {skillName}
            </div>
            <div className="skill-bar__progress">
                <div 
                    className="skill-bar__progress-fill" 
                    style={{ width: `${percentage}%`, background: "#000", height: "8px"}}
                />
            </div>
            <div className="skill-bar__level">
                {level}/{maxLevel} LV
            </div>
        </div>
    );
}
