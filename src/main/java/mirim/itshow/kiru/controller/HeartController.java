package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.HeartFormDto;
import mirim.itshow.kiru.entity_domain.HeartItem;
import mirim.itshow.kiru.entity_domain.enum_col.Country;
import mirim.itshow.kiru.service.HeartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;

@RestController
@RequestMapping("/api/heart")
public class HeartController {
    HeartService heartService;

    @Autowired
    public HeartController(HeartService heartService) {
        this.heartService = heartService;
    }

    //C: 즐겨찾기 등록
    @PostMapping("/new")
    public ResponseEntity<?> addHeart(@RequestBody HeartFormDto form) throws URISyntaxException {
        heartService.addHeart(form, SecurityContextHolder.getContext().getAuthentication().getName()); //context의 username에는 회원 id가 들어있다
        System.out.println("즐겨찾기: 즐겨찾기 상품 등록 '"+form.getItemId()+"'");
        return ResponseEntity.created(new URI("/api/cart/new" + form.getItemId()))
                .body(form);
    }

    //R: 즐겨찾기 목록
    // 전체
    @GetMapping("/all/{country}")
    public Collection<HeartItem> heartCountryList(@PathVariable Country country){
        System.out.println("즐겨찾기: "+country+" 목록 get");
        return heartService.selectByCountry(country);
    }

    // 카테고리별
    @GetMapping("/{categoryPId}")
    public Collection<HeartItem> heartCategoryList(@PathVariable Long categoryPId){
        System.out.println("즐겨찾기: "+categoryPId+" 목록 get");
        return heartService.selectByCategory(categoryPId);
    }

    //U: x
    //D: 즐겨찾기 해제
    @DeleteMapping("/delete/{itemId}")
    public ResponseEntity<?> deleteItem(@PathVariable Long itemId){
        heartService.deleteByItemId(itemId);
        System.out.println("즐겨찾기: 삭제 ("+itemId+")");
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/all")
    public ResponseEntity<?> deleteAllItem(){
        heartService.deleteAll();
        System.out.println("즐겨찾기: 전체 삭제");
        return ResponseEntity.ok().build();
    }
}