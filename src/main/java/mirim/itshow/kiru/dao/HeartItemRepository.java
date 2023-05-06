package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.HeartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeartItemRepository extends JpaRepository<HeartItem, Long> {
}
