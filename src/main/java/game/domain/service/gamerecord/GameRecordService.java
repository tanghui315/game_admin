package game.domain.service.gamerecord;

import game.application.gamerecord.command.CreateCommand;
import game.application.gamerecord.command.ListCommand;
import game.core.exception.NoFoundException;
import game.core.util.CoreDateUtils;
import game.domain.model.gamerecord.GameRecord;
import game.domain.model.gamerecord.IGameRecordRepository;
import game.domain.service.user.IUserService;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by pengyi
 * Date : 17-8-19.
 * desc:
 */
@Service("gameRecordService")
public class GameRecordService implements IGameRecordService {

    private final IGameRecordRepository<GameRecord, String> gameRecordRepository;
    private IUserService userService;

    @Autowired
    public GameRecordService(IGameRecordRepository<GameRecord, String> gameRecordRepository, IUserService userService) {
        this.gameRecordRepository = gameRecordRepository;
        this.userService = userService;
    }

    @Override
    public void create(CreateCommand command) {

        GameRecord gameRecord = new GameRecord(command.getGameType(), command.getRoomOwner(), command.getPeople()
                , command.getGameTotal(), command.getGameCount(), command.getPeopleCount(), command.getRoomNo(),
                gameRecordRepository.getSession().getLobHelper().createBlob(command.getGameData()),
                gameRecordRepository.getSession().getLobHelper().createBlob(command.getScoreData()), command.getGameRule());
        gameRecordRepository.save(gameRecord);

//        String[] users = command.getPeople().split(",");
//        for (String user : users) {
//            userService.addGameCount(Integer.parseInt(user));
//        }

    }

    @Override
    public List<GameRecord> list(ListCommand command) {

        List<Criterion> criterionList = new ArrayList<>();

        if (null != command.getGameType()) {
            criterionList.add(Restrictions.eq("gameType", command.getGameType()));
        } else {
            List<Integer> integers = new ArrayList<>();
            integers.add(0);
            integers.add(1);
            integers.add(2);
            integers.add(3);
            criterionList.add(Restrictions.in("gameType", integers));
        }
        if (0 != command.getUserId()) {
            criterionList.add(Restrictions.like("people", String.valueOf(command.getUserId()), MatchMode.ANYWHERE));
        }
        if (0 != command.getRoomNo()) {
            criterionList.add(Restrictions.eq("roomNo", command.getRoomNo()));
        }
        criterionList.add(Restrictions.ge("createDate", CoreDateUtils.addDay(new Date(), -3)));

        List<Order> orderList = new ArrayList<>();
        orderList.add(Order.desc("createDate"));
        return gameRecordRepository.list(criterionList, orderList, null, null, null, 10);
    }

    @Override
    public GameRecord info(String id) {
        GameRecord gameRecord = gameRecordRepository.getById(id);
        if (null == gameRecord) {
            throw new NoFoundException();
        }
        return gameRecord;
    }

}
