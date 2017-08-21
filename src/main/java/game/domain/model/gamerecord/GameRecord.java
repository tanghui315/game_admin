package game.domain.model.gamerecord;

import game.core.enums.GameType;
import game.core.id.ConcurrencySafeEntity;

import java.sql.Blob;
import java.util.Date;

/**
 * Created by pengyi
 * Date : 17-8-19.
 * desc:
 */
public class GameRecord extends ConcurrencySafeEntity {

    private GameType gameType;
    private Integer roomOwner;
    private Integer[] people;
    private Integer gameTotal;
    private Integer gameCount;
    private Integer peopleCount;
    private Integer roomNo;
    private Blob gameData;

    public GameType getGameType() {
        return gameType;
    }

    public void setGameType(GameType gameType) {
        this.gameType = gameType;
    }

    public Integer getRoomOwner() {
        return roomOwner;
    }

    public void setRoomOwner(Integer roomOwner) {
        this.roomOwner = roomOwner;
    }

    public Integer[] getPeople() {
        return people;
    }

    public void setPeople(Integer[] people) {
        this.people = people;
    }

    public Integer getGameTotal() {
        return gameTotal;
    }

    public void setGameTotal(Integer gameTotal) {
        this.gameTotal = gameTotal;
    }

    public Integer getGameCount() {
        return gameCount;
    }

    public void setGameCount(Integer gameCount) {
        this.gameCount = gameCount;
    }

    public Integer getPeopleCount() {
        return peopleCount;
    }

    public void setPeopleCount(Integer peopleCount) {
        this.peopleCount = peopleCount;
    }

    public Integer getRoomNo() {
        return roomNo;
    }

    public void setRoomNo(Integer roomNo) {
        this.roomNo = roomNo;
    }

    public Blob getGameData() {
        return gameData;
    }

    public void setGameData(Blob gameData) {
        this.gameData = gameData;
    }

    public GameRecord() {
    }

    public GameRecord(GameType gameType, Integer roomOwner, Integer[] people, Integer gameTotal, Integer gameCount, Integer peopleCount, Integer roomNo, Blob gameData) {
        setCreateDate(new Date());
        this.gameType = gameType;
        this.roomOwner = roomOwner;
        this.people = people;
        this.gameTotal = gameTotal;
        this.gameCount = gameCount;
        this.peopleCount = peopleCount;
        this.roomNo = roomNo;
        this.gameData = gameData;
    }
}