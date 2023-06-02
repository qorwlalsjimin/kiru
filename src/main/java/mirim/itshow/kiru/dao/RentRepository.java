package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity_domain.Rent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentRepository extends JpaRepository<Rent, Long> {
}
