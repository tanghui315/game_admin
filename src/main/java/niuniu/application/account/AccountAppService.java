package niuniu.application.account;

import niuniu.application.account.command.AuthorizeAccountCommand;
import niuniu.application.account.command.ListAccountCommand;
import niuniu.application.account.command.ResetPasswordCommand;
import niuniu.application.account.representation.AccountRepresentation;
import niuniu.application.auth.command.LoginCommand;
import niuniu.application.shared.command.SharedCommand;
import niuniu.core.mapping.IMappingService;
import niuniu.domain.model.account.Account;
import niuniu.domain.service.account.IAccountService;
import niuniu.infrastructure.persistence.hibernate.generic.Pagination;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by pengyi on 2016/3/30.
 */
@Service("accountAppService")
@Transactional(propagation = Propagation.REQUIRED, readOnly = false, rollbackFor = Exception.class)
public class AccountAppService implements IAccountAppService {

    @Autowired
    private IAccountService accountService;

    @Autowired
    private IMappingService mappingService;

    @Override
    @Transactional(readOnly = true)
    public Pagination<AccountRepresentation> pagination(ListAccountCommand command) {
        command.verifyPage();
        command.verifyPageSize(25);
        Pagination<Account> pagination = accountService.pagination(command);
        List<AccountRepresentation> data = mappingService.mapAsList(pagination.getData(), AccountRepresentation.class);
        return new Pagination<>(data, pagination.getCount(), pagination.getPage(), pagination.getPageSize());
    }

    @Override
    @Transactional(readOnly = true)
    public List<AccountRepresentation> list(ListAccountCommand command) {
        return mappingService.mapAsList(accountService.list(command), AccountRepresentation.class);
    }

    @Override
    @Transactional(readOnly = true)
    public AccountRepresentation searchByID(String id) {
        return mappingService.map(accountService.searchByID(id), AccountRepresentation.class, false);
    }

    @Override
    @Transactional(readOnly = true)
    public AccountRepresentation searchByAccountName(String userName) {
        Account account = accountService.searchByAccountName(userName);
        return account != null ? mappingService.map(account, AccountRepresentation.class, false) : null;
    }

    @Override
    public void updateStatus(SharedCommand command) {
        accountService.updateStatus(command);
    }

    @Override
    public void resetPassword(ResetPasswordCommand command) {
        accountService.resetPassword(command);
    }

    @Override
    public void authorized(AuthorizeAccountCommand command) {
        accountService.authorized(command);
    }

    @Override
    public AccountRepresentation login(LoginCommand command) {
        return mappingService.map(accountService.login(command), AccountRepresentation.class, false);
    }

    @Override
    @Transactional(readOnly = true)
    public Pagination<AccountRepresentation> paginationJSON(ListAccountCommand command) {
        command.verifyPage();
        command.setUserName(command.getAccountUserName());
        Pagination<Account> pagination = accountService.pagination(command);
        List<AccountRepresentation> data = mappingService.mapAsList(pagination.getData(), AccountRepresentation.class);
        return new Pagination<>(data, pagination.getCount(), pagination.getPage(), pagination.getPageSize());
    }

}
