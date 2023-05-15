package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.ItemRepository;
import mirim.itshow.kiru.entity.Category;
import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.entity.enum_col.Size;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

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
        //TODO 이 데이터 안 들어가게
        Item item1 = new Item();
        item1.setName("테스트");
        item1.setPrice(0);
        item1.setDescription("제외해야할 데이터");
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
