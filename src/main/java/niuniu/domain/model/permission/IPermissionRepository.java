package niuniu.domain.model.permission;


import niuniu.infrastructure.persistence.hibernate.generic.IHibernateGenericRepository;

import java.io.Serializable;

/**
 * Created by pengyi on 2016/3/30.
 */
public interface IPermissionRepository<T, ID extends Serializable> extends IHibernateGenericRepository<T, ID> {
    Permission searchByName(String name);
}
