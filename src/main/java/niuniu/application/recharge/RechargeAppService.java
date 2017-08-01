package niuniu.application.recharge;

import niuniu.application.recharge.command.CreateRechargeCommand;
import niuniu.application.recharge.command.ListRechargeCommand;
import niuniu.application.recharge.representation.ApiRechargeRepresentation;
import niuniu.application.recharge.representation.RechargeRepresentation;
import niuniu.core.mapping.IMappingService;
import niuniu.domain.model.recharge.Recharge;
import niuniu.domain.service.recharge.IRechargeService;
import niuniu.infrastructure.persistence.hibernate.generic.Pagination;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by pengyi
 * Date : 16-7-11.
 */
@Service("rechargeAppService")
@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
public class RechargeAppService implements IRechargeAppService {

    private final IRechargeService rechargeService;

    private final IMappingService mappingService;

    @Autowired
    public RechargeAppService(IMappingService mappingService, IRechargeService rechargeService) {
        this.mappingService = mappingService;
        this.rechargeService = rechargeService;
    }

    @Override
    public Pagination<RechargeRepresentation> pagination(ListRechargeCommand command) {
        command.verifyPage();
        command.verifyPageSize(25);
        Pagination<Recharge> pagination = rechargeService.pagination(command);
        List<RechargeRepresentation> data = mappingService.mapAsList(pagination.getData(), RechargeRepresentation.class);
        return new Pagination<>(data, pagination.getCount(), pagination.getPage(), pagination.getPageSize());
    }

    @Override
    public Pagination<RechargeRepresentation> paginationEq(ListRechargeCommand command) {
        command.verifyPage();
        command.verifyPageSize(25);
        Pagination<Recharge> pagination = rechargeService.paginationEq(command);
        List<RechargeRepresentation> data = mappingService.mapAsList(pagination.getData(), RechargeRepresentation.class);
        return new Pagination<>(data, pagination.getCount(), pagination.getPage(), pagination.getPageSize());
    }

    @Override
    public List<ApiRechargeRepresentation> list(ListRechargeCommand command) {
        return mappingService.mapAsList(rechargeService.list(command), ApiRechargeRepresentation.class);
    }

    @Override
    @Transactional(readOnly = true)
    public BigDecimal totalMoney(ListRechargeCommand command) {
        return rechargeService.totalMoney(command);
    }

    @Override
    @Transactional(readOnly = true)
    public BigDecimal totalMoneyEq(ListRechargeCommand command) {
        return rechargeService.totalMoneyEq(command);
    }

    @Override
    public Recharge pay(CreateRechargeCommand command) {
        return rechargeService.pay(command);
    }
}
