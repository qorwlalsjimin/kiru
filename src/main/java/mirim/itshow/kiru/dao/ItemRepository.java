package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
//    List<Item> findByCategory_CategoryId(@Param(value = "categoryId") Long categoryId);
    List<Item> findByCategory_CategoryId(Long categoryId);
}
