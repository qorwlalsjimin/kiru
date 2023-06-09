package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.CategoryList;
import mirim.itshow.kiru.dao.CategoryRepository;
import mirim.itshow.kiru.dao.ItemRepository;
import mirim.itshow.kiru.entity_domain.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;

@Service
@Transactional
public class ItemService {

    private final ItemRepository itemRepository;
    private final CategoryRepository categoryRepository;
    Sort sort = Sort.by("itemId");

    @Autowired //하나면 생략 가능함
    public ItemService(ItemRepository itemRepository, CategoryRepository categoryRepository) {
        this.itemRepository = itemRepository;
        this.categoryRepository = categoryRepository;
    }

    // 상품 정보 초기화
    public void persistNewItem(){
        Item item1 = new Item();
        item1.setName("테스트");
        item1.setPrice(0);
        item1.setDescription("제외해야할 데이터");
        item1.setCategory(categoryRepository.findById(0L).orElse(null));
        itemRepository.save(item1);
    }

    public void fetchItem(){
        Item item = itemRepository.findById(1L).orElseThrow(() -> new RuntimeException(""));
        System.out.println(item);
    }


    /*
     * 비지니스 알고리즘
     * */
//    // 전체 상품 목록 출력
//    public List<Item> selectAllItemInfo(){
//        return itemRepository.findAll();
//    }

    // 카테고리별 All 상품 목록
    public List<Item> selectItemByCategoryPId(Long categoryPId){
        return itemRepository.findByCategory_CategoryPId(categoryPId, sort.ascending());
    }

    // 카테고리별 best 상품 목록
    public List<Item> selectBestItem(Long categoryPId){
//        return itemRepository.findAll(Sort.by(Sort.Direction.DESC, "itemId"));
        return itemRepository.findByCategory_CategoryPId(categoryPId, sort.descending()); //TODO best 기준 아직 못정함
    }

    // 카테고리별 Brand 상품 목록
    public List<Item> selectBrandItem(Long categoryPId, Long brandId){
        return itemRepository.findByCategory_CategoryPIdAndCategory_CategoryId(categoryPId, brandId);
    }

    // 하나의 상품 상세 정보
    public Item selectItemById(Long id){
        return itemRepository.findById(id).get();
    }

    // 상품 등록
    public Item itemRegister(Item item){
        return itemRepository.save(item);
    }


    // 상품 검색
    public List<Item> selectSearchItem(String keyword) {
        return itemRepository.findByNameAndBrandLike(keyword);
    }

    public Collection<CategoryList> selectBrandList(Long categoryPId) {
        return categoryRepository.findByCategoryPId(categoryPId);
    }

    //한복, 기모노 카테고리 목록
    public Collection<CategoryList> selectCategory(Long countryId) {
        return categoryRepository.findByCategoryPId(countryId);
    }
}