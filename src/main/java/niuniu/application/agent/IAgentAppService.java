package niuniu.application.agent;

import niuniu.application.agent.representation.AgentRepresentation;

/**
 * Created by zhangjin on 2017/6/26.
 */
public interface IAgentAppService {

    AgentRepresentation getAgentInfo(String userName);

    void weChatBind(String weChatNo, String userName);
}
