package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
