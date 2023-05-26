package mirim.itshow.kiru.dao;

import mirim.itshow.kiru.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByMemberid(String memberid); //email
}
