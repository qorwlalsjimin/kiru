package mirim.itshow.kiru.service;

import mirim.itshow.kiru.controller.json.ItemsJson;
import mirim.itshow.kiru.controller.json.RentJson;
import mirim.itshow.kiru.dao.*;
import mirim.itshow.kiru.entity_domain.*;
import mirim.itshow.kiru.entity_domain.enum_col.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class RentService {
    @Autowired
    RentRepository rentRepository;

    @Autowired
    RentItemRepository rentItemRepository;

    @Autowired
    RentDeliverInfoRepository rentDeliverInfoRepository;

    @Autowired
    MemberRepository memberRepository;

    @Autowired
    ItemRepository itemRepository;


    public Rent addRent(RentJson rentJson, String memberid) {
        //1. Rent로 하나의 대여 프로세스 만들기
        Member member = memberRepository.findById(Long.parseLong(memberid)).get();
        Rent rent = Rent.createRent(member);
        rentRepository.save(rent);

        //2. RentItem으로 List 만들기 (Rent id 가지고 DB에 삽입)
        List<RentItem> itemList = new ArrayList<>();
        for(ItemsJson json : rentJson.getRentItems()){
            Item item = itemRepository.findById(json.getItemId()).get();
            RentItem rentItem = RentItem.createRentItem(json, item, rent);
            rentItemRepository.save(rentItem);
            itemList.add(rentItem);
        }

        //3. RentDeliverInfo에 값 삽입
        RentDeliverInfo rentDeliverInfo = RentDeliverInfo.createRentDeliverInfo(rentJson.getDeliverInfos(), rent);
        rentDeliverInfoRepository.save(rentDeliverInfo);

        //4. Rent에 대여일 등 값 삽입
        // - 대여일
        DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE; //String to DateTime 포맷
        rent.setStartDate(LocalDate.parse(rentJson.getDate().toString().substring(0, 10), formatter)); //대여 시작일
        rent.setEndDate(LocalDate.parse(rentJson.getDate().toString().substring(11), formatter)); //대여 마지막일

        // - 대여 상태
        rent.setStatus(Status.READY);

        // - timestamp
        LocalDateTime now = LocalDateTime.now();
        rent.setCreateTimestamp(now);

        return rentRepository.save(rent);
    }
}
