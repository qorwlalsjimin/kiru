package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity_domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    List<CategoryBrand> findByCategoryPId(Long categoryPId);
}