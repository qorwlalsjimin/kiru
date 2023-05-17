package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dao.ItemRepository;
import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @Autowired
    ItemRepository itemRepository;

    @GetMapping("/item/item_list/{id}") //카테고리별 전체 상품 목록
    public Collection<Item> selectCategoryItemInfo(@PathVariable Long id){
        System.out.println("전체 상품목록 get");
        return itemService.selectItemByCategory(id);
    }
    @GetMapping("/item/{category}/best") //best 상품 목록
    public Collection<Item> selectBestItemInfo(@PathVariable String category){
        System.out.println("best 상품목록 get");
        return itemService.selectAllBestItemInfo();
    }
    @GetMapping("/item/{category}/brand") //brand별 상품 목록
    public Collection<Item> selectBrandItemInfo(@PathVariable String category){
        System.out.println("brand 상품목록 get");
        return itemService.selectAllBrandItemInfo();
    }

    @GetMapping("/item/{item_id}") //특정 상품
    public ResponseEntity<?> selectById(@PathVariable Long item_id){
        Optional<Item> itemInfo = Optional.ofNullable(itemService.selectItemById(item_id));
        return itemInfo.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping(value = "/item/new")
    public ResponseEntity<Item> itemRegister(@RequestBody Item itemInfo) throws URISyntaxException {
        System.out.println(itemInfo.toString());
        itemService.itemRegister(itemInfo); //서비스의 join()를 통해 DB에 등록

        System.out.println("요기요기 "+ResponseEntity.created(new URI("/api/item/new/" + itemInfo.getItemId()))
                .body(itemInfo));

        return ResponseEntity.created(new URI("/api/item/new/" + itemInfo.getItemId()))
                .body(itemInfo);
    }
}
