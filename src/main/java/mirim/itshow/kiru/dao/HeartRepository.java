package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity_domain.Heart;
import mirim.itshow.kiru.entity_domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeartRepository extends JpaRepository<Heart, Long> {
    Heart findByMember(Member member);

}
