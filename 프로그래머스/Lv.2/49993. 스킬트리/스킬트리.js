function solution(skill, skill_trees) {
    
    function checkSkillTree(skill_tree){
        const skill_checkList = skill.split('').map(s=>[s,skill_tree.indexOf(s)]);
    
        let cur_order = skill_checkList[0][1];
        for(let j=1; j<skill_checkList.length; j++){
            const next_order = skill_checkList[j][1];
            if(cur_order>next_order&&next_order!==-1){
                return false;
            }
            if(cur_order===-1&&next_order!==-1){
                return false;
            }
            cur_order = next_order;
        }
        return true;
    }
    
    return skill_trees.filter(checkSkillTree).length;
}