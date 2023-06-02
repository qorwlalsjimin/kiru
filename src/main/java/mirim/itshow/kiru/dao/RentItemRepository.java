package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity_domain.RentItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentItemRepository extends JpaRepository<RentItem, Long> {
}
