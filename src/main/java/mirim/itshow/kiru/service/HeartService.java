package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.*;
import mirim.itshow.kiru.dto.HeartForm;
import mirim.itshow.kiru.entity.*;
import mirim.itshow.kiru.entity.enum_col.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class HeartService {
    private final HeartItemRepository heartItemRepository;
    private final HeartRepository heartRepository;
    private final ItemRepository itemRepository;
    private final MemberRepository memberRopository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public HeartService(HeartItemRepository heartItemRepository, HeartRepository heartRepository, ItemRepository itemRepository, MemberRepository memberRopository, CategoryRepository categoryRepository) {
        this.heartItemRepository = heartItemRepository;
        this.heartRepository = heartRepository;
        this.itemRepository = itemRepository;
        this.memberRopository = memberRopository;
        this.categoryRepository = categoryRepository;
    }


    /**
     * 즐겨찾기 등록
     */
    public HeartItem addHeart(HeartForm form, String memberid){
        // DB에 저장
        Item item = itemRepository.findById(form.getItemId()).get(); //상품 id로 해당 상품 가져오기
        if(item.isHeart()) //이미 즐겨찾기되어있는 상품이라면
            throw new IllegalStateException("이미 즐겨찾기되어 있는 상품입니다."); //에러 발생

        Member member = memberRopository.findByMemberid(memberid); //회원 정보
        Heart heart = heartRepository.findByMember(member); //회원이 가지고 있는 즐겨찾기
        if(heart == null){ //즐겨찾기가 없었다면
            heart = Heart.createHeart(member); //새로 만들어준다
            heartRepository.save(heart);
        }

        HeartItem heartItem = HeartItem.createHeartItem(item, heart);

        // Item에 즐겨찾기 반영
        item.setHeart(true);

        return heartItemRepository.save(heartItem); //DB에 저장
    }

    /**
     * 즐겨찾기 데이터 출력
     */
    // 한복, 기모노 따로 목록 보여주기
    public List<HeartItem> selectByCountry(Country HanbokOrKimono){
        return heartItemRepository.findByItem_Country(HanbokOrKimono);
    }

    // 카테고리별로 목록 보여주기
    public List<HeartItem> selectByCategory(Long categoryPId){
        return heartItemRepository.findByItem_Category_CategoryPId(categoryPId);
    }

    // 특정 아이디를 가진 즐겨찾기 상품 보여주기
    public Optional<HeartItem> findById(Long id){
        return heartItemRepository.findById(id);
    }

    /**
     * 상품 삭제
     */
    // 특정 상품 하나 해제
    public void deleteByItemId(Long id){
        Item item = itemRepository.findById(id).get();
        item.setHeart(false);
        heartItemRepository.deleteByItem_ItemId(id);
    }

    // 전체 해제
    public void deleteAll() {
        heartItemRepository.deleteAll();
    }
}