package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.HeartItem;
import mirim.itshow.kiru.entity.enum_col.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface HeartItemRepository extends JpaRepository<HeartItem, Long> {
    List<HeartItem> findByItem_Country(Country hanbokOrKimono);

    HeartItem findByItemName(String itemName);

    Optional<HeartItem> findByItem_ItemId(Long itemId);

    //상품 id로 delete
    void deleteByItem_ItemId(Long itemId);

    List<HeartItem> findByItem_Category_CategoryPId(Long categoryPId);
}
