package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity_domain.Item;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {
    List<Item> findByCategory_CategoryPId(Long categoryPId, Sort sort);
    List<Item> findByCategory_CategoryPIdAndCategory_CategoryId(Long categoryPId, Long categoryId);
    List<Item> findByHeart(boolean isHeart);
    //LIKE 쿼리
    @Query(value = "select i from Item i where (name||brand) LIKE %:keyword%")
    List<Item> findByNameAndBrandLike(@Param("keyword") String keyword);
}