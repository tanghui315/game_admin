package niuniu.application.recharge;

import niuniu.application.recharge.command.CreateRechargeGiveCommand;
import niuniu.core.common.BasicPaginationCommand;
import niuniu.domain.model.recharge.RechargeGive;
import niuniu.domain.service.recharge.IRechargeGiveService;
import niuniu.infrastructure.persistence.hibernate.generic.Pagination;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by pengyi
 * Date : 16-7-9.
 */
@Service("rechargeGiveAppService")
@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
public class RechargeGiveAppService implements IRechargeGiveAppService {

    private final IRechargeGiveService rechargeGiveService;

    @Autowired
    public RechargeGiveAppService(IRechargeGiveService rechargeGiveService) {
        this.rechargeGiveService = rechargeGiveService;
    }

    @Override
    public Pagination<RechargeGive> pagination(BasicPaginationCommand command) {
        command.verifyPage();
        command.verifyPageSize(25);
        return rechargeGiveService.pagination(command);
    }

    @Override
    public void create(CreateRechargeGiveCommand command) {
        rechargeGiveService.create(command);
    }

    @Override
    public void delete(String id) {
        rechargeGiveService.delete(id);
    }
}
