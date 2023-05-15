package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dao.ItemRepository;
import mirim.itshow.kiru.dto.MemberForm;
import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.entity.Member;
import mirim.itshow.kiru.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @Autowired
    ItemRepository itemRepository;

    @GetMapping("/item/item_list") //상품 목록
    public Collection<Item> selectAllItemInfo(){
        System.out.println("상품목록 get");
//        System.out.println(itemService.selectAllItemInfo());
//        System.out.println(itemService.selectItemById(2L));
//        System.out.println("안 되니..ㅠㅠ");
//        return null;
        return itemService.selectAllItemInfo();
    }

    @GetMapping("/item/item_list/{item_id}") //특정 상품
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
