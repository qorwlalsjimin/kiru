package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findByMemberid(String memberid); //email
}