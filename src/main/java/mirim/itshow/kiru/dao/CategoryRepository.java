package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Category;
import mirim.itshow.kiru.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}