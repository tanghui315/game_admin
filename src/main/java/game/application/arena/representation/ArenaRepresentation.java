package game.application.arena.representation;

import game.core.enums.ArenaType;

import java.util.Date;

/**
 * Created by pengyi
 * Date : 17-8-28.
 * desc:
 */
public class ArenaRepresentation {

    private String id;
    private Integer version;
    private Date createDate;

    private Integer gameType;              //游戏类型
    private ArenaType arenaType;            //竞技类型
    private String name;                    //竞技名
    private Integer count;                  //人数
    private Integer entryFee;               //报名费
    private Integer reward;                 //奖励

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

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
}
