package niuniu.infrastructure.persistence.hibernate.permission;


import niuniu.domain.model.permission.IPermissionRepository;
import niuniu.domain.model.permission.Permission;
import niuniu.infrastructure.persistence.hibernate.generic.AbstractHibernateGenericRepository;
import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

/**
 * Created by pengyi on 2016/3/30.
 */
@Repository("permissionRepository")
public class PermissionRepository extends AbstractHibernateGenericRepository<Permission, String>
        implements IPermissionRepository<Permission, String> {
    @Override
    public Permission searchByName(String name) {
        Criteria criteria = getSession().createCriteria(getPersistentClass());
        criteria.add(Restrictions.eq("name", name));
        return (Permission) criteria.uniqueResult();
    }
}
