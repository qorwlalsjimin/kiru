package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Rent;
import mirim.itshow.kiru.entity.RentItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentItemRepository extends JpaRepository<RentItem, Long> {
}
