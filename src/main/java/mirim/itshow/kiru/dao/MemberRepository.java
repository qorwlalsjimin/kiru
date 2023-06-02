package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity_domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByMemberEmail(String email); //email
    boolean existsByMemberEmail(String email); //해당 회원이 있는지 유무
}