package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Heart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeartRepository extends JpaRepository<Heart, Long> {
}
