package game.domain.model.integraldetailed;

import game.infrastructure.persistence.hibernate.generic.IHibernateGenericRepository;

import java.io.Serializable;

/**
 * Created by pengyi
 * Date : 2016/3/9.
 */
public interface IIntegralDetailedRepository<T, ID extends Serializable> extends IHibernateGenericRepository<T, ID> {
}