package game.domain.model.integraldetailed;

import game.core.enums.FlowType;
import game.core.id.ConcurrencySafeEntity;
import game.domain.model.user.User;

import java.util.Date;

/**
 * Created by pengyi on 2016/3/9.
 */
public class IntegralDetailed extends ConcurrencySafeEntity {

    private User user;                  //用户
    private FlowType flowType;          //资金流向类型
    private int money;                  //金额
    private String description;         //说明（）
    private Integer oldMoney;              //原有金额
    private Integer newMoney;              //现有金额

    private void setUser(User user) {
        this.user = user;
    }

    private void setFlowType(FlowType flowType) {
        this.flowType = flowType;
    }

    public User getUser() {
        return user;
    }

    public FlowType getFlowType() {
        return flowType;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getOldMoney() {
        return oldMoney;
    }

    public void setOldMoney(Integer oldMoney) {
        this.oldMoney = oldMoney;
    }

    public Integer getNewMoney() {
        return newMoney;
    }

    public void setNewMoney(Integer newMoney) {
        this.newMoney = newMoney;
    }

    public IntegralDetailed() {
        super();
    }

    public IntegralDetailed(User user, FlowType flowType, int money, String description, Integer oldMoney, Integer newMoney) {
        this.user = user;
        this.flowType = flowType;
        this.money = money;
        this.description = description;
        this.oldMoney = oldMoney;
        this.newMoney = newMoney;
        this.setCreateDate(new Date());
    }
}
