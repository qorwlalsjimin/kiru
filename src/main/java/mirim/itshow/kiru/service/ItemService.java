package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.ItemRepository;
import mirim.itshow.kiru.entity.Category;
import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.entity.enum_col.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ItemService {

    private final ItemRepository itemRepository;

    @Autowired //하나면 생략 가능함
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    // 상품 정보 초기화
    public void persistNewItem(){
        Item item1 = new Item();
        item1.setName("철릭원피스 린넨 하늘꽃");
        item1.setPrice(39800);
        item1.setDescription("차이킴 시그니쳐 아이템. 4차 리오더 인기상품");
        item1.setImageUrl("https://m.tchaikim.co.kr/web/product/big/202205/a4a903a718a13d0f0aba2dbb44fc3e62.jpg");
        item1.setClothSize(new String[]{"S", "M", "L"});
//        item1.setCategoryId(new Category());

        itemRepository.save(item1);
    }

    public void fetchItem(){
        Item item = itemRepository.findById(1L).orElseThrow(() -> new RuntimeException(""));
        System.out.println(item);
    }


    /*
    * 비지니스 알고리즘
    * */
    // 상품 목록 출력
    public List<Item> selectAllItemInfo(){
        return itemRepository.findAll();
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
