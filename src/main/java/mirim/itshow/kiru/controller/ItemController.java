package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.MemberForm;
import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.entity.Member;
import mirim.itshow.kiru.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@Controller
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/item/item_list") //상품 목록
    public List<Item> selectAllItemInfo(){
        List<Item> allItemrInfo = itemService.selectAllItemInfo();
        return allItemrInfo;
    }
    @GetMapping("/item/item_list/{item_id}") //특정 상품
    public Item selectById(@PathVariable String item_id){
        Item itemInfo = itemService.selectItemById(Long.parseLong(item_id));
        return itemInfo;
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
