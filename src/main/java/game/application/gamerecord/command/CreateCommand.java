package game.application.gamerecord.command;

/**
 * Created by pengyi
 * Date : 17-8-21.
 * desc:
 */
public class CreateCommand {

    private Integer gameType;
    private Integer roomOwner;
    private String people;
    private Integer gameTotal;
    private Integer gameCount;
    private Integer peopleCount;
    private Integer roomNo;
    private byte[] gameData;
    private byte[] scoreData;
    private String gameRule;

    public Integer getGameType() {
        return gameType;
    }

    public void setGameType(Integer gameType) {
        this.gameType = gameType;
    }

    public Integer getRoomOwner() {
        return roomOwner;
    }

    public void setRoomOwner(Integer roomOwner) {
        this.roomOwner = roomOwner;
    }

    public String getPeople() {
        return people;
    }

    public void setPeople(String people) {
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

    public byte[] getGameData() {
        return gameData;
    }

    public void setGameData(byte[] gameData) {
        this.gameData = gameData;
    }

    public byte[] getScoreData() {
        return scoreData;
    }

    public void setScoreData(byte[] scoreData) {
        this.scoreData = scoreData;
    }

    public String getGameRule() {
        return gameRule;
    }

    public void setGameRule(String gameRule) {
        this.gameRule = gameRule;
    }
}
