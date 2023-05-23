package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.CartItem;
import mirim.itshow.kiru.entity.enum_col.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByItem_Country(Country hanbokOrKimono);

    CartItem findByItemName(String itemName);
}
