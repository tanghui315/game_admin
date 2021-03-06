package game.domain.model.arena;

import game.core.enums.ArenaType;
import game.core.id.ConcurrencySafeEntity;

/**
 * Created by pengyi
 * Date : 17-8-28.
 * desc:
 */
public class Arena extends ConcurrencySafeEntity {

    private Integer gameType;              //游戏类型//1.兴宁麻将 2.瑞金麻将 3.跑得快 4.三公 5.松江河
    private ArenaType arenaType;            //竞技类型
    private String name;                    //竞技名
    private Integer count;                  //人数
    private Integer entryFee;               //报名费
    private Integer reward;                 //奖励
    private Boolean status;                 //状态 true为启用

    public Integer getGameType() {
        return gameType;
    }

    public void setGameType(Integer gameType) {
        this.gameType = gameType;
    }

    public ArenaType getArenaType() {
        return arenaType;
    }

    public void setArenaType(ArenaType arenaType) {
        this.arenaType = arenaType;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Integer getEntryFee() {
        return entryFee;
    }

    public void setEntryFee(Integer entryFee) {
        this.entryFee = entryFee;
    }

    public Integer getReward() {
        return reward;
    }

    public void setReward(Integer reward) {
        this.reward = reward;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
