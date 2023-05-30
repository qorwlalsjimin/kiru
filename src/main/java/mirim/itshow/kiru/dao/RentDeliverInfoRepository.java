package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Rent;
import mirim.itshow.kiru.entity.RentDeliverInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RentDeliverInfoRepository extends JpaRepository<RentDeliverInfo, Long> {
}
