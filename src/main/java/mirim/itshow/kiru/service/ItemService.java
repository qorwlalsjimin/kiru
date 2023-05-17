package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.CategoryRepository;
import mirim.itshow.kiru.dao.ItemRepository;
import mirim.itshow.kiru.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ItemService {

    private final ItemRepository itemRepository;
    private final CategoryRepository categoryRepository;

    @Autowired //하나면 생략 가능함
    public ItemService(ItemRepository itemRepository, CategoryRepository categoryRepository) {
        this.itemRepository = itemRepository;
        this.categoryRepository = categoryRepository;
    }

    // 상품 정보 초기화
    public void persistNewItem(){
        //TODO 이 데이터 안 들어가게
        Item item1 = new Item();
        item1.setName("테스트");
        item1.setPrice(0);
        item1.setDescription("제외해야할 데이터");
        item1.setCategory(categoryRepository.findById(0L).orElse(null));
        //TODO 상품 하나씩은 되는데 목록은 안 됨
        itemRepository.save(item1);
    }

    public void fetchItem(){
        Item item = itemRepository.findById(1L).orElseThrow(() -> new RuntimeException(""));
        System.out.println(item);
    }


    /*
    * 비지니스 알고리즘
    * */
    // 전체 상품 목록 출력
    public List<Item> selectAllItemInfo(){
        return itemRepository.findAll();
    }

    // 카테고리별 상품 목록 출력
    public List<Item> selectItemByCategory(Long categoryId){
        return itemRepository.findByCategory_CategoryId(categoryId);
    }

    // best 상품 목록 출력
    public List<Item> selectAllBestItemInfo(){
        return itemRepository.findAll(Sort.by(Sort.Direction.DESC, "itemId")); //TODO best 기준 아직 못정함
    }

    // brand별 상품 목록 출력
    public List<Item> selectAllBrandItemInfo(){
        return itemRepository.findAll(Sort.by(Sort.Direction.ASC, "brand"));
    }

    // 특정 상품 출력
    public Item selectItemById(Long id){
        return itemRepository.findById(id).get();
    }

    // 상품 등록
    public Item itemRegister(Item item){
        return itemRepository.save(item);
    }


}
