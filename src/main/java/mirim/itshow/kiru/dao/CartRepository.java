package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Cart;
import mirim.itshow.kiru.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
