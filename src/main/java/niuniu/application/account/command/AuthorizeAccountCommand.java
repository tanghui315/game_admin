package niuniu.application.account.command;


import niuniu.application.shared.command.SharedCommand;

import javax.validation.constraints.NotNull;
import java.util.List;

/**
 * Created by pengyi on 2016/3/30 0030.
 */
public class AuthorizeAccountCommand extends SharedCommand {

    @NotNull(message = "{user.roles.NotNull.messages}")
    private List<String> roles;

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }
}
