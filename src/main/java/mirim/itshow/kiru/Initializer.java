package mirim.itshow.kiru;

import mirim.itshow.kiru.dao.CategoryRepository;
import mirim.itshow.kiru.dao.ItemRepository;
import mirim.itshow.kiru.entity.Category;
import mirim.itshow.kiru.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

//기본 데이터 가져오기
@Component
class Initializer implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final ItemRepository itemRepository;

    @Autowired
    public Initializer(CategoryRepository repository, ItemRepository itemRepository) {
        this.categoryRepository = repository;
        this.itemRepository = itemRepository;
    }

    @Override
    public void run(String... strings) {
        System.out.println("이니셜라이저 run "+strings.toString());
        //카테고리 초기값 주기
        Category[] categories = new Category[]{
                new Category(100L, 0L, "한복"),
                new Category(110L, 100L, "전통"),
                new Category(120L, 100L, "개량"),
                new Category(130L, 100L, "신발"),
                new Category(140L, 100L, "악세서리"),
                new Category(150L, 100L, "세트"),
                new Category(200L, 200L, "일본"),
                new Category(210L, 200L, "기모노"),
                new Category(220L, 200L, "유카타"),
                new Category(230L, 200L, "신발"),
                new Category(240L, 200L, "악세서리")
        };
        Arrays.stream(categories).forEach(category -> categoryRepository.save(category));

//        //상품 초기값 주기
//        Item[] hanbok_tradition_items = new Item[]{
//                Item.builder()
//                        .name("화이트봉황")
//                        .price(45000)
//                        .description("질감과 색감에서 나오는 광택이 고급스럽습니다. \n소매에는 화려한 봉황새를 화이트와 실버로 수를 놓아 유난히 빛나는 예복입니다.")
//                        .imageUrl(new String[]{"http://www.goldhanbok.com/web/product/big/202303/531766a719d12d83553a8935485edfd4.jpg",
//                        "http://www.goldhanbok.com/web/product/big/202303/e6dfd8784a02b5c4100c56bd66d50293.jpg"})
//                        .color(new String[]{"핑크", "핑크&그레이", "소라"})
//                        .clothSize(new String[]{})
//                        .shoesSize(new String[]{})
//                        .categoryId(categoryRepository.findById(110L).orElse(null))
//                        .brand("황금바늘").build(),
//                Item.builder()
//                        .name("그린수목화")
//                        .price(45000)
//                        .description("질감과 색감에서 나오는 광택이 고급스럽습니다. \n소매에는 화려한 봉황새를 화이트와 실버로 수를 놓아 유난히 빛나는 예복입니다.")
//                        .imageUrl(new String[]{"http://www.goldhanbok.com/web/product/big/202303/531766a719d12d83553a8935485edfd4.jpg",
//                                "http://www.goldhanbok.com/web/product/big/202303/e6dfd8784a02b5c4100c56bd66d50293.jpg"})
//                        .color(new String[]{"핑크", "핑크&그레이", "소라"})
//                        .clothSize(new String[]{})
//                        .shoesSize(new String[]{})
//                        .categoryId(categoryRepository.findById(110L).orElse(null))
//                        .brand("황금바늘").build()
//        };
//        Arrays.stream(hanbok_tradition_items).forEach(item -> itemRepository.save(item));

//        new Item("철릭원피스 린넨 하늘꽃", 39800, "차이킴 시그니쳐 아이템. 4차 리오더 인기상품",
//                "https://m.tchaikim.co.kr/web/product/big/202205/a4a903a718a13d0f0aba2dbb44fc3e62.jpg",
//                new String[]{"S", "M", "L"}, categoryRepository.findById(110L), "차이킴"),
//        categoryRepository.findAll().forEach(System.out::println);
    }
}