package niuniu.domain.model.system;


import niuniu.infrastructure.persistence.hibernate.generic.IHibernateGenericRepository;

import java.io.Serializable;

/**
 * Created by pengyi on 2016/5/6.
 */
public interface ISystemRepository<T, ID extends Serializable> extends IHibernateGenericRepository<T, ID> {
}
