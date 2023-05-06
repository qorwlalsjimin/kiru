package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Cart;
import mirim.itshow.kiru.entity.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepository extends JpaRepository<Rent, Long> {
}
