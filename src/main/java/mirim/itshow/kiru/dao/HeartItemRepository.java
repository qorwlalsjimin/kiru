package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity_domain.HeartItem;
import mirim.itshow.kiru.entity_domain.enum_col.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HeartItemRepository extends JpaRepository<HeartItem, Long> {
    List<HeartItem> findByItem_Country(Country hanbokOrKimono);

    //상품 id로 delete
    void deleteByItem_ItemId(Long itemId);

    List<HeartItem> findByItem_Category_CategoryPId(Long categoryPId);
}
