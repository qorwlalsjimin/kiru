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

    //카테고리별 All 상품 목록 (cf. 카테고리 안 나눈 전체 상품 목록은 필요 없음)
    @GetMapping("/item/item_list/{categoryPId}")
    public Collection<Item> selectCategoryPIdItem(@PathVariable Long categoryPId){
        System.out.println("카테고리별 전체 상품목록 get");
        return itemService.selectItemByCategoryPId(categoryPId); // 카테고리 부모 id 입력 (전통한복, 개량한복, ...)
    }

    //카테고리별 Best 상품 목록
    @GetMapping("/item/item_list/{category}/best")
    public Collection<Item> selectBestItem(@PathVariable Long category){
        System.out.println("best 상품목록 get");
        return itemService.selectBestItem(category);
    }

    //카테고리별 Brand 상품 목록
    @GetMapping("/item/item_list/{category}/{brandId}")
    public Collection<Item> selectBrandItem(@PathVariable Long category, @PathVariable Long brandId){
        System.out.println("brand 상품목록 get");
        return itemService.selectBrandItem(category, brandId);
    }

    //하나의 상품 상세 정보
    @GetMapping("/item/{itemId}")
    public ResponseEntity<?> selectById(@PathVariable Long itemId){
        System.out.println(itemId);
        Optional<Item> itemInfo = Optional.ofNullable(itemService.selectItemById(itemId));
        return itemInfo.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    //상품 등록
    @PostMapping(value = "/item/new")
    public ResponseEntity<Item> itemRegister(@RequestBody Item itemInfo) throws URISyntaxException {
        System.out.println(itemInfo.toString());
        itemService.itemRegister(itemInfo); //서비스의 join()를 통해 DB에 등록

        System.out.println("요기요기 "+ResponseEntity.created(new URI("/api/item/new/" + itemInfo.getItemId()))
                .body(itemInfo));

        return ResponseEntity.created(new URI("/api/item/new/" + itemInfo.getItemId()))
                .body(itemInfo);
    }

    //상품 검색
    @GetMapping("/item/search/{keyword}")
    public Collection<Item> searchItem(@PathVariable String keyword){
        System.out.println("상품 검색 get");
        return itemService.selectSearchItem(keyword);
    }
}