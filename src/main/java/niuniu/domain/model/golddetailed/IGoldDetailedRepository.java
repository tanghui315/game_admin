package niuniu.domain.model.golddetailed;

import niuniu.infrastructure.persistence.hibernate.generic.IHibernateGenericRepository;

import java.io.Serializable;

/**
 * Created by pengyi
 * Date : 2016/3/9.
 */
public interface IGoldDetailedRepository<T, ID extends Serializable> extends IHibernateGenericRepository<T, ID> {
}
