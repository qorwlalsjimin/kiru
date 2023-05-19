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
        System.out.println("이니셜라이저 run " + strings.toString());
        //카테고리 초기값 주기
        Category[] categories = new Category[]{
                new Category(100L, 0L, "*한복"),

                new Category(110L, 100L, "전통"),
                new Category(111L, 110L, "황금바늘.goodneedle"),
                new Category(112L, 110L, "민한복.minhanbok"),
                new Category(113L, 110L, "본한복.bonhanbok"),

                new Category(120L, 100L, "개량"),
                new Category(121L, 120L, "단하.danha"),
                new Category(122L, 120L, "차이킴.tchaikim"),
                new Category(123L, 120L, "리슬.leesle"),

                new Category(130L, 100L, "신발"),
                new Category(131L, 130L, "블랑수블랑.blanc sur blanc"),
                new Category(132L, 130L, "리우앤비우.riuviu"),

                new Category(140L, 100L, "악세서리"),
                new Category(141L, 140L, "돌실나이.dolsilnai"),
                new Category(142L, 140L, "차이킴.tchaikim"),
                new Category(143L, 140L, "나빔.nabim"),
                new Category(144L, 140L, "하플리.happly"),

                new Category(150L, 100L, "세트"),


                new Category(200L, 200L, "*일본"),
                new Category(210L, 200L, "기모노"),
                new Category(220L, 200L, "유카타"),

                new Category(230L, 200L, "신발"),
                new Category(231L, 230L, "くるり.kururi"),

                new Category(240L, 200L, "악세서리"),
                new Category(241L, 240L, "くるり.kururi")
        };
        Arrays.stream(categories).forEach(category -> categoryRepository.save(category));

        //상품 초기값 주기
        Item[] hanbok_tradition_items = new Item[]{
                /* 한국 */
// 한국 - 전통한복
                Item.builder()
                        .name("화이트봉황")
                        .price(45000)
                        .description("질감과 색감에서 나오는 광택이 고급스럽습니다. \n소매에는 화려한 봉황새를 화이트와 실버로 수를 놓아 유난히 빛나는 전통한복입니다.")
                        .imageUrl(new String[]{"", "http://www.goldhanbok.com/web/upload/NNEditor/20230303/2302_0405.jpg",
                                "http://www.goldhanbok.com/web/upload/NNEditor/20230303/2302_0406.jpg"})
                        .color(new String[]{"청회색", "분홍색", "짙은보라색"})
                        .size(new String[]{"S", "M", "L"}).categoryId(categoryRepository.findById(111L).orElse(null))
                        .brand("황금바늘").build(),

                Item.builder()
                        .name("수묵화")
                        .price(45000)
                        .description("수묵화저고리와 고급지고 따뜻한 봄의 치마입니다.")
                        .imageUrl(new String[]{"", "http://www.goldhanbok.com/web/upload/NNEditor/20220321/0319_06_03.jpg", "http://www.goldhanbok.com/web/upload/NNEditor/20220321/0319_06_05.JPG"})
                        .color(new String[]{"분홍색", "청색"})
                        .size(new String[]{"S", "M", "L"}).categoryId(categoryRepository.findById(111L).orElse(null))
                        .brand("황금바늘").build(),

                Item.builder()
                        .name("와인")
                        .price(45000)
                        .description("깃부분에는 엔틱장식과 소매부분의 실버스테칭이 포인트입니다. \n홍매화를 동양화로  표현한 고전적인 치마와 저고리의 엔틱이 상박하후의 실루엣으로 완성됩니다.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/tYpRyJ9/image.jpg",
                                "https://i.ibb.co/RHVPjHT/image.jpg"})
                        .color(new String[]{"적색"})
                        .size(new String[]{"S", "M", "L"}).categoryId(categoryRepository.findById(111L).orElse(null))
                        .brand("황금바늘").build(),

                Item.builder()
                        .name("귀족")
                        .price(45000)
                        .description("올가을 최고의 소재 명주! \n그 중에 '연두와 베이지'의 세련미 넘치는 컬러 조합입니다.")
                        .imageUrl(new String[]{"", "http://www.goldhanbok.com/web/upload/NNEditor/20150926/10_shop1_214428.jpg",
                                "http://www.goldhanbok.com/web/upload/NNEditor/20150926/07_shop1_214427.jpg"})
                        .color(new String[]{"녹색&분홍색"})
                        .size(new String[]{"S", "M", "L"}).categoryId(categoryRepository.findById(111L).orElse(null))
                        .brand("황금바늘").build(),

                Item.builder()
                        .name("봄의 시모")
                        .price(45000)
                        .description("베이지톤으로 깃과 소매에 수를 놓고 소매끝의 얇은 속거들지와 얇은 고름으로 봄의 상큼함을 주었습니다.")
                        .imageUrl(new String[]{"", "http://www.goldhanbok.com/web/upload/NNEditor/20220319/0319_05_02.png",
                                "http://www.goldhanbok.com/web/upload/NNEditor/20220319/0319_05_04.png"})
                        .color(new String[]{"청색", "분홍색"})
                        .size(new String[]{"S", "M", "L"}).categoryId(categoryRepository.findById(111L).orElse(null))
                        .brand("황금바늘").build(),

                Item.builder()
                        .name("꽃나비")
                        .price(45000)
                        .description("아이보리 저고리에 잔잔한 꽃과 나비가 노니는 모습을 한땀한땀 손자수로 표현하였습니다. 은은하면서 고급스런 최고급 소재인 명주를 사용하여 우아하게 완성한 '꽃나비'를 만나보세요.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/PF3Vc6h/image.jpg",
                                "https://i.ibb.co/Mfwf79m/image.jpg"})
                        .color(new String[]{"밝은녹색", "분홍색"})
                        .size(new String[]{"S", "M", "L"}).categoryId(categoryRepository.findById(111L).orElse(null))
                        .brand("황금바늘").build(),


                Item.builder()
                        .name("레이스")
                        .price(45000)
                        .description("차분의 색조합과 저고리의 자수 무늬로 세련되고 우아한 느낌의 '레이스'를 만나보세요.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/hMvrCZs/image.jpg",
                                "https://i.ibb.co/bPHdYmR/image.jpg"})
                        .color(new String[]{"보라색", "회색"})
                        .size(new String[]{"S", "M", "L"}).categoryId(categoryRepository.findById(111L).orElse(null))
                        .brand("황금바늘").build(),


                Item.builder()
                        .name("온세미로")
                        .price(45000)
                        .description("온세미로, 단아한 디자인 고급스러운 한복\n소매에 고급원단으로 마감하여 우아함을 더하다.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/wJmyH5p/image.jpg",
                                "https://i.ibb.co/WyTKCTr/image.jpg"})
                        .color(new String[]{"분홍색", "청색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(112L).orElse(null))
                        .brand("민한복").build(),


                Item.builder()
                        .name("하나린")
                        .price(45000)
                        .description("하나린, 단아한 디자인 고급스러운 한복\n소매에 고급원단으로 마감하여 우아함을 더하다.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/zJScBj3/image.jpg",
                                "https://i.ibb.co/2P0Jt1h/image.jpg"})
                        .color(new String[]{"청록색", "분홍색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(112L).orElse(null))
                        .brand("민한복").build(),


                Item.builder()
                        .name("흰여울")
                        .price(45000)
                        .description("흰여울, 단아한 디자인 고급스러운 한복\n소매에 고급원단으로 마감하여 우아함을 더하다.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/8NbgczN/image.jpg",
                                "https://i.ibb.co/w76sb8t/image.jpg"})
                        .color(new String[]{"청색", "분홍색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(112L).orElse(null))
                        .brand("민한복").build(),


                Item.builder()
                        .name("늘해랑")
                        .price(50000)
                        .description("늘해랑, 단아한 디자인 고급스러운 한복\n소매에 포인트 자수로 마감하여 우아함을 더하다.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/12PzyYY/image.jpg",
                                "https://i.ibb.co/HK7rkXs/image.jpg"})
                        .color(new String[]{"하늘색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(112L).orElse(null))
                        .brand("민한복").build(),


                Item.builder()
                        .name("윤슬")
                        .price(50000)
                        .description("윤슬, 단아한 디자인 고급스러운 한복\n소매에 포인트 자수로 마감하여 우아함을 더하다.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/yPhyDxZ/image.jpg",
                                "https://i.ibb.co/Bf2F2DT/image.jpg"})
                        .color(new String[]{"하늘색&노랑색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(112L).orElse(null))
                        .brand("민한복").build(),


                Item.builder()
                        .name("아이비")
                        .price(50000)
                        .description("아이비, 단아한 디자인 고급스러운 한복\n소매에 포인트 자수로 마감하여 우아함을 더하다.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/YWwnYB2/image.jpg",
                                "https://i.ibb.co/SQKSvjd/image.jpg"})
                        .color(new String[]{"보라색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(112L).orElse(null))
                        .brand("민한복").build(),


                Item.builder()
                        .name("나르샤")
                        .price(50000)
                        .description("나르샤, 단아한 디자인 고급스러운 한복\n소매에 포인트 자수로 마감하여 우아함을 더하다.")
                        .imageUrl(new String[]{"", "https://i.ibb.co/qJH6QBg/image.jpg",
                                "https://i.ibb.co/R7L6q1P/image.jpg"})
                        .color(new String[]{"하늘색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(112L).orElse(null))
                        .brand("민한복").build(),


                Item.builder()
                        .name("프리지아")
                        .price(50000)
                        .description("은은하고 연한 연노랑 저고리에 꽃잎처럼 겹겹이 갈라진 노랑치마입니다.")
                        .imageUrl(new String[]{"", "https://shop-phinf.pstatic.net/20230417_215/1681666659643lEC2z_JPEG/KakaoTalk_20230417_023716718.jpg?type=w860",
                                "https://shop-phinf.pstatic.net/20230417_284/1681669142977TNxDT_JPEG/81CA54D5-34F4-432A-844F-E6BB98F7837D.jpg?type=w860"})
                        .color(new String[]{"노랑색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(113L).orElse(null))
                        .brand("복한복").build(),


                Item.builder()
                        .name("라비앙로즈")
                        .price(50000)
                        .description("고운 색감과 고급스러운 디자인의 라비앙로즈 한복입니다.")
                        .imageUrl(new String[]{"", "https://shop-phinf.pstatic.net/20200229_133/15829107663553i0Rq_JPEG/%BA%BB8.jpg?type=w860",
                                "https://shop-phinf.pstatic.net/20190222_38/101344422_1550801734165fvUdq_JPEG/KJW_6561.jpg?type=w860"})
                        .color(new String[]{"분홍색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(113L).orElse(null))
                        .brand("복한복").build(),


                Item.builder()
                        .name("루비")
                        .price(50000)
                        .description("과하지 않은 예쁜 톤으로 컬러 자체가 포인트가 되는 디자인입니다.")
                        .imageUrl(new String[]{"", "https://shop-phinf.pstatic.net/20220805_197/1659635470853kMKdd_JPEG/220727_%EB%B3%B813998.jpg?type=w860",
                                "https://i.ibb.co/z8bzmcC/image.jpg"})
                        .color(new String[]{"분홍색", "청색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(113L).orElse(null))
                        .brand("복한복").build(),


                Item.builder()
                        .name("플로라")
                        .price(50000)
                        .description("예쁜 꽃이 흩날리는 꽃의 여신 '플로라'한복입니다.")
                        .imageUrl(new String[]{"", "https://shop-phinf.pstatic.net/20190919_218/1568835789456i31Nj_JPEG/2019.04.20_%BA%BB%C7%D1%BA%B9_%BC%EE%C7%CE%B8%F403476.jpg?type=w860",
                                "https://shop-phinf.pstatic.net/20190919_30/1568835809877M5bAN_JPEG/2019.04.20_%BA%BB%C7%D1%BA%B9_%BC%EE%C7%CE%B8%F403467.jpg?type=w860"})
                        .color(new String[]{"녹색", "분홍색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(113L).orElse(null))
                        .brand("복한복").build(),


                Item.builder()
                        .name("은빛")
                        .price(50000)
                        .description("손수 은사용보가 은은하게 반짝이는 당의형 디자인입니다. 소매는 은빛베이지 실크 원단으로 포인트를 주어 고급스럽습니다.")
                        .imageUrl(new String[]{"", "https://shop-phinf.pstatic.net/20181127_205/101344422_1543260572160kv3kl_JPEG/KJW_6107.jpg?type=w860",
                                "https://shop-phinf.pstatic.net/20181127_177/101344422_1543261231942mBtAd_JPEG/KJW_6715.jpg?type=w860"})
                        .color(new String[]{"버건디", "라벤더"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(113L).orElse(null))
                        .brand("복한복").build(),


                Item.builder()
                        .name("고급형 명주누빔 밍크배자")
                        .price(60000)
                        .description("고급스러움은 물론 누빔디자인으로 따뜻함을 더해주는 한복입니다.")
                        .imageUrl(new String[]{"", "https://shop-phinf.pstatic.net/20190922_159/1569151180692fzURx_JPEG/00051_1.jpg?type=w860",
                                "https://shop-phinf.pstatic.net/20190922_20/1569152274752LoEDL_JPEG/00088_1.jpg?type=w860"})
                        .color(new String[]{"회색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(113L).orElse(null))
                        .brand("복한복").build(),

// 한국 - 개량한복
//    단하
                Item.builder()
                        .name("화조도 그라데이션 드레스")
                        .price(39000)
                        .description("이 전경 작가님의 화조도 패턴과 그라데이션을 사용해 디자인된 드레스입니다. \n어깨 끈 포인트로 러블리한 분위기를 더합니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675412600372_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1668050223705_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675412600168_2500.jpg"})
                        .color(new String[]{"옥색", "적색", "자색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("노랑 봉황문 드레스")
                        .price(49000)
                        .description("조선의 궁중 보자기 문양인 봉황문 인문보 문양의 노란색 드레스입니다. \n3단 무지기 치마를 재해석한 드레스로 말기 부분의 끈과 어깨 부분 리본으로 발랄한 포인트가 됩니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1680071770583_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1660374540889_2500.jpeg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1680071777533_2500.jpg"})
                        .color(new String[]{"노랑"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("분홍 대슘 원피스")
                        .price(28000)
                        .description("전통 대슘치마를 모티브로 한 원피스입니다. 밑단이 자연스럽게 퍼져 예쁜 핏을 자랑합니다.  \n어깨 끈과 아랫단 포인트로 사랑스러움을 더했습니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675414911760_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615079603011_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615079602655_2500.jpg"})
                        .color(new String[]{"분홍"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("봉황문 연두 대슘 원피스")
                        .price(30000)
                        .description("전통 대슘치마를 모티브로 한 원피스입니다. \n어깨 끈과 아랫단 포인트로 사랑스러움을 더했습니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1676338963352_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675651894831_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675651895653_2500.jpg"})
                        .color(new String[]{"연두"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("쉘핑크 홀리데이 단 원피스")
                        .price(30000)
                        .description("조선시대 궁중 보자기 패턴인 봉황문 인문보로 디자인된 원피스입니다. \n어깨 끈과 말기, 아랫단이 쉘핑크 컬러의 뉴 봉황문 인문보 패턴으로 디자인되어 발랄하고 사랑스러움을 더했습니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675415761625_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1647491818362_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1647491818927_2500.jpg"})
                        .color(new String[]{"핑크"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("연보라 국화 드레스")
                        .price(49000)
                        .description("조선의 궁중 도배지 문양 중 하나인 국화문 패턴이 들어간 연보라 드레스입니다. \n갈래 갈래마다 다른 길이와 연보라 색감으로 오묘하고 고급스러운 느낌을 주는 드레스 입니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675412800791_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1660972914482_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1660972912338_2500.jpg"})
                        .color(new String[]{"연보라"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("로열블루 도배문 드레스")
                        .price(42000)
                        .description("조선 궁중 도배지 문양을 바탕으로 디자인된 드레스입니다.  \n은은한 베이지 색상의 가슴 말기 리본과 로열블루 색상의 어깨 리본이 조선 궁중 도배지 문양과 어우러져 고급스러운 느낌을 연출합니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1674809586826_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1674809595962_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1660972912338_2500.jpg"})
                        .color(new String[]{"로열블루"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("청 당초문 갈래 드레스")
                        .price(49000)
                        .description("조선의 궁중 도배지 문양 중 하나인 당초문 패턴이 들어간 하늘색의 갈래 드레스입니다. \n핑크색 당초문과 하늘 색상이 조합으로 시원하고 고급스러운 느낌을 줍니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675412817256_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1660972417914_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1660972416787_2500.jpg"})
                        .color(new String[]{"청색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("쉘핑크 홀리데이 리본 드레스")
                        .price(36000)
                        .description("조선시대 궁중 보자기 패턴인 봉황문 인문보로 디자인된 드레스입니다. \n핑크색과 파스텔 톤의 가슴 말기 리본으로 귀엽고 사랑스러운 이미지의 드레스입니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675412836553_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1660972417914_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1652253701565_2500.jpg"})
                        .color(new String[]{"쉘핑크"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("거북문 갈래 드레스")
                        .price(48000)
                        .description("조선 궁중 도배지 문양 중 하나인 거북문 패턴의 갈래 드레스입니다. \n전체적으로 푸른 컬러의 드레스이지만 거북문의 노랑이 스며나와 독특한 분위기를 만들어냅니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675412907452_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1613467328080_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1613467326976_2500.jpg"})
                        .color(new String[]{"청색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("블루 봉황문 갈래 원피스")
                        .price(42000)
                        .description("화이트 + 블루의 조화로 깨끗하면서 청순한 느낌에 갈래 치마로 발랄함까지 더해 디자인되었습니다. \n조선 궁중 보자기 패턴인 봉황문 인문보 패턴을 활용하여 한국적이고 유니크한 아름다움을 느낄 수 있습니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675412925326_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615081293337_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615081292682_2500.jpg"})
                        .color(new String[]{"블루"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("3단 플리츠 원피스")
                        .price(36000)
                        .description("각기 다른 패턴과 컬러의 플리츠로 이루어진 둘러입는 원피스입니다.  \n어깨 끈 포인트로 러블리한 분위기를 더합니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675415026549_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615081590305_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615081589407_2500.jpg"})
                        .color(new String[]{"코랄"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("피날레 드레스")
                        .price(36000)
                        .description("짧은 민트색 플리츠 덧치마가 더해진 디자인의 랩 드레스입니다.  \n묶어 입는 어깨 끈으로 우아하면서 발랄한 분위기를 줍니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675416203384_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615081070320_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615081069934_2500.jpg"})
                        .color(new String[]{"민트"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


                Item.builder()
                        .name("수박 봉황문 드레스")
                        .price(35000)
                        .description("수박색이 패턴 위로 배어 나와 기존의 핑크 컬러의 패턴과 또 다른 무드의 조화로, 레이어드를 통해 깊은 컬러감을 느낄 수 있습니다.")
                        .imageUrl(new String[]{"https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1675412887952_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615079393825_2500.jpg", "https://contents.sixshop.com/thumbnails/uploadedFiles/73034/product/image_1615079394190_2500.jpg"})
                        .color(new String[]{"청록"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(121L).orElse(null))
                        .brand("단하").build(),


//    차이킴
                Item.builder()
                        .name("거들썬드레스 수궁가")
                        .price(42000)
                        .description("수궁가거들썬드레스에는 수궁가를 모티브로 제작한 차이킴만의  시그니처프린팅원단을 사용하였습니다.  \n수궁가거들썬드레스로 시원하고 멋스러운 봄, 여름 스타일링을 완성해보세요. ")
                        .imageUrl(new String[]{"https://m.tchaikim.co.kr/web/product/big/202205/cc79fb123de602cc1db2954fb1bd8b21.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202205/eaa501a95f4b5af7c6770e7af80da514.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202205/44526a592e398d0eb1557143dbb6667b.jpg"})
                        .color(new String[]{"하양", "네이비"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(122L).orElse(null))
                        .brand("차이킴").build(),


                Item.builder()
                        .name("철릭원피스 수궁가")
                        .price(46000)
                        .description("가볍고 부드러운 면 원단은 판소리 다섯마당 중 하나인 수궁가를 모티브로 기획 제작되었습니다. ")
                        .imageUrl(new String[]{"https://m.tchaikim.co.kr/web/product/big/202303/6d074c8edf4738335f2beeb9e37baa71.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202303/93eb2c4e55ab0ab1e8b08afccb55acb2.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202303/2c76435a60f50370f590b65fa6abb09c.jpg"})
                        .color(new String[]{"네이비"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(122L).orElse(null))
                        .brand("차이킴").build(),


                Item.builder()
                        .name("매난국죽 아웃퍼프 철릭원피스")
                        .price(42000)
                        .description("시그니처 프린팅인 사군자와 시원한 면100% 원단을 사용하여 로맨틱한 실루엣으로 연출하여 드레시하게 착용가능한 철릭원피스입니다.")
                        .imageUrl(new String[]{"https://m.tchaikim.co.kr/web/product/big/202304/2b5fff23a407a9b3e815832d6b12adb0.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202304/cee59b9d3db53271e20918642fec4cf5.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202304/82ba6ebb5c0cf0b54acc584065dfc9b9.jpg"})
                        .color(new String[]{"연두"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(122L).orElse(null))
                        .brand("차이킴").build(),


                Item.builder()
                        .name("하늘꽃 린넨 철릭원피스")
                        .price(39000)
                        .description("차이킴 철릭원피스 고유의 디자인이 가지고 있는 내츄럴하고 인위적이지 않은 느낌과 질감좋은 린넨 소재가 더해져 섬세한 매력을 보여주고 있습니다.  \n차이킴의 대표 시그니쳐 상품인 철릭원피스 하늘꽃입니다. ")
                        .imageUrl(new String[]{"https://m.tchaikim.co.kr/web/product/big/202205/a4a903a718a13d0f0aba2dbb44fc3e62.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/201906/aec7183e5140abbc4412c8b67b8d9655.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/201906/c07451b37faeb58392b98a7a713a71be.jpg"})
                        .color(new String[]{"하양"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(122L).orElse(null))
                        .brand("차이킴").build(),


                Item.builder()
                        .name("철릭원피스 플라워샤워")
                        .price(23000)
                        .description("고급스러운 광택의 실크 원단으로 제작된 철릭 원피스입니다.  \n어난 실크원단감의 특성으로 드레이프성이 매우 좋기에 촉감이 부드러운 원피스입니다. ")
                        .imageUrl(new String[]{"https://m.tchaikim.co.kr/web/product/big/202302/7580e27433b1a76787663c2a4dd5f99d.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202302/a88d4df11755357930fc631548c86776.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202302/b60f572f97ba354814692f894bce1592.jpg"})
                        .color(new String[]{"하양"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(122L).orElse(null))
                        .brand("차이킴").build(),


                Item.builder()
                        .name("거들썬드레스 네이비")
                        .price(23000)
                        .description("썬드레스는 일광욕할 때 입는 드레스를 일컫습니다.  \n수궁가거들썬드레스로 시원하고 멋스러운 봄, 여름 스타일링을 완성해보세요.  ")
                        .imageUrl(new String[]{"https://m.tchaikim.co.kr/web/product/big/202205/de8aa4c0754139a76dbd369638967c76.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202205/32bf023448e473bb5eee8716c1b6932c.jpg", "https://m.tchaikim.co.kr/web/product/extra/big/202205/07c12f70b73c53a90ae43fad60e136f6.jpg"})
                        .color(new String[]{"네이비"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(122L).orElse(null))
                        .brand("차이킴").build(),


//    리슬
                Item.builder()
                        .name("금박 원피스")
                        .price(29000)
                        .description("신축성이 있는 스모크 원단으로 핏을 딱 잡아줍니다. \n시원한 소재로 착용감이 좋은 원피스입니다.")
                        .imageUrl(new String[]{"https://leesle.com/web/product/extra/big/202205/fadfe8f614afa61a73c31ac86a16de37.jpg", "https://leesle.com/web/product/extra/big/202208/822bf771dfa832d545b757f2d9650a15.jpg", "https://leesle.com/web/product/extra/big/202205/80e83a373eeeb43e8c34d2523efcbe34.jpg"})
                        .color(new String[]{"블랙"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(123L).orElse(null))
                        .brand("리슬").build(),


                Item.builder()
                        .name("코깃 한복 원피스")
                        .price(28000)
                        .description("데이지 무늬의 한복 원피스입니다. \n허리선이 강조되어 날씬해 보이는 실루엣을 연출해줍니다.")
                        .imageUrl(new String[]{"누끼딴 이미지 주소 필요", "누끼딴 이미지 주소 필요", "https://leesle.com/web/product/big/202206/8f4f0892ece46c564781a4ed5d571c65.jpg"})
                        .color(new String[]{"블랙"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(123L).orElse(null))
                        .brand("리슬").build(),


                Item.builder()
                        .name("일랑 긴팔 한복 원피스")
                        .price(28000)
                        .description("꽃 무늬의 긴팔 한복 원피스입니다. \n허리 밴딩으로 편안한 착용감을 제공합니다.")
                        .imageUrl(new String[]{"https://leesle.com/web/product/extra/big/202302/1ce09c3db4323737ebeb28cd04eeac61.jpg", "https://leesle.com/web/product/extra/big/202302/89448ef9db5955725c079a1ed2d19842.jpg", "https://leesle.com/web/product/extra/big/202302/f7813bca79db511c6b333c73008919ca.jpg"})
                        .color(new String[]{"아이보리"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(123L).orElse(null))
                        .brand("리슬").build(),


                Item.builder()
                        .name("꽃길 철릭 원피스")
                        .price(29000)
                        .description("탄탄한 소재감으로 제작된 철릭 원피스입니다. \n디테일을 추가해 실용성을 챙겼습니다.")
                        .imageUrl(new String[]{"누끼딴 이미지 주소 필요", "누끼딴 이미지 주소 필요", "https://leesle.com/web/upload/NNEditor/20230130/15bfb935eb5de534886078f7a767f3eb.jpg"})
                        .color(new String[]{"아이보리"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(123L).orElse(null))
                        .brand("리슬").build(),


                Item.builder()
                        .name("기모 자락치마")
                        .price(29000)
                        .description("기본 A자 형태의 치마로,  \n치마 안에 있는 끈을 묶으면 거들 치마로, 치마 끝 부분에 달린 동그란 단추를 노리개 고리에 끼우면 항아리 모양 주릿대 치마로 다양하게 착용할 수 있습니다.")
                        .imageUrl(new String[]{"https://leesle.com/web/product/extra/big/202212/3e036dfc19abd6af85381b403a054af2.jpg", "https://leesle.com/web/product/extra/big/202212/c5f028ef3e57e32d474e487fbb55f885.jpg", "https://leesle.com/web/product/extra/big/202212/c5f028ef3e57e32d474e487fbb55f885.jpg"})
                        .color(new String[]{"핑크", "아이보리", "노랑"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(123L).orElse(null))
                        .brand("리슬").build(),


                Item.builder()
                        .name("철릭 원피스")
                        .price(29000)
                        .description("시스루의 얇고 가벼운 쉬폰 원피스입니다. \n랩형식의 철릭 원피스로서 활용도가 높게 제작되었습니다.")
                        .imageUrl(new String[]{"누끼딴 이미지 주소 필요", "누끼딴 이미지 주소 필요", "https://leesle.com/web/upload/NNEditor/20230130/cd0d32dcf08303208b6b7460903086e6.jpg"})
                        .color(new String[]{"아이보리"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(123L).orElse(null))
                        .brand("리슬").build(),


// 한국 - 신발
                Item.builder()
                        .name("마리플랫폼로퍼")
                        .price(29800)
                        .description("외피와 플랫폼에 동일한 소재로 통일감을 주었으며 롤링 가공된 가죽의 자연스러운 주름과 은은한 광택감이 섬세하면서 여성스러운 감성을 더합니다.")
                        .imageUrl(new String[]{"", "https://www.blanc-sur-blanc.com/web/product/extra/big/202302/0aea1a2396a844026272b7699c2e585b.png", "https://www.blanc-sur-blanc.com/web/product/extra/big/202302/72f88562f253217bfc199c9fa18f9e91.png"})
                        .color(new String[]{"비색"})
                        .size(new String[]{"225", "230", "235", "240", "245", "250", "255"})
                        .categoryId(categoryRepository.findById(131L).orElse(null))
                        .brand("블랑수블랑").build(),

                Item.builder()
                        .name("쥴리뮬")
                        .price(26800)
                        .description("유니크한 라운드 토가 포인트인 크랙 글로시뮬 입니다.\n부드러운 크랙 가죽과 카우내피는 신을수록 더욱 편안합니다.")
                        .imageUrl(new String[]{"", "https://www.blanc-sur-blanc.com/web/product/extra/big/202205/f9c829c1b1896c91d9e0eceeb07391ad.jpg", "https://www.blanc-sur-blanc.com/web/product/extra/big/202205/d59c90001aba71cade671a211a821a61.jpg"})
                        .color(new String[]{"상아색"})
                        .size(new String[]{"225", "230", "235", "240", "245", "250", "255"})
                        .categoryId(categoryRepository.findById(131L).orElse(null))
                        .brand("블랑수블랑").build(),


                Item.builder()
                        .name("리사플랫")
                        .price(26800)
                        .description("섬세한 가죽라인띠를 섬세하게 세팅한 데일리 슈즈입니다.")
                        .imageUrl(new String[]{"", "https://www.blanc-sur-blanc.com/web/product/extra/big/202203/4db3cd82b38e781967cfacab2d5b697d.jpg", "https://www.blanc-sur-blanc.com/web/product/extra/big/202203/37330b1d20e70251ae8a6beaaf413829.jpg"})
                        .color(new String[]{"유청색"})
                        .size(new String[]{"225", "230", "235", "240", "245", "250", "255"})
                        .categoryId(categoryRepository.findById(131L).orElse(null))
                        .brand("블랑수블랑").build(),


                Item.builder()
                        .name("SCENE #006")
                        .price(22000)
                        .description("")
                        .imageUrl(new String[]{"", "https://shop-phinf.pstatic.net/20210518_16/1621331…4k_JPEG/22467111956294768_279421828.jpg?type=m510", "   https://shop-phinf.pstatic.net/20210518_31/1621331…v_JPEG/22467111784328394_1723888699.jpg?type=m510"})
                        .color(new String[]{"흑색"})
                        .size(new String[]{"225", "230", "235", "240", "245", "250", "255"})
                        .categoryId(categoryRepository.findById(132L).orElse(null))
                        .brand("리우앤비우").build(),


// 한국 - 악세서리
                Item.builder()
                        .name("당의선 목도리")
                        .price(49000)
                        .description("한복 당의를 모티브로 제작한 당의선 목도리입니다.\n부드럽고 고급스러운 에코털과 코듀로이 소재를 양면으로 사용하였으며, \n양면 모두 착용이 가능한 리버서블 형태입니다.")
                        .imageUrl(new String[]{"", "https://dolsilnai.co.kr/web/product/extra/small/202212/a070d7b0973ad82e2daac40831f740a2.jpg", "https://dolsilnai.co.kr/web/product/extra/small/202212/02a9ea6e681f258e207a0713a7df5081.jpg"})
                        .color(new String[]{"pink"})
                        .categoryId(categoryRepository.findById(141L).orElse(null))
                        .brand("돌실나이").build(),

                Item.builder()
                        .name("양단 배색 가방 + 스크런")
                        .price(49000)
                        .description("스크런치 끝과 가방에 양단 배색을 더하여 디자인 포인트를 주었습니다.\n스크런치를 손가방 위에 덧씌우거나, 가방을 뒤집어서 착용하는 등 다양한 연출이 가능한 상품입니다.")
                        .imageUrl(new String[]{"", "https://dolsilnai.co.kr/web/product/extra/small/202212/7911f1d2ce752af4e9781506a86478d8.jpg", "https://dolsilnai.co.kr/web/product/extra/small/202212/e9375adb567f31f51d64025a54b8aaca.jpg"})
                        .color(new String[]{"분홍", "제트블랙", "베이지"})
                        .categoryId(categoryRepository.findById(141L).orElse(null))
                        .brand("돌실나이").build(),

                Item.builder()
                        .name("패딩스카프 매난국죽")
                        .price(20000)
                        .description("한복진흥센터와의 한류연계 협업콘텐츠 기획개발 지원사업의 일환으로 제작된 디자인 중 하나입니다.\n매난국죽을 모티브로 프린팅된 원단으로 제작되었으며\n솜을 넣은 패딩원단으로 제작되어 따뜻하게 착용하실 수 있습니다.")
                        .imageUrl(new String[]{"", "https://www.tchaikim.co.kr/web/upload/NNEditor/20220113/E38587.jpg", "https://www.tchaikim.co.kr/web/product/big/202201/160367f8e49d0ba290d0a968cc4347a9.jpg"})
                        .color(new String[]{"red", "green"})
                        .categoryId(categoryRepository.findById(142L).orElse(null))
                        .brand("차이킴").build(),

                Item.builder()
                        .name("스카프 매난국죽")
                        .price(19000)
                        .description("사군자(매화,난초,국화,대나무)를 모티브로 제작한 차이킴만의 매난국죽 프린팅 스카프를 다양한 스타일로 활용해보세요.")
                        .imageUrl(new String[]{"", "https://www.tchaikim.co.kr/web/upload/NNEditor/20220510/EC8AA4ECB9B4ED9484C_EBA7A4EB829CEAB5ADECA3BD2.jpg", "https://www.tchaikim.co.kr/web/upload/NNEditor/20220510/EC8AA4ECB9B4ED9484C_EBA7A4EB829CEAB5ADECA3BDBACK.jpg"})
                        .color(new String[]{"green"})
                        .categoryId(categoryRepository.findById(142L).orElse(null))
                        .brand("차이킴").build(),

                Item.builder()
                        .name("차이킴 와펜")
                        .price(13800)
                        .description("* 저고리(hanbok top)가 리오더 되었습니다.")
                        .imageUrl(new String[]{"", "https://www.tchaikim.co.kr/web/upload/gallery/store/057-10.jpg", "https://www.tchaikim.co.kr/web/upload/gallery/store/057-5.jpg"})
                        .categoryId(categoryRepository.findById(142L).orElse(null))
                        .brand("차이킴").build(),

                Item.builder()
                        .name("나비 노리개")
                        .price(9000)
                        .description("나비장식에 쌍봉이 예쁜 노리개 입니다. 은은한 컬러감으로 다양한 컬러에 잘 어울립니다. 한복 노리개 또는 키링으로 사용하셔도 좋습니다.")
                        .imageUrl(new String[]{"", "https://cdn.imweb.me/thumbnail/20220420/0c63acee1ca82.jpg", "https://cdn.imweb.me/upload/S201905085cd22585c0b49/99eaaefa072f5.jpg"})
                        .color(new String[]{"하늘", "보라/연두", "보라/연상아", "민트", "연상아"})
                        .categoryId(categoryRepository.findById(143L).orElse(null))
                        .brand("나빔").build(),
                
                Item.builder()
                        .name("복주머니 노리개")
                        .price(8000)
                        .description("복장식이 한국적 분위기를 더해주는 복주머니 노리개 입니다. 은은한 컬러감으로 다양한 컬러에 잘 어울립니다. 한복 노리개 또는 키링으로 사용하셔도 좋습니다.")
                        .imageUrl(new String[]{"", "https://cdn.imweb.me/thumbnail/20220420/e5201c3d0bba2.jpg", "https://cdn.imweb.me/upload/S201905085cd22585c0b49/ed956543e6d1e.jpg"})
                        .color(new String[]{"연상아"})
                        .categoryId(categoryRepository.findById(143L).orElse(null))
                        .brand("나빔").build(),

                Item.builder()
                        .name("오얏나비 나전칠기 노리개")
                        .price(17600)
                        .description("아름다운 한국 고유의 미감을 표현한 아이템입니다.")
                        .imageUrl(new String[]{"", "https://www.happly.co.kr/web/upload/NNEditor/20220822/f05807b5f5d6012cc8e758cf7e6ed0cf.jpg", "https://www.happly.co.kr/web/upload/NNEditor/20220822/fab38ea2c0837afd5d063c953e34b17a.jpg"})
                        .categoryId(categoryRepository.findById(144L).orElse(null))
                        .brand("하플리").build(),

                Item.builder()
                        .name("댕기")
                        .price(22100)
                        .description("댕기 끝부분을 뾰족하게 접어 만든 '제비부리' 댕기를 하플리 스타일로 디자인했습니다. 반묶음, 포니테일, 로우번 등 다양한 스타일링으로 연출하실 수 있으며, 트윌리로도 활용 가능합니다.")
                        .imageUrl(new String[]{"", "https://ibb.co/bHSmyZD", "https://ibb.co/txwvp3d"})
                        .color(new String[]{"군청색", "비색", "훈색"})
                        .categoryId(categoryRepository.findById(144L).orElse(null))
                        .brand("하플리").build(),


/* 일본 */
// 일본 - 기모노
                Item.builder()
                        .name("쿠모 이브닝 기모노")
                        .price(26300)
                        .description("톡톡 튀고 상큼한 비비드 컬러와 플라워패턴으로 화사한 꽃처럼 화려함을 선사합니다.")
                        .imageUrl(new String[]{"https://ae01.alicdn.com/kf/Hd43d3e5583b74f11b4664bf5d06784653/Onesize-v.jpg_Q90.jpg_.webp",
                                "https://ae01.alicdn.com/kf/H86815edcbe474770bcf86f1a355d71c2d/Onesize-v.jpg_Q90.jpg_.webp",
                                "https://ae01.alicdn.com/kf/Hc31da9f6f76245629df2fe6cc389c9caD/Onesize-v.jpg_Q90.jpg_.webp"})
                        .color(new String[]{"흑색", "적색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(211L).orElse(null))
                        .brand("소라노카오리").build(),

                Item.builder()
                        .name("코바나 기모노")
                        .price(25900)
                        .description("고급 기모노 원단으로 제작되었습니다. 파스텔릭한 부드러운 색감에 사랑스러운 기모노입니다.")
                        .imageUrl(new String[]{"https://ae01.alicdn.com/kf/Hc02a9806ec5a4a1ba54f207f17a60ae0X/-.jpg_640x640.jpg",
                                "https://ae01.alicdn.com/kf/H7aeefc8fbe4642e2b6d200ccc3bb59b21/-.jpg_Q90.jpg_.webp",
                                "https://ae01.alicdn.com/kf/Hf04a6c4418e24a4caa0c311ebe0016a5d/-.jpg_640x640.jpg"})
                        .color(new String[]{"청색", "분홍색", "흑색"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(211L).orElse(null))
                        .brand("소라노카오리").build(),

                Item.builder()
                        .name("오비 빈티지 이브닝 드레스")
                        .price(29300)
                        .description("한 사이즈, 조절 가능한 벨트가 있습니다.\n습관에 따라 벨트가 길어지고 짧아 질 수 있습니다")
                        .imageUrl(new String[]{"https://ae01.alicdn.com/kf/Hb9894978b2e243a4a446f58e0d83fb83T.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(211L).orElse(null))
                        .brand("소라노카오리").build(),

                Item.builder()
                        .name("실크 레이온")
                        .price(29000)
                        .description("부드러운 원단의 실크와 매혹적인 패턴의 무늬가 있습니다")
                        .imageUrl(new String[]{"https://ae01.alicdn.com/kf/HTB18OB0LpXXXXaoXXXXq6xXFXXXv.jpg"})
                        .color(new String[]{"하양", "빨강", "핑크"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(211L).orElse(null))
                        .brand("소라노카오리").build(),

                Item.builder()
                        .name("사쿠라 프린트")
                        .price(28538)
                        .description("사랑스러운 사쿠라 프린트에 기모노가 더해져 파티에 입고 가기 좋습니다.")
                        .imageUrl(new String[]{"https://ae01.alicdn.com/kf/HTB1srdkaLb2gK0jSZK9q6yEgFXaH/-.jpg_640x640.jpg",
                                "https://ae01.alicdn.com/kf/H1d36e32e747148bdb3c73c0440eb18fc3.jpg",
                                "https://ae01.alicdn.com/kf/H8f05c58e94ad4c738c76aef02d44475ba.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(211L).orElse(null))
                        .brand("소라노카오리").build(),

                Item.builder()
                        .name("오비 플라워")
                        .price(33062)
                        .description("플라워의 단아하고 우아한 패턴이 공존합니다.")
                        .imageUrl(new String[]{"https://ae01.alicdn.com/kf/HTB1jFH9RFXXXXcGXFXXq6xXFXXXZ/-.jpg_Q90.jpg_.webp",
                                "https://ae01.alicdn.com/kf/HTB1XMp5LpXXXXXcXXXXq6xXFXXXa.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(211L).orElse(null))
                        .brand("소라노카오리").build(),

// 하나비라
                Item.builder()
                        .name("동쪽의 레이스")
                        .price(26698)
                        .description("화려한 일본 기모노 의상은 전통적인 일본 의상과 꽃무늬 디자인, 뒷면에 귀여운 리본 매듭이 있는 넓은 오비 벨트, 느슨한 긴 소매가 특징입니다. ")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/71nD5Ultv1L._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/71O6MBLyCAL._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/71vofv3-nXL._AC_UX679_.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(212L).orElse(null))
                        .brand("하나비라").build(),

                Item.builder()
                        .name("꽃 무늬 긴 새틴")
                        .price(28032)
                        .description("탈부착이 가능한 셀프 벨트로 편안함을 유지하고 일상 생활에서 움직임을 방해하지 않습니다")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/71ijSfxcZWL._AC_UY741_.jpg",
                                "https://m.media-amazon.com/images/I/71G6yF97t1L._AC_UY741_.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(212L).orElse(null))
                        .brand("하나비라").build(),

                Item.builder()
                        .name("오비 벨트가 있는 꽃")
                        .price(28032)
                        .description("탈부착이 가능한 셀프 벨트로 편안함을 유지하고 일상 생활에서 움직임을 방해하지 않습니다")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/71nKyapcLuL._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/71GxVeYmz7L._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/71DaOHanRKL._AC_UX679_.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(212L).orElse(null))
                        .brand("하나비라").build(),

                Item.builder()
                        .name("오비 벨트가 있는 꽃2")
                        .price(28032)
                        .description("탈부착이 가능한 셀프 벨트로 편안함을 유지하고 일상 생활에서 움직임을 방해하지 않습니다")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/710LYtuHZTL._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/71+ev5GgDqL._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/71LtwoRtqiL._AC_UX679_.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(212L).orElse(null))
                        .brand("하나비라").build(),

                Item.builder()
                        .name("오비 벨트가 있는 꽃3")
                        .price(25363)
                        .description("탈부착이 가능한 셀프 벨트로 편안함을 유지하고 일상 생활에서 움직임을 방해하지 않습니다")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/71nKyapcLuL._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/71GxVeYmz7L._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/71DaOHanRKL._AC_UX679_.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(212L).orElse(null))
                        .brand("하나비라").build(),

                Item.builder()
                        .name("오비 벨트가 있는 꽃4")
                        .price(25363)
                        .description("탈부착이 가능한 셀프 벨트로 편안함을 유지하고 일상 생활에서 움직임을 방해하지 않습니다")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/716z15kBVBL._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/71cCYKENMmL._AC_UX679_.jpg",
                                "https://m.media-amazon.com/images/I/711HgdL-UoL._AC_UX679_.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(212L).orElse(null))
                        .brand("하나비라").build(),

                //스즈노기모노
                Item.builder()
                        .name("쿄우에츠 하카마")
                        .price(156100)
                        .description("칠흑의 고하띠 빨강과 황이 어우러져 있는 꽃무늬 기모노입니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/71r+TObctHL._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/61oQp3y93wL._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/81ChhMWgRoL._AC_UL500_.jpg"})
                        .color(new String[]{"빨강", "핑크", "파랑"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(213L).orElse(null))
                        .brand("스즈노기모노").build(),
                
                Item.builder()
                        .name("척수옷 화려함")
                        .price(132300)
                        .description("칠흑의 고하띠 빨강과 황이 어우러져 있는 꽃무늬 기모노입니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/71oshPiCI7L._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/619mjxmLVFL._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/61XF6+JwmJL._AC_UL500_.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(213L).orElse(null))
                        .brand("스즈노기모노").build(),
                
                Item.builder()
                        .name("쿄우에츠 고세트")
                        .price(132300)
                        .description("칠흑의 고하띠 빨강과 황이 어우러져 있는 꽃무늬 기모노입니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/71oshPiCI7L._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/718WQkHGlVL._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/61XF6+JwmJL._AC_UL500_.jpg", "https://m.media-amazon.com/images/I/81YC6KyPeiL._AC_UL500_.jpg"})
                        .color(new String[]{"검정", "파랑", "보라"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(213L).orElse(null))
                        .brand("스즈노기모노").build(),
                
                Item.builder()
                        .name("소녀고 롬퍼스")
                        .price(33200)
                        .description("아카창은 옷을 더럽히기 쉬운 이군요.만약 하카마가 더럽혀져 버려도집에서 간단하게 씻을 수 있는 타입의 하카마는,손질이 간단합니다.고부분으로 버튼 부착에 기저귀 교환도 편안하게.갈아 입기가 까다로운 아카창에서도 간단하게 부드럽게 갈아 입기 를 할 수 있습니다")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/71sAUKINweL._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/71EQd-zTH0L._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/71dHmETqY+L._AC_UL500_.jpg"})
                        .color(new String[]{"빨강", "보라", "핑크"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(213L).orElse(null))
                        .brand("스즈노기모노").build(),
                
                Item.builder()
                        .name("척수옷 무지고화")
                        .price(120300)
                        .description("주황빛이 눈에 띄는 마츠리 기모노입니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/7163-6RP-NL._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/71MQSJHzhpL._AC_UL500_.jpg",
                                "https://m.media-amazon.com/images/I/61L3ZqUNfIL._AC_UL500_.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(213L).orElse(null))
                        .brand("스즈노기모노").build(),
                
                Item.builder()
                        .name("오오키니 하오리")
                        .price(118100)
                        .description("외출시의 방한 대책에 날렵하게 걸쳐 입을 수 있는 편리한장 하오리입니다.\n여러가지 무늬를 준비 하고 있기 때문에,옷 에 따라 코디네이트도 즐길 수 있습니다.\n옷을 얼룩부터 지키는 먼지 제외할 수 있어도 부디.\n공옷감의 하오리뉴가 붙어 있기 때문에,별도 하오리뉴를 구입 하는 필요는 없습니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/51tzcPFFUJL.jpg",
                                "https://m.media-amazon.com/images/I/61DChIJK5xL.jpg",
                                "https://m.media-amazon.com/images/I/51CgfmuhaIL.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(213L).orElse(null))
                        .brand("스즈노기모노").build(),


// 일본 - 유카타
                Item.builder()
                        .name("감색 베이지")
                        .price(264900)
                        .description("시원함을 유지하며, 원단은 적당하게 얇게 들여다보여 느낌이 있습니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/5124G-nYLJL.jpg", "https://m.media-amazon.com/images/I/512yELDO0-L.jpg"})
                        .color(new String[]{"빨강","검정", "파랑"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(110L).orElse(null))
                        .brand("소라노카오리").build(),
                
                Item.builder()
                        .name("소녀 유카타")
                        .price(57900)
                        .description("매일 착용을 위해 충분히 튼튼한 고품질 물자로 만듭니다")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/51xc2rgwAEL.jpg", "https://m.media-amazon.com/images/I/61nxJ6-iQGL.jpg"})
                        .color(new String[]{"빨강","검정", "파랑"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(110L).orElse(null))
                        .brand("소라노카오리").build(),
                
                Item.builder()
                        .name("매화나무에 묘녹차색")
                        .price(57900)
                        .description("녹차색과 고양이가 어우러진 묘한 느낌의 기모노입니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/51d2wgINS6L.jpg","https://m.media-amazon.com/images/I/51T17aP4S3L.jpg","https://m.media-amazon.com/images/I/519fxxAPZwL.jpg"})
                        .color(new String[]{"골드","빨강"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(110L).orElse(null))
                        .brand("소라노카오리").build(),
                
                Item.builder()
                        .name("회감색국화")
                        .price(240700)
                        .description("차분한 계열의 금붕어 레트로 모던 면반폭띠 입니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/415c0I0ONxL.jpg", "https://m.media-amazon.com/images/I/51AMOX-YeoL.jpg","https://m.media-amazon.com/images/I/51L0iVVBttL.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(110L).orElse(null))
                        .brand("소라노카오리").build(),
                
                Item.builder()
                        .name("백계흑마의 엽줄무늬")
                        .price(68200)
                        .description("메인 소재: 100% 면 소재 구성: 100% 면으로 만들어진 아이보리지에 흑등 색상 제품입니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/51rEkECpguL.jpg", "https://m.media-amazon.com/images/I/510sRaEPKhL.jpg"})
                        .color(new String[]{"빨강","검정", "파랑"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(110L).orElse(null))
                        .brand("소라노카오리").build(),
                
                Item.builder()
                        .name("박청록색")
                        .price(240700)
                        .description("원단은 적당하게 얇으며 시원해 보이는 느낌이 있습니다.")
                        .imageUrl(new String[]{"https://m.media-amazon.com/images/I/41QZ04zOOdL.jpg", "https://m.media-amazon.com/images/I/41RsBHG2YBL.jpg","https://m.media-amazon.com/images/I/51lhnF2r0EL.jpg"})
                        .size(new String[]{"S", "M", "L"})
                        .categoryId(categoryRepository.findById(110L).orElse(null))
                        .brand("소라노카오리").build(),

// 일본 - 신발
                Item.builder()
                        .name("모브 zouri")
                        .price(18150)
                        .description("다소 넓지만 깔끔하게 보이는 형태를 음미해, 너무 높지도 너무 낮지도 않은 절묘한 높이의 신입니다.")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/214/000000021450/000000021450-08-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/214/000000021450/000000021450-09-xl.jpg?t=20230516143908"})
                        .size(new String[]{"230", "240", "250"})
                        .categoryId(categoryRepository.findById(231L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("실버 x 등나무꽃 zouri")
                        .price(18150)
                        .description("모양과 질감이 아름다운 받침대에 산뜻하고 하얀 코끈, 단정한 외관으로 착용감은 편안한 캐주얼부터 세미정장까지 폭넓게")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/208/000000020876/000000020876-08-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/208/000000020876/000000020876-12-l.jpg?t=20230516143908"})
                        .size(new String[]{"230", "240", "250"})
                        .categoryId(categoryRepository.findById(231L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("패브릭 x 화이트 zouri")
                        .price(18150)
                        .description("보기에도 착용감도 고집한 고품질의 짚신, 쿠루리 오리지널 짚신")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/225/000000022517/000000022517-03-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/225/000000022517/000000022517-02-l.jpg?t=20230516143908"})
                        .size(new String[]{"230", "240", "250"})
                        .categoryId(categoryRepository.findById(231L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("에메랄드 그린 x 퍼플 zouri")
                        .price(18150)
                        .description("윤기 나고 아름답게 가공된 에메랄드 에나멜입니다. 밝은 빛깔과 화려한 질감으로 코디에 화려함을 더합니다.")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/222/000000022203/000000022203-07-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/222/000000022203/000000022203-09-l.jpg?t=20230516143908"})
                        .size(new String[]{"230", "240", "250"})
                        .categoryId(categoryRepository.findById(231L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("브라운 zouri")
                        .price(18150)
                        .description("윤기 있고 아름다운 질감으로 고급스러움을 더해줍니다.")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/211/000000021190/000000021190-08-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/211/000000021190/000000021190-12-l.jpg?t=20230516143908"})
                        .size(new String[]{"230", "240", "250"})
                        .categoryId(categoryRepository.findById(231L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("오프 화이트 x 등나무꽃 zouri")
                        .price(18150)
                        .description("잔무늬, 데님 기모노의 세련된 포인트가 되어줍니다. 은은한 색감으로 고급스러움을 더해줍니다.")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/217/000000021789/000000021789-08-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/217/000000021789/000000021789-09-l.jpg?t=20230516143908"})
                        .size(new String[]{"230", "240", "250"})
                        .categoryId(categoryRepository.findById(231L).orElse(null))
                        .brand("くるり").build(),


// 일본 - 악세서리
                Item.builder()
                        .name("백묘 양산 오비도메")
                        .price(4730)
                        .description("여름 푸른 하늘에 아름다운 하얀 레이스 양산\n가련한 레이스의 모양에는 꽃과 잎이 흩어져 주위의 색이 반사해 옅고 바쁘게 붙어 있습니다.\n상쾌한 여름의 날을 장식하는 오비메입니다.")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/224/000000022413/000000022413-02-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/224/000000022413/000000022413-08-l.jpg?t=20230516143908"})
                        .categoryId(categoryRepository.findById(240L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("친숙한 벚꽃 오비도메")
                        .price(3300)
                        .description("마치 생화와 같은 잔잔함, 반짝반짝 빛나는 라인석이 포인트입니다.\n꽃잎 한 장 한 장에 움직임을 붙여, 마치 생화와 같은 서늘함을 표현했습니다.")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/198/000000019861/000000019861-03-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/198/000000019861/000000019861-06-l.jpg?t=20230516143908"})
                        .categoryId(categoryRepository.findById(241L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("홍매화 오비도메")
                        .price(3300)
                        .description("봄의 방문을 예감시키는 다채로운 홍매화를 띠에 디자인했습니다.\n선명한 색조로 화려한 기모노에 맞추어 화려하게, 심플 코디에 악센트가 되어줍니다.")
                        .imageUrl(new String[]{"", "https://image.rakuten.co.jp/kururi-poche/cabinet/totonoustock/buying21b/od0489996_1.jpg", "https://image.rakuten.co.jp/kururi-poche/cabinet/totonoustock/buying21b/od0489996_6.jpg"})
                        .categoryId(categoryRepository.findById(241L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("비내리는 구름의 오비도메")
                        .price(4730)
                        .description("비와 구름을 표현했습니다. 투명감 있는 클리어 유리에 라이트 그레이와 스카이 블루의 색 유리를 대리석 모양으로 더했습니다. 바닥에 한층 더 라이트 그레이의 색 유리를 깔아 구름을 표현했습니다.")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/214/000000021441/000000021441-03-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/214/000000021441/000000021441-08-l.jpg?t=20230516143908"})
                        .categoryId(categoryRepository.findById(241L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("제비꽃 일륜 오비도메")
                        .price(3300)
                        .description("아름다운 제비꽃 중앙에 모조 다이아몬드를 곁들였습니다.\n세세한 부분까지 섬세하게 표현되어 눈길을 사로잡는 오비메입니다.")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/205/000000020588/000000020588-04-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/205/000000020588/000000020588-07-l.jpg?t=20230516143908"})
                        .categoryId(categoryRepository.findById(241L).orElse(null))
                        .brand("くるり").build(),

                Item.builder()
                        .name("벚꽃잎 네쓰케")
                        .price(5280)
                        .description("봄의 햇살 속, 나풀나풀 춤추는 가련한 벚꽃의 꽃잎입니다.")
                        .imageUrl(new String[]{"", "https://kururi.itembox.design/product/198/000000019852/000000019852-04-l.jpg?t=20230516143908", "https://kururi.itembox.design/product/198/000000019852/000000019852-02-l.jpg?t=20230516143908"})
                        .categoryId(categoryRepository.findById(241L).orElse(null))
                        .brand("くるり").build()
        };
        Arrays.stream(hanbok_tradition_items).forEach(item -> itemRepository.save(item));
    }
}