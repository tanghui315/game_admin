package niuniu.interfaces.moneydetailed.web;

import niuniu.application.moneydetailed.IMoneyDetailedAppService;
import niuniu.application.moneydetailed.command.ListMoneyDetailedCommand;
import niuniu.interfaces.shared.web.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by pengyi
 * Date : 16-7-19.
 */
@Controller
@RequestMapping("/money_detailed")
public class MoneyDetailedController extends BaseController {

    private final IMoneyDetailedAppService moneyDetailedAppService;

    @Autowired
    public MoneyDetailedController(IMoneyDetailedAppService moneyDetailedAppService) {
        this.moneyDetailedAppService = moneyDetailedAppService;
    }

    @RequestMapping(value = "/pagination")
    public ModelAndView pagination(ListMoneyDetailedCommand command) {
        return new ModelAndView("/moneydetailed/list", "pagination", moneyDetailedAppService.pagination(command))
                .addObject("command", command);
    }
}
