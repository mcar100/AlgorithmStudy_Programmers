function checkSkillTree(skill,skill_tree){
    const skill_checkList = skill.split('').map(s=>[s,-1]);
    
    skill_checkList.forEach(skill=>{
        skill[1] = skill_tree.indexOf(skill[0]);
    });
    
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

function solution(skill, skill_trees) {
    let answer = 0;
    for(let i=0; i<skill_trees.length; i++){
        const isCorrect = checkSkillTree(skill, skill_trees[i]);
        if(isCorrect){
            answer++;
        }
    }
    return answer;
}