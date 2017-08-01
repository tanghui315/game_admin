package niuniu.application.role.representation.mapping;

import ma.glasnost.orika.CustomMapper;
import ma.glasnost.orika.MappingContext;
import niuniu.application.permission.representation.PermissionRepresentation;
import niuniu.application.role.representation.RoleRepresentation;
import niuniu.core.mapping.IMappingService;
import niuniu.domain.model.role.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by pengyi on 2016/3/30 0030.
 */
@Component
public class RoleRepresentationMapper extends CustomMapper<Role, RoleRepresentation> {

    @Autowired
    private IMappingService mappingService;

    public void mapAtoB(Role role, RoleRepresentation representation, MappingContext context) {
        if (null != role.getPermissions()) {
            List<PermissionRepresentation> data = mappingService.mapAsList(role.getPermissions(), PermissionRepresentation.class);
            representation.setPermissions(data);
        }
    }
}
