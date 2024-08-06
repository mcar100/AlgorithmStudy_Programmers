const healthInfo = {
    health: 0,
    maxHealth: 0,
    attacked: function(damage){
        this.health=this.health-damage;
    },
    heal: function(health){
        this.health=this.health+health;
        if(this.health > this.maxHealth){
            this.health = this.maxHealth;
        }
    }
    ,
    getHealth: function(){
        return this.health;
    },
    setHealth: function(health){
        this.health = health;
        this.maxHealth = health;
    },
    isMaxHealth: function(){
        return this.health===this.maxHealth? true : false;
    }
}

function solution(bandage, health, attacks) {
    let maxTimer = attacks[attacks.length-1][0]; // 마지막 공격 시간
    let healTimer = 0; // 연속회복시간
    const attackCycle = attacks.map(ele=>ele[0]); // 공격 주기
    healthInfo.setHealth(health); // 체력 초기화

    for(let i=1; i<=maxTimer; i++){
        const idx = attackCycle.indexOf(i);
        if(idx!==-1){ // 공격을 받은 경우
            healthInfo.attacked(attacks[idx][1]); 
            if(healthInfo.getHealth()<=0){ // 연속 회복 성공 시
                return -1;
            }
            healTimer = 0;
        }
        else{ // 공격을 받지 않은 경우 => 회복
            healTimer++;
            if(healthInfo.isMaxHealth()){  // 최대체력이면 회복 x
                continue;
            }
            if(healTimer >= bandage[0]){  // 연속 회복 성공 시
                healthInfo.heal(bandage[1]+bandage[2]);
                healTimer = 0;
            }
            else{
                healthInfo.heal(bandage[1]);
            }
            
        }
    }

    return healthInfo.getHealth();
}